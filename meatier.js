Recipes = new Mongo.Collection("recipes");

if (Meteor.isClient) {
  Template.body.helpers({
    recipes: function() {
      return Recipes.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
