const $ = require('gulp-load-plugins')();

// Gulp + Webpack
const webpackStream = require('webpack-stream');
const webpack = webpackStream.webpack;
const named = require('vinyl-named');
//
const combine = require('stream-combiner2').obj;
const bs = require('browser-sync').create();
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const AssetsPlugin = require('assets-webpack-plugin');
const gulplog = require('gulplog');

import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import newer from 'gulp-newer';
import path from 'path';
import eslint from 'gulp-eslint';
import autoprefixer from 'autoprefixer';
import cssnext from 'cssnext';
import short from 'postcss-short';
import cssnano from 'gulp-cssnano';
import nested from 'postcss-nested';
import atImport from 'postcss-import';
import postcss_assets from 'postcss-assets';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import j from 'gulp-jade';


const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

//==================== пути к папкам и файлам =================
const patch = {
    styles: {
        location    : 'app/styles/**/*.css',
        dest        : 'public'
    },

    jade : {
        location    : 'app/markups/**/*.jade',
        compiled    : 'app/markups/_pages/*.jade',
        destination : 'app'
    },

    scripts : {
        location : 'app/scripts/**/*.js',
        dest: 'public'

    }
};

// ===================== Интегрируем webpack ==================
gulp.task('webpack', function(callback) {
  let firstBuildReady = false;

  function done(err, stats) {
    firstBuildReady = true;

    if (err) { // hard error, see https://webpack.github.io/docs/node.js-api.html#error-handling
      return;  // emit('error', err) in webpack-stream
    }

    gulplog[stats.hasErrors() ? 'error' : 'info'](stats.toString({
      colors: true
    }));

  }

  let options = {
    output: {
      publicPath: '/js/',
      filename: isDevelopment ? '[name].js' : '[name]-[chunkhash:10].js'
    },
    watch:   isDevelopment,
    devtool: isDevelopment ? 'cheap-module-inline-source-map' : null,
    module:  {
      loaders: [{
        test:    /\.js$/,
        include: path.join(__dirname, "app"),
        loader:  'babel?presets[]=es2015'
      }]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
  };

  if (!isDevelopment) {
    options.plugins.push(new AssetsPlugin({
      filename: 'webpack.json',
      path:     __dirname + '/manifest',
      processOutput(assets) {
        for (let key in assets) {
          assets[key + '.js'] = assets[key].js.slice(options.output.publicPath.length);
          delete assets[key];
        }
        return JSON.stringify(assets);
      }
    }));
  }

  return gulp.src('app/js/*.js')
      .pipe(plumber({
        errorHandler: notify.onError(err => ({
          title:   'Webpack',
          message: err.message
        }))
      }))
      .pipe(named())
      .pipe(webpackStream(options, null, done))
      .pipe($.if(!isDevelopment, uglify()))
      .pipe(gulp.dest('public/js'))
      .on('data', function() {
        if (firstBuildReady) {
          callback();
        }
      });

});
//===================== подключаем POSTCSS ===================
export function styles() {
    let processors = [
            autoprefixer({ browsers: ['> 5%', 'IE 7']}),
            atImport,
            nested,
            short,
            // cssnano(),
            postcss_assets({
              loadPaths: ['img/']
            }),
            cssnext({
                'customProperties': true,
                'colorFunction': true,
                'customSelectors': true
            })
        ]
        return combine(
            gulp.src('app/styles/**/*.css'),
            $.cached('styles'),
            $.if(isDevelopment ,$.sourcemaps.init()),
            $.postcss(processors),
            $.remember('styles'),
            $.if(isDevelopment, $.sourcemaps.write()),
            gulp.dest('public')
        )
};

//==================== подключаем jade ========================
export function jade() {
   return gulp.src('app/markups/**/*.jade')
        .pipe(j({pretty: '\t'}))
        .pipe(gulp.dest('public'));
};

//======================= Подключаем скрипты =======================
export function scripts() {
    return gulp.src('app/scripts/**/*.js', { sourcemaps: true })
    .pipe($.babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('public'));
};

//============================ чистка ============================
const clean = () => del(['public']);
export { clean };

//======================= запускаем сервер =====================
export function serve() {
    bs.init({
        server: 'public'
    });

    bs.watch('public/**/*.*').on('change', bs.reload);
};

//====================== Икрементальная сборка  ===================
export function assets(){
    return gulp.src('app/assets/**', {since: gulp.lastRun('assets')})
    .pipe(newer('public'))
    .pipe(gulp.dest('public'));
};

export function styles_assets(){
    return gulp.src('app/styles/**/*.{png,svg}', {since: gulp.lastRun('assets')})
    .pipe(newer('public/styles'))
    .pipe(gulp.dest('public/styles'));
};

//======================== следим за файлами =====================
export function watch(){
    // gulp.watch('app/scripts/**/*.js', scripts);
    gulp.watch(patch.styles.location, styles).on('unlink', (filepath) => {
        remember.forget('styles', ph.resolve(filepath));
    })
    gulp.watch('app/markups/**/*.jade', jade);
    gulp.watch('app/assets/**/*.*', assets);
    gulp.watch('app/styles/**/*.{png,svg}', styles_assets);
    gulp.watch('public/**/*.*').on('change', bs.reload);
};

//==================== Собираем нашу сборку ========================
const build = gulp.series (clean , gulp.parallel(styles_assets, styles, jade, 'webpack'), assets);
export { build };

const dev = gulp.series(build , gulp.parallel(watch , serve));
export { dev };
