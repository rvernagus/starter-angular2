var browserSync = require('browser-sync');

browserSync({
  server: {
    baseDir: 'dist',
    middleware: []
  },
  files: [
    '*.html',
    '*.js'
  ]
});
