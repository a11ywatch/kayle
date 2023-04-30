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
          banner: grunt.file.read("Contrib/Build/umd-header.js"),
          footer: grunt.file.read("Contrib/Build/umd-footer.js"),
        },
        files: langFiles,
      },
      dist: {
        options: {
          banner: grunt.file.read("Contrib/Build/umd-header.js"),
          footer: grunt.file.read("Contrib/Build/umd-footer.js"),
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
  });

  grunt.file.setBase("./");

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("default", ["eslint"]);
  grunt.registerTask("build", ["uglify:dist", "copy:dist"]);
  grunt.registerTask("build-debug", ["uglify:debug", "copy:dist"]);
};
