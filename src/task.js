const { Component, mount, xml, useState } = owl

export class Task extends Component {
   
    static template = xml`

    <tr t-attf-style="background-color:#{props.task.color}">
    <td>
    <div class="form-check form-switch fs-5 name-dark">
      <input class="form-check-input" type="checkbox" value="" role="switch" 
      
      t-att-id="props.task.id"
      t-att-checked="props.task.isCompleted" t-on-click="toggleTask"
      />
      <label t-att-for="props.task.id" t-attf-class="#{props.task.isCompleted ? 'text-decoration-line-through':''}">
      <t t-esc="props.task.name"/>
      </label>
    </div>
    </td>
    <td>
      <input type="color" class="form-control-color border-0" t-att-id="props.task.id" t-att-value="props.task.color"/>
    </td>
    <td>
      <button class="btn btn-primary me-2"><i class="bi bi-pencil"></i></button>
      <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
    </td>
  </tr>

    `
    static props = ["task"];

    // toggle task
    toggleTask() {
        this.props.task.isCompleted = !this.props.task.isCompleted;
    }


}
