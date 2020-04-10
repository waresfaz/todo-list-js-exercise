function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function(){
      console.log(`${task.title} has${task.complete ? " " : " not "}been copmleted`);
    },

    markCompleted: function() {
      this.complete = true;
    }

  };
  return task;
}


 // DRIVER CODE BELOW

 const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
 const task2 = newTask("Do Laundary", "😨");
 const tasks = [task1, task2];

//  logTaskState(task1); // Clean Cat Litter has not been completed
//  completeTask(task1);
//  logTaskState(task1); // Clean Cat Litter has been completed

 console.log(tasks);
