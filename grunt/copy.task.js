"use strict";

module.exports = {

    //copy all the files from the various locations (src, dependencies) into the build folder
    copy: {
        // Copy the local files found in the assets folder to the assets folder in the build directory.
        //The build directory is a staging area where we can freely manuliplate the files without changing the source
        local_assets_to_build:{
            files:[
                {
                    cwd:'src/assets',
                    src:['**', '!**/*.md'],
                    dest:'<%= build_directory %>/assets/',
                    expand:true
                }
            ]
        },
        //copy all the dependencies defined in the build.config.js into the build assets directory
        dependencies_assets_to_build_assets: {
            files: [
                {
                    src: [ '<%= dependencies.assets %>' ],
                    dest: '<%= build_directory %>/assets/',
                    cwd: '.',
                    expand: true,
                    flatten: true
                }
            ]
        },
        //copy all the app javascript files into the build directory. Keeping the folder structure in place.
        app_javascript_to_build_javascript: {
            files: [
                {
                    src: [ '<%= app.js %>' ],
                    dest: '<%= build_directory %>/',
                    cwd: '.',
                    expand: true
                }
            ]
        },
        //copy all the app javascript files into the build directory. Keeping the folder structure in place.
        app_styles_to_build_styles: {
            files: [
                {
                    src: [ 'src/**/*.css', 'src/**/*.less', 'src/**/*.otf', 'src/**/*.eot', 'src/**/*.svg', 'src/**/*.ttf', 'src/**/*.woff',  '!**/*.md' ],
                    dest: '<%= build_directory %>/',
                    cwd: '.',
                    expand: true
                }
            ]
        },
        //copy the declared dependencies in the build.config.js to the build directory
        dependencies_javascript_to_build_javascript: {
            files: [
                {
                    src: [ '<%= dependencies.js %>' ],
                    dest: '<%= build_directory %>/',
                    cwd: '.',
                    expand: true
                }
            ]
        },
        dependencies_css_to_build_css: {
            files: [
                {
                    src: [ '<%= dependencies.css %>' ],
                    dest: '<%= build_directory %>/',
                    cwd: '.',
                    expand: true
                }
            ]
        },
        dependencies_artifacts_to_build_artifacts: {
            files: [
                {
                    src: [ '<%= dependencies.artifacts %>' ],
                    dest: '<%= build_directory %>/',
                    cwd: '.',
                    expand: true
                }
            ]
        },
        //We are not doing anything (compiling) with the assets, copy them into the bin/assets directory.
        copy_assets_to_bin: {
            files: [
                {
                    src: [ '**','!**/*.less', '!**/*.js', '!**/*.css', '!**/*.md' ],
                    dest: '<%= bin_directory %>/assets',
                    cwd: 'src/assets',
                    expand: true
                }
            ]
        },
        copy_common_to_bin: {
            files: [
                {
                    src: [ '**','!**/*.less', '!**/*.js', '!**/*.css', '!**/*.md' ],
                    dest: '<%= bin_directory %>/common',
                    cwd: 'src/common',
                    expand: true
                }
            ]
        },
        copy_all_to_bin: {
            files: [
                {
                    src: [ '**', '!**/*.less','!src/less', '!**/*.md'],
                    dest: '<%= bin_directory %>/',
                    cwd: '<%= build_directory %>/',
                    expand: true
                }
            ]
        },

        copy_all_to_devDeploy: {
            files: [
                {
                    src: [ '**'],
                    dest: '../../../www/local.ember.com/',
                    cwd:  '<%= bin_directory %>/',
                    expand: true
                }
            ]
        }
    }

};