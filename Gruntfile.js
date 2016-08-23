module.exports = function (grunt) {
    grunt.registerTask('build-local', ['compass', 'processValidationService', 'ngAnnotate', 'babel', 'uglify', 'concat']);

}