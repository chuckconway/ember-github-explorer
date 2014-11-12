"use strict";

module.exports = {

    /**
     * The `index` task compiles the `index.html` file as a Grunt template. CSS
     * and JS files co-exist here but they get split apart later.
     */
    index: {

        /**
         * During development, we don't want to have wait for compilation,
         * concatenation, minification, etc. So to avoid these steps, we simply
         * add all script files directly to the `<head>` of `index.html`. The
         * `src` property contains the list of included files.
         */
        debug: {
            dir: '<%= build_directory %>',
            src: ['<%= dependencies.js %>',
                '<%= build_directory %>/assets/**/*.js',
                '<%= build_directory %>/src/**/*.js',
                '<%= dependencies.css %>',
                '<%= build_directory %>/assets/**/*.css',
                '<%= build_directory %>/src/**/*.css']
        },

        /**
         * When it is time to have a completely compiled application, we can
         * alter the above to include only a single JavaScript and a single CSS
         * file. Now we're back!
         */
        release: {
            dir: '<%= bin_directory %>',
            src: ['<%= dependencies.js %>',
                '<%= build_directory %>/assets/**/*.js',
                '<%= build_directory %>/src/**/*.js',
                '<%= dependencies.css %>',
                '<%= build_directory %>/assets/**/*.css',
                '<%= build_directory %>/src/**/*.css']
        }
    }

};