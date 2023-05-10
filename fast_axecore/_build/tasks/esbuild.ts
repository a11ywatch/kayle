import { build } from 'esbuild';
import { join, basename } from 'path';
// import { compileBundleOptions } from "@swc/core/spack"
// const createFile = require("../shared/create-file")

module.exports = function (grunt) {
  grunt.registerMultiTask(
    'esbuild',
    'Task to run the esbuild javascript bundler',
    async function () {
      const done = this.async();
      const files = grunt.task.current.data.files;

      for (const file of files) {
        const src = Array.isArray(file.src) ? file.src : [file.src];
        const dest: string = file.dest;

        for (let entry of src) {
          const name = basename(entry);

          if (file.cwd) {
            entry = join(file.cwd, entry);
          }

          try {
            await build({
              entryPoints: [entry],
              outfile: join(dest, name),
              minify: false,
              bundle: true
            });

            // await compileBundleOptions({workingDir: dest});
            // await createFile(join(dest, name), output.code)
          } catch (e) {
            console.error(e);
          }

          await done();
        }
      }
    }
  );
};
