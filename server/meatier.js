Recipes = new Mongo.Collection("recipes");

Meteor.publish("recipes", function() {
  return Recipes.find();
});
