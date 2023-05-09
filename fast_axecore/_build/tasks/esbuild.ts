const { build } = require('esbuild');
const { basename, join } = require('path');

module.exports = function (grunt) {
  grunt.registerMultiTask(
    'esbuild',
    'Task to run the esbuild javascript bundler',
    function () {
      const done = this.async();
      const files = grunt.task.current.data.files;

      files.forEach(file => {
        const src = Array.isArray(file.src) ? file.src : [file.src];
        const dest = file.dest;

        src.forEach(entry => {
          const name = basename(entry);

          if (file.cwd) {
            entry = join(file.cwd, entry);
          }

          build({
            entryPoints: [entry],
            outfile: join(dest, name),
            minify: false,
            bundle: true
          })
            .then(done)
            .catch(done);
        });
      });
    }
  );
};
