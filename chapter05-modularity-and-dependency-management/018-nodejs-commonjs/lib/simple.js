/* variables declared on the top-most scope don't become globals */
var something = {
  foo: "bar"
};

/* to explicitly define a global you assign the variable to the global object */
global.thing = something;

/* the module's public interface is exported using... */
module.exports = {
  bar: "baz"
};
