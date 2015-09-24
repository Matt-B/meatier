Recipes = new Mongo.Collection("recipes");

Meteor.subscribe("recipes");

Template.body.helpers({
  recipes: function() {
    return Recipes.find({});
  }
});

Template.body.events({
  "submit .new-recipe": function(event) {
    event.preventDefault();
    var method = event.target.text.value;
    Meteor.call("addRecipe", method);
    event.target.text.value = "";
  }
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
