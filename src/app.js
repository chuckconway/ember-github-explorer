App = Ember.Application.create({
    rootElement :"#app-root",
    LOG_TRANSITIONS: true
});

App.ApplicationRoute = Ember.Route.extend({
    renderTemplate:function(){
        this.render('src/app');
    }
});

Ember.Handlebars.registerBoundHelper('fromDate', function(theDate){
    var today = moment();
    var target = moment(theDate);

    return target.from(today);
});

