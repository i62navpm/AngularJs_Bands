module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],

    frameworks: ['jasmine'],

    dieOnError: false,

    files: [
      './bower_components/angular/angular.js',
      './bower_components/angular-animate/angular-animate.js',
      './bower_components/angular-aria/angular-aria.js',
      './bower_components/angular-material/angular-material.js',
      './bower_components/angular-ui-router/release/angular-ui-router.js',
      './bower_components/angular-sanitize/angular-sanitize.js',
      './bower_components/angular-mocks/angular-mocks.js',
      './build/**/*.js',
      './src/**/*.spec.js'
    ]

  });
};