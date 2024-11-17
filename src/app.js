const { Component, mount, xml, useState } = owl;

// Owl Components
class Root extends Component {
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
      <tr t-attf-style="background-color:#{task.color}">
        <td>
        <div class="form-check form-switch fs-5 name-dark">
          <input class="form-check-input" type="checkbox" value="" role="switch" 
          id="flexCheckDefault"
          t-att-id="task.id"/>
          <label t-att-for="task.id">
          <t t-esc="task.name"/>
          </label>
        </div>
        </td>
        <td>
          <input type="color" class="form-control-color border-0" t-att-id="task.id" t-att-value="state.color"/>
        </td>
        <td>
          <button class="btn btn-primary me-2"><i class="bi bi-pencil"></i></button>
          <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
        </td>
      </tr>
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
  

}

mount(Root, document.getElementById("root"))