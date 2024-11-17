const { Component, mount, xml } = owl;

// Owl Components
class Root extends Component {
  static template = xml`
  
  <div class="m-0 p-4 bg-white rounded">
  <!-- Add Task Button -->
  <div>
    <button class="btn btn-primary mb-3" type="button">Add New Task</button>
  </div>  

  <!-- Input Fields -->
  <div class="input-group-lg bg-white rounded border d-flex w-100 align-items-center mb-3">
    <input type="text" class="form-control-lg fs-5 flex-fill border-0" placeholder="Task Name" name="taskName"/>
    <input type="color" class="form-control-lg border-0 bg-white form-control-color ms-2" value="#563d7c" title="Choose Task Color"/>
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
      <tr>
        <td>
        <div class="form-check form-switch fs-5 name-dark">
          <input class="form-check-input" type="checkbox" value="" role="switch" id="flexCheckDefault"/>
          <label for="flexCheckDefault">
            Default Checkbox
          </label>
        </div>
        </td>
        <td>
          <input type="color" class="form-control-color border-0" value="#563d7c"/>
        </td>
        <td>
          <button class="btn btn-primary me-2"><i class="bi bi-pencil"></i></button>
          <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

  `
}

mount(Root, document.getElementById("root"))