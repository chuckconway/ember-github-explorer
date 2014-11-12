App.Router.map(function(){
   this.resource("user", {path:"/users/:login"}, function(){
        this.resource("repositories");
       this.resource("repository", {path: "repositories/:reponame"}, function(){
           this.resource("issues");
           this.resource("forks");
           this.resource("commits");
       });
   });
});

App.UserRoute = Ember.Route.extend({
   model:function(params){
     return Ember.$.getJSON("https://api.github.com/users/" + params.login); // this is a promise. Ember knows how to handle jquery promises.
   },
    renderTemplate:function(){
        this.render('src/app/user/user');
    }
});

