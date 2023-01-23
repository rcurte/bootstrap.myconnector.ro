const mix = require('laravel-mix');

mix.webpackConfig({
  stats: {
    children: true
  }
});

mix.js('src/js/main.js', 'assets/js')
.sass('src/scss/main.scss', 'assets/css')
.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'assets/webfonts')
.copy('node_modules/@fortawesome/fontawesome-free/css/all.min.css', 'assets/css');
