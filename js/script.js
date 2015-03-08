// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var toastyApp = angular.module('toastyApp', ['ngRoute']);

// configure our routes
toastyApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        // route for the home page
        .when('/customer_report', {
            templateUrl: 'pages/customerReport.html',
            controller: 'customerReportController'
        })

        // route for the about page
        .when('/new_customer', {
            templateUrl: 'pages/newCustomer.html',
            controller: 'newCustomerController'
        })

        // route for the contact page
        .when('/door_report', {
            templateUrl: 'pages/doorReport.html',
            controller: 'doorReportController'
        })
        
        .otherwise({ redirectTo: '/customer_report'});

    $locationProvider.html5Mode(false);
});

// create the controller and inject Angular's $scope
toastyApp.controller('customerReportController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    $scope.tanners = [
        { 'name': 'Jane Tanner', 'phone': '555-555-5555', 'level': '3' },
        { 'name': 'Fred Tanner', 'phone': '555-555-5555', 'level': '3' },
        { 'name': 'Jenny Tanner', 'phone': '555-555-5555', 'level': '1' }
    ];
});

toastyApp.controller('newCustomerController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

toastyApp.controller('doorReportController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

toastyApp.controller('mainNavController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
