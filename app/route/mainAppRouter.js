var myModule = angular.module('studentInfo', ['ngRoute']);
myModule.config(function ($routeProvider) {
    $routeProvider
        .when('/registration', {
            templateUrl: 'app/views/registration.html',
            controller: 'regController'
        })
        .when('/student', {
            templateUrl: 'app/views/student.html',
            controller: 'stdController'
        })
        .otherwise({
            redirectTo: '/registration'
        });
});

