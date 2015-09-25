Meteor.methods({

  addRecipe: function(title, ingredients, method) {
    if(! Meteor.userId()) {
      throw new Meteor.Error("not-authorised");
    }

    Recipes.insert({
      title: title,
      ingredients: ingredients,
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
