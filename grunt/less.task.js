
module.exports = {
    //concatenate the less files and copy them into the build/assets folder.
    less: {
        lint_compile_concat: {
            options:{
                compress:true,
                sourceMap:false
                //sourceMapFilename: '<%= build_dir %>/assets/compiled.css.map',
                //sourceMapRootpath: 'source/less/'
            },
            files: { '<%= bin_directory %>/assets/<%= pkg.name %>-<%= pkg.version %>.css' : ['<%= app.less %>', 'src/**/*.less', 'src/**/*.css']}
        },
        lint_concat: {
            options:{
                compress:false,
                sourceMap:false
//                sourceMapFilename: '<%= build_directory %>/assets/compiled.css.map',
//                sourceMapRootpath: 'source/less/'
            },
            files: { '<%= build_directory %>/assets/<%= pkg.name %>-<%= pkg.version %>.css' : ['<%= app.less %>', 'src/**/*.less']}
        }

    }
};