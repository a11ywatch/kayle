module.exports = function (grunt) {
  var langs;

  if (grunt.option("lang")) {
    langs = (grunt.option("lang") || "").split(/[,;]/g).map((lang) => {
      lang = lang.trim();
      return lang !== "en" ? "." + lang : "";
    });
  } else {
    langs = [""];
  }

  // handle the translation file
  const handleLanguage = (language) => ({
    translationFile: `Translations/${
      language ? language.replace(".", "") : language || "en"
    }.js`,
    distExt: `build/HTMLCS${language}.js`,
  });

  // debug languages
  const langFiles = langs.map((lang) => {
    const { distExt, translationFile } = handleLanguage(lang);

    return {
      [distExt]: [
        `dist/${translationFile}`,
        "dist/Standards/**/*.js",
        "dist/HTMLCS.js",
        "dist/HTMLCS.Util.js",
      ],
    };
  });

  grunt.loadNpmTasks("grunt-bytesize");

  grunt.initConfig({
    pkg: grunt.file.readJSON("./package.json"),
    eslint: {
      target: ["Standards/**/*.js"],
    },
    uglify: {
      debug: {
        options: {
          compress: false,
          mangle: false,
          beautify: true,
          preserveComments: false,
          banner: grunt.file.read("Contrib/Build/umd-header.stub"),
          footer: grunt.file.read("Contrib/Build/umd-footer.stub"),
        },
        files: langFiles,
      },
      dist: {
        options: {
          banner: grunt.file.read("Contrib/Build/umd-header.stub"),
          footer: grunt.file.read("Contrib/Build/umd-footer.stub"),
          preserveComments: false,
        },
        files: langFiles,
      },
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            flatten: true,
            src: "licence.txt",
            dest: "build",
            filter: "isFile",
          },
        ],
      },
    },
    bytesize: {
      all: {
        src: langs.map(function (lang) {
          // todo: fix js/min file
          return ["./build/HTMLCS" + lang + ".js"];
        }),
      },
    },
  });

  grunt.file.setBase("./");

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("default", ["eslint"]);
  grunt.registerTask("build", ["uglify:dist", "copy:dist", "bytesize"]);
  grunt.registerTask("build-debug", ["uglify:debug", "copy:dist", "bytesize"]);
};
