const { execSync } = require('child_process');

/*eslint
camelcase: ["error", {"properties": "never"}]
*/
module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bytesize');
  grunt.loadTasks('build/tasks');

  var langs;

  if (grunt.option('lang')) {
    langs = (grunt.option('lang') || '').split(/[,;]/g).map(function (lang) {
      lang = lang.trim();
      return lang !== 'en' ? '.' + lang : '';
    });
  } else if (grunt.option('all-lang')) {
    var localeFiles = require('fs').readdirSync('./locales');
    langs = localeFiles.map(function (file) {
      return '.' + file.replace('.json', '');
    });
    langs.unshift(''); // Add default
  } else {
    langs = [''];
  }

  process.env.NODE_NO_HTTP2 = '1'; // to hide node warning - (node:18740) ExperimentalWarning: The http2 module is an experimental API.

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      core: ['tmp/core', 'tmp/rules.js', 'axe.js', 'axe.*.js'],
      tests: ['tmp/integration-tests.js']
    },
    babel: {
      options: {
        compact: false
      },
      core: {
        files: [
          {
            expand: true,
            cwd: 'dist/core',
            src: ['index.js'],
            dest: 'tmp/core'
          }
        ]
      },
      misc: {
        files: [
          {
            expand: true,
            cwd: 'tmp',
            src: ['**/*.js'],
            dest: 'tmp'
          }
        ]
      }
    },
    'update-help': {
      options: {
        version: '<%=pkg.version%>'
      },
      rules: {
        src: ['dist/rules/**/*.json']
      }
    },
    concat: {
      engine: {
        options: {
          process: true
        },
        coreFiles: ['tmp/core/index.js', 'tmp/core/**/*.js'],
        files: langs.map(function (lang, i) {
          return {
            src: [
              'dist/intro.stub',
              '<%= concat.engine.coreFiles %>',
              // include rules / checks / commons
              '<%= configure.rules.files[' + i + '].dest.auto %>',
              'dist/outro.stub'
            ],
            dest: 'axe' + lang + '.js'
          };
        })
      }
    },
    esbuild: {
      core: {
        files: [
          {
            expand: true,
            cwd: 'dist/core',
            src: ['core.js'],
            dest: 'tmp/core'
          }
        ]
      }
    },
    configure: {
      rules: {
        tmp: 'tmp/rules.js',
        options: {
          tags: grunt.option('tags')
        },
        files: langs.map(function (lang) {
          return {
            src: [''],
            dest: {
              auto: 'tmp/rules' + lang + '.js',
              descriptions: 'doc/rule-descriptions' + lang + '.md'
            }
          };
        })
      }
    },
    validate: {
      check: {
        options: {
          type: 'check'
        },
        src: 'dist/checks/**/*.json'
      },
      rule: {
        options: {
          type: 'rule'
        },
        src: 'dist/rules/**/*.json'
      }
    },
    uglify: {
      beautify: {
        files: langs.map(function (lang, i) {
          return {
            src: ['<%= concat.engine.files[' + i + '].dest %>'],
            dest: '<%= concat.engine.files[' + i + '].dest %>'
          };
        }),
        options: {
          mangle: false,
          compress: false,
          beautify: {
            beautify: true,
            ascii_only: true,
            indent_level: 2,
            braces: true,
            quote_style: 1
          },
          output: {
            comments: /^\/*! axe/
          }
        }
      },
      minify: {
        files: langs.map(function (lang, i) {
          return {
            src: ['<%= concat.engine.files[' + i + '].dest %>'],
            dest: './axe' + lang + '.min.js'
          };
        }),
        options: {
          output: {
            comments: /^\/*! axe/
          },
          mangle: {
            reserved: ['commons', 'utils', 'axe', 'window', 'document']
          }
        }
      }
    },
    test: {
      data: {
        testFile: '<%= watch.file %>'
      }
    },
    bytesize: {
      all: {
        src: langs.map(function (lang) {
          return ['./axe' + lang + '.js', './axe' + lang + '.min.js'];
        })
      }
    }
  });

  grunt.registerTask('prettier', '', function () {
    const results = execSync('npm run postbuild');
    grunt.log.writeln(results);
  });

  grunt.registerTask('translate', ['validate', 'esbuild']);
  grunt.registerTask('build', [
    'clean:core',
    'validate',
    'esbuild',
    'configure',
    'babel',
    'concat:engine',
    'uglify',
    'prettier',
    'bytesize'
  ]);
  grunt.registerTask('default', ['build']);
};
