App.ForksRoute = Ember.Route.extend({
    model:function(params){
        var repo = this.modelFor("repository");
        return Ember.$.getJSON(repo.forks_url);
    },
    renderTemplate:function(){
        return this.render('src/app/user/repository/forks/forks');
    }
});