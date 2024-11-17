const { Component, mount, xml, useState } = owl;
import { Task } from "./task.js";

// Owl Components
class Root extends Component {
  static components = { Task };
  static template = xml`
  
  <div class="m-0 p-4 bg-white rounded">
  <!-- Add Task Button -->
  <div>
    <button class="btn btn-primary mb-3" type="button" t-on-click="addTask">Add New Task</button>
  </div>  

  <!-- Input Fields -->
  <div class="input-group-lg bg-white rounded border d-flex w-100 align-items-center mb-3">
    <input type="text" 
    class="form-control-lg fs-5 flex-fill border-0" 
    placeholder="Task Name" name="taskName"
    t-att-value="state.name" t-model="state.name"/>
    <input type="color" 
    class="form-control-lg border-0 bg-white form-control-color ms-2" title="Choose Task Color"
    t-att-value="state.color" t-model="state.color"/>
  </div>
  
  <!-- Task Table -->
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Task Name</th>
        <th scope="col">Color</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
    <t t-foreach="tasks" t-as="task" t-key="task.id">
      <Task task="task" onDelete.bind="deleteTask"/>
      </t>
    </tbody>
  </table>
</div>

  `

  setup(){
    this.state = useState({
      name: "",
      color: "#FFF700",
      isCompleted: false,
      isEditing: false
  });

    this.tasks = useState([])
  }

  // function to add task
  addTask(){
    // do not allow empty task name
  if (!this.state.name){
      alert("Please add task.")
      return
  }

  // add unique id
  const id = Math.random().toString().substring(2,12)

  // add new task
  this.tasks.push({
      id,
      name: this.state.name,
      color: this.state.color,
      isCompleted: this.state.isCompleted,
  })

  // reset states after saving
  let state = this.state
    this.state = {...state, name:"", color: "#FFF700"}
  }
  

  // delete task
  deleteTask(task) {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    this.tasks.splice(index, 1);
}
}

mount(Root, document.getElementById("root"))