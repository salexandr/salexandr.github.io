function TodoCtrl($scope) {

	var questions = localStorage.getItem('repository');
    var ab = JSON.parse(questions);
	$scope.todos = [];
	angular.forEach(ab, function(todo) {
	  if (!todo.done) $scope.todos.push(todo);
	});

    $scope.addTodo = function() {
		$scope.todos.push({contentCat:$scope.category, contentName:$scope.name, contentMessage:$scope.message, done:false, bgcolor:$scope.color});
		$scope.name = '';	
		$scope.message = '';
		localStorage.setItem('repository', JSON.stringify($scope.todos));
    };
 
    $scope.remaining = function() {
		var count = $scope.todos.length;
		angular.forEach($scope.todos, function(todo) {
		  count -= todo.done ? 0 : 1;
		});
		return count;
    };
 
    $scope.archive = function() {
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo) {
		  if (!todo.done) $scope.todos.push(todo);
		});
		localStorage.setItem('repository', JSON.stringify($scope.todos));	
    };
  
  
    $scope.redact = function() {  
	    var text_color = this.todo.bgcolor;
	    $scope.color = text_color;	  
	    var text_category = this.todo.contentCat;
	    $scope.category = text_category;
	    var text_name = this.todo.contentName;
	    $scope.name = text_name;	
	    var text_message = this.todo.contentMessage;
	    $scope.message = text_message;		  
	    var oldTodos = $scope.todos;
	    $scope.todos = [];
	    this.todo.del = true;
	    angular.forEach(oldTodos, function(todo) {
	    if (!todo.del) $scope.todos.push(todo);
	    });
    };
	  
}