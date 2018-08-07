module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'src/*.js',
            'spec/*Spec.js'
        ],
        preprocessors: {
            'src/app.js': ['coverage']
        },
        browsers: ['IE'],
        reporters: ['mocha', 'coverage', 'junit'],
        junitReporter: {
           outputDir: 'report'
        },
        logLevel: config.LOG_INFO
    })
}