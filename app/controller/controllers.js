myModule.controller('regController', function ($scope, StudentServices) {
    $scope.students = StudentServices.getStudents();
    $scope.newStudent = function () {
        var name = $scope.stdname;
        var roll = $scope.stdroll;
        var dept = $scope.department;
        var address = $scope.address;
        StudentServices.insertStudent(name, roll, dept, address);
        $scope.submissionSuccess = true;
        $scope.formHide = true;
    }
});
myModule.controller('stdController', function ($scope, StudentServices) {
    $scope.students = StudentServices.getStudents();
    $scope.deleteStudent = function(name){
        StudentServices.deleteSTD(name);
    }
});
myModule.controller('HeaderController', function ($scope, $location) {
    $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }
});
