Meteor.subscribe("recipes");

Template.body.helpers({
  recipes: function() {
    return Recipes.find({});
  }
});

Template.body.events({
  'click .showRecipe': function() {
    Session.set('recipedata', this);
  },
  "submit .new-recipe": function(event) {
    event.preventDefault();
    var title = event.target.title.value;
    var ingredients = [event.target.ingredient.value];
    var method = event.target.method.value;
    Meteor.call("addRecipe", title, ingredients, method);
    $('#newRecipeModal').modal('hide')
    event.target.title.value = "";
    event.target.ingredient.value = "";
    event.target.method.value = "";
  }
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
