'use strict';

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;
var Server = require('karma').Server;

var paths = {
              jsFiles        : ['./src/app/**/*.js', '!./src/app/**/*.spec.js'],
              scssFiles      : ['./src/content/styles/*.scss'],
              imagesFiles    : ['./src/content/assets/*.png'],
              htmlFiles      : ['./src/app/**/*.html', '!./src/app/commons/directives/**/*.html'],
              htmlDirectives : ['./src/app/commons/directives/**/*.html']
            };

gulp.task('prepareJS', function () {
  gulp.src(paths.jsFiles)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('default'))
      .pipe(plugins.concat('all.min.js'))
      .pipe(plugins.ngAnnotate({
          add: true
        }))
      .pipe(plugins.uglify())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('prepareCSS', function () {
  gulp.src(paths.scssFiles)
    .pipe(plugins.plumber())
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.concat('all.min.css'))
    .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions'],
        cascade: true
    }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('prepareLibs', function () {
  gulp.src('./src/app/index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./build'));
});

gulp.task('prepareTemplates', function () {
  return gulp.src(paths.htmlFiles)
    .pipe(plugins.angularTemplatecache({module: 'app'}))
    .pipe(gulp.dest('./build/templates'));
});

gulp.task('prepareDirectivesTempl', function () {
  gulp.src(paths.htmlDirectives)
  .pipe(gulp.dest('./build/templates/directives/'));
});

gulp.task('stubby', function(cb) {
  var options = {
    relativeFilesPath: true,
    mute: false,
    files: [
      './src/mockapi/config.json'
    ]
  };
  return plugins.stubbyServer(options, cb);
});

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('webServer',  ['stubby'], function() {
  gulp.src('./')
    .pipe(plugins.webserver({
      directoryListing: true,
      host: '0.0.0.0',
      port: 5050,
      open: 'http://127.0.0.1:5050/build/index.html',
      proxies: [
        {
          'source': '/api',
          'target': 'http://127.0.0.1:8882/api'
        }
      ]
    }));
});

gulp.task('watch', function(){
  gulp.watch(paths.jsFiles, ['prepareJS']);
  gulp.watch(paths.scssFiles, ['prepareCSS']);
  gulp.watch(paths.htmlFiles, ['prepareLibs', 'prepareTemplates']);
  gulp.watch(paths.htmlDirectives, ['prepareDirectivesTempl']);
});

gulp.task('default', ['prepareJS', 'prepareCSS', 'prepareLibs', 'prepareTemplates', 'prepareDirectivesTempl','webServer', 'test', 'watch'], function() {
});

