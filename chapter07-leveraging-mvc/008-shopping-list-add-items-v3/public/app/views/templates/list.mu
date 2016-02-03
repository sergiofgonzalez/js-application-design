<ul class="list-group">
  {{#shopping_list}}
  <li class="list-group-item">
    {{quantity}}x {{name}} <button class="remove" data-name="{{name}}">x</button>
  </li>
  {{/shopping_list}}
</ul>
<fieldset>
  <legend>Add Groceries</legend>
  <label for="form-name">Name</label>
  <input id="form-name" class="name" placeholder="Example: Avocado" value="{{name}}">
  <label for="form-quantity">Quantity</label>
  <input id="form-quantity" class="quantity" type="number" placeholder="How many?" value="{{quantity}}">
  <button class="add">Add</button>
  {{#error}}
  <div class="alert alert-danger">
    {{error}}
  </div>
  {{/error}}
</fieldset>
