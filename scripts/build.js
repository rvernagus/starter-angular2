var fs = require('fs-extra');

var filter = function(name) {
  if (fs.lstatSync(name).isDirectory()) return true;

  return name.match(/html/) !== null;
};

fs.copy('./src', './dist', {filter: filter}, function(err) {
  if (err) {
    return console.error(err);
  }
});
