App.CommitsRoute = Ember.Route.extend({
    model:function(params){
        var repo = this.modelFor("repository");
        var url = repo.commits_url.replace("{/sha}", "");
        return Ember.$.getJSON(url);
    },
    renderTemplate:function(){
        return this.render('src/app/user/repository/commits/commits');
    }
});