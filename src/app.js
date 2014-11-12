App = Ember.Application.create({
    rootElement :"#app-root",
    LOG_TRANSITIONS: true
});

App.ApplicationRoute = Ember.Route.extend({
    renderTemplate:function(){
        this.render('src/app');
    }
});