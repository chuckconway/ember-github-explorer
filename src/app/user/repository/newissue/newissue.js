App.RepositoryNewissueController= Ember.Controller.extend({
    needs:["repository"],
    repo:Ember.computed.alias("controllers.repository"),
    issue:function(){
       return App.Issue.create()
    }.property("repo.model"),
    actions:{

        submitIssue:function(){
            //var title = $('#new-issue-title').val();
            //var body = $('#new-issue-body').val();

            //var vals = this.getProperties("title", "body");
            //console.log(vals);

           //Post issue_url
            var url = this.get("repo").get("issues_url");

            //Ember.$.post(url, {title:title, body:body}, function(result){
            //    //success
            //    this.transitinoToRoute("issues");
            //});

            var issue = this.get("issue");

            console.log(issue.get('title') + 'property');

            console.log("ISsue Saved");

            this.set("issue", App.Issue.creat());
            this.transitionToRoute("issues");
        }
    }
});

App.Issue = Ember.Object.extend({
    title:"",
    body:"",
    isValid:function(){
        //do some validation

        return true;
    }
});

App.RepositoryNewissueRoute = Ember.Route.extend({
    renderTemplate:function(){
        return this.render('src/app/user/repository/newissue/newissue');
    }
});