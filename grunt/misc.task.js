
module.exports = {
    //This reads the existing package.json so we can use the version and other metadata
    //as we build the application.

    //Inserts the copyright header into the compiled(uglified) js files.
    meta: {
        banner:
            '/**\n' +
                ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
                ' * <%= pkg.homepage %>\n' +
                ' *\n' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                ' * Licensed <%= pkg.licenses.type %> <<%= pkg.licenses.url %>>\n' +
                ' */\n'
    },

    //Creates the change log using the changelog.
    changelog: {
        options: {
            dest: 'CHANGELOG.md',
            template: 'grunt/changelog.tpl'
        }
    }
};