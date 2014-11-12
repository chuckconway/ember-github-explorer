App.IssuesRoute = Ember.Route.extend({
    model:function(params){

        var repo = this.modelFor("repository");
        var url = repo.issues_url.replace("{/number}", "");

        return Ember.$.getJSON(url);
    },
    renderTemplate:function(){
       return this.render('src/app/user/repository/issues/issues');
    }
});