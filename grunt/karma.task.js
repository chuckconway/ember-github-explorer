"use strict";

module.exports = {

    //http://phantomjs.org/

    karma: {
        unit: {
            configFile: 'grunt/config/karma.config.js',
            runnerPort: 9101,
            background:true,
            singleRun: false
        },
        continuous: { singleRun: true }
    }
};

