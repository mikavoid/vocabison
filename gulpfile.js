const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')

/**
 * Get the style path for the given name component
 * @param componentName
 * @returns {string}
 */
function getComponentStylesPath(componentName) {
    return 'vocabison/imports/ui/components/' + componentName + '/styles';
}

// Array of every paths we need
const paths = {
    css                 :   'vocabison/client/assets/styles/css',
    scss                :   'vocabison/client/assets/styles/scss',
    components_scss     :   getComponentStylesPath('*')
};

//Array of each of component's styles path we need
const componentsStylesPaths = [getComponentStylesPath('App')];

/**
 * Gulp Task : Main SASS compilation
 */
gulp.task('main_sass', () => {
    gulp.src(paths.scss + '/**/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(paths.css))
})

/**
 * Gulp Task : Components SASS compilation
 */
gulp.task('component_sass', () => {
    gulp.src(paths.components_scss + '/**/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(function(file) {
            return file.base;
        }))
})

/**
 * Gulp Default Task : Watch any updates and launch corresponding tasks
 */
gulp.task('default', function(){
    gulp.watch(paths.scss + '/**/**/*.scss',                        ['main_sass']);
    gulp.watch(getComponentStylesPath('App') + '/**/**/*.scss',     ['component_sass']);
});