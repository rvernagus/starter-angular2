var browserSync = require('browser-sync');

browserSync({
  server: {
    baseDir: 'src',
    middleware: []
  },
  files: [
    'src/*.html',
    'src/*.js'
  ]
});
