App.UserIndexRoute = Ember.Route.extend({
   model:function(){
       return this.modelFor('user');
   },
    renderTemplate:function(){
        this.render('src/app/user/index/index');
    }
});
