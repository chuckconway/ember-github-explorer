
module.exports = {

    clean:{
        all:{
            src:['<%= build_directory %>', '<%= bin_directory %>']
        },
        emptydirectories:{
            src: ['<%= bin_directory %>/*/**'],
            filter: function(fp) {
                var fs = require('fs');
                return fs.lstatSync(fp).isDirectory() && fs.readdirSync(fp).length === 0;
            }
        },
        build:{
            src:['<%= build_directory %>']
        }
    }
};