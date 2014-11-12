
module.exports = {
    /**
     * And for rapid development, we have a watch set up that checks to see if
     * any of the files listed below change, and then to execute the listed
     * tasks when they do. This just saves us from having to type "grunt" into
     * the command-line every time we want to see what we're working on; we can
     * instead just leave "grunt watch" running in a background terminal. Set it
     * and forget it, as Ron Popeil used to tell us.
     *
     * But we don't need the same thing to happen for all the files.
     */
    watch: {
        /**
         * By default, we want the Live Reload to work for all tasks; this is
         * overridden in some tasks (like this file) where browser resources are
         * unaffected. It runs by default on port 35729, which your browser
         * plugin should auto-detect.
         */
        options: {
            livereload: true
        },

        /**
         * When the Gruntfile changes, we just want to lint it. In fact, when
         * your Gruntfile changes, it will automatically be reloaded!
         */
        gruntfile: {
            files: 'Gruntfile.js',
            tasks: [ 'jshint:gruntfile' ],
            options: {
                livereload: false
            }
        },

        /**
         * When our JavaScript source files change, we want to run lint them and
         * run our unit tests.
         */
        jssrc: {
            files: [
                '<%= app.js %>'
            ],
            tasks: [ 'jshint:src', 'karma:unit:run', 'copy:app_javascript_to_build_javascript', 'copy:copy_all_to_bin' ]
        },


        /**
         * When assets are changed, copy them. Note that this will *not* copy new
         * files, so this is probably not very useful.
         */
        assets: {
            files: [
                'src/assets/**/*'
            ],
            tasks: [ 'copy:build_assets', 'copy:copy_all_to_bin' ]
        },

        /**
         * When index.html changes, we need to compile it.
         */
        html: {
            files: [ '<%= app.html %>' ],
            tasks: [ 'debug' ]
        },

        /**
         * When our templates change, we only rewrite the template cache.
         */
        tpls: {
            files: [
                '<%= app.app_templates %>',
                '<%= app.common_templates %>'
            ],
            tasks: [ 'html2js', 'copy:copy_all_to_bin' ]
        },

        /**
         * When the CSS files change, we need to compile and minify them.
         */
        less: {
            files: [ 'src/**/*.less' ],
            tasks: [ 'less:lint_concat', 'copy:copy_all_to_bin' ]
        },

        /**
         * When a JavaScript unit test file changes, we only want to lint it and
         * run the unit tests. We don't want to do any live reloading.
         */
        spec: {
            files: [
                '<%= app.spec %>'
            ],
            tasks: [ 'jshint:test', 'karma:unit:run' ],
            options: {
                livereload: false
            }
        }

    }

};