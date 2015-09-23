Recipes = new Mongo.Collection("recipes");

if (Meteor.isClient) {
  Template.body.helpers({
    recipes: function() {
      return Recipes.find({});
    }
  });

  Template.body.events({
    "submit .new-recipe": function(event) {
      event.preventDefault();
      var method = event.target.text.value;
      Recipes.insert({
        method: method,
        createdAt: new Date()
      });
      event.target.text.value = "";
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
