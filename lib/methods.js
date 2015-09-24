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
