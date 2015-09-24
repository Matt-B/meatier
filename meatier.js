Recipes = new Mongo.Collection("recipes");

if (Meteor.isClient) {
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


}

if (Meteor.isServer) {
  Meteor.publish("recipes", function() {
    return Recipes.find();
  });
}


Meteor.methods({
  addRecipe: function(method) {
    if(! Meteor.userId()) {
      throw new Meteor.Error("not-authorised");
    }

    Recipes.insert({
      method: method,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },
  deleteRecipe: function(id) {
    if(! Meteor.userId()) {
      throw new Meteor.Error("not-authorised");
    }

    Recipes.remove(id);
  }
});
