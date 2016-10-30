/**
 * Created by jjenkins on 10/25/2016.
 */

/**
 * This is my main Javascript file for the web front end controller
 */
    //This controller module is represented as a simple JavaScript function
// Main angular routing app
(function() {
    'use strict';
    //add the ngRoute as a param for routing
    var app = angular.module("crudPage",["ngRoute"]);

    //config for app runs this when app is initially created
    app.config(function($routeProvider){

        //describe the route when user navigates to /main
        $routeProvider
            .when('/',{
                templateUrl:"angularTemplates/index.html"
            })
            .when('/main',{
            templateUrl:"angularTemplates/main.html",
            controller: "MainCtlr" //determines the controller for the templateURL view
        })
            .when('/test',{
                templateUrl:"angularTemplates/test.html",
                controller: "TestCtlr" //determines the controller for the templateURL view
            })//@otherwise if you dont know the url
            .otherwise({redirectTo:"/"})

    });




})();


