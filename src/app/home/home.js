
var devs = [
    {login:"chuckconway", name:"Chuck Conway"}
];


App.IndexRoute = Ember.Route.extend({
    model:function(){
        return devs;
    },
    renderTemplate:function(){
        this.render('src/app/home/home');
    }
});

App.IndexController = Ember.ArrayController.extend({
    renderedOn:function(){
      return new Date();
    }.property(),

    //All actions
    actions: {
        clicked: function () {
            alert("Hi Chuck");
        }
    }
});
