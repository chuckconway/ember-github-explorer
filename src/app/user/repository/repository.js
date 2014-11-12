App.RepositoryRoute = Ember.Route.extend({
    model:function(params){
        var user = this.modelFor("user");

        //build the url of the repo call manually
        var url = "https://api.github.com/repos/" + user.login + "/" + params.reponame;
        return Ember.$.getJSON(url);
    },
    renderTemplate:function(){
       return this.render('src/app/user/repository/repository');
    }
});

App.RepositoryController = Ember.ObjectController.extend({
    needs:["user"],
    user: Ember.computed.alias("controllers.user")
});