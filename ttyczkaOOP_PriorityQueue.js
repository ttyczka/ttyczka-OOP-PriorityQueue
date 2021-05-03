
function PriorityQueue () {
    var todoList = [];
    this.printtodoList = function() {
      (console.log(todoList));
    };
    this.enqueue = function(element){
        if (this.isEmpty()){ 
            todoList.push(element);
        } else {
            var added = false;
            for (var i=0; i<todoList.length; i++){
                 if (element[1] < todoList[i][1]){ 
                    todoList.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if (!added){
                todoList.push(element);
            }
        }
    };
    this.dequeue = function() {
        var value = todoList.shift();
        return value[0];
    };
    this.front = function() {
        return todoList[0];
    };
    this.size = function() {
        return todoList.length; 
    };
    this.isEmpty = function() {
        return (todoList.length === 0); 
    };
}

var Task = new PriorityQueue(); 
Task.enqueue(['Complete Late Assignment', 6]); 
Task.enqueue(['Submit Late Assignment', 5]);
Task.enqueue(['Take Exam', 2]);
Task.enqueue(['Study for Exam', 4]);
Task.enqueue(['Attend Class', 3]);
Task.enqueue(['Work on Homework', 1]);
Task.enqueue(['Email Professor',1]);
Task.printtodoList();
Task.dequeue();
console.log(Task.front());
Task.printtodoList();
