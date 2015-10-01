Template.newRecipeModal.events({
    'click #addIngredientButton': function() {
      var ingredientsList = $('#ingredientList');
      $("<p /><input type='text' name='ingredient' />").appendTo(ingredientsList);
    }
});
