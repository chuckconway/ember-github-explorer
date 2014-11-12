App.RepositoriesRoute = Ember.Route.extend({
   model:function(){
       var user = this.modelFor('user');
       return Ember.$.getJSON(user.repos_url);
   },
    renderTemplate:function(){
        this.render('src/app/user/repositories/repositories');
    }
});

App.RepositoriesController = Ember.ArrayController.extend({
   needs:["user"],
    user: Ember.computed.alias("controllers.user")
});