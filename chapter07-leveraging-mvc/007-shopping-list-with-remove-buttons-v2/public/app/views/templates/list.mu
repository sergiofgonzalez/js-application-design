<ul class="list-group">
  {{#shopping_list}}
  <li class="list-group-item">
    {{quantity}}x {{name}} <button class="remove" data-name="{{name}}">x</button>
  </li>  
  {{/shopping_list}}
</ul>
