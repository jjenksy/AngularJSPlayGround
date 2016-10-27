/**
 * Created by jjenkins on 10/26/2016.
 */
/**
 * Custom Service to get my users information from the server
 */
(function(){
    "use strict";
    var userDetails = function($http, $log){
        /**
         * This method allows for custom searching based on the argument passed to it
         * so if I invoke getUser('findAll') it will get all my users from the data base
         * @param userName the argument to be passed to the get request
         * @returns {*}
         */
        var getUser = function(userName){

            //github repo to pull the user data from
            var requri   = 'https://api.github.com/users/'+userName;
            var repouri  = 'https://api.github.com/users/'+userName+'/repos';

           return $http.get(requri)
               .then(function(response) {
                   //returns everything in the database
                   $log.info(response.data);
                   return response.data;
               }).catch(function(e){
                   //catch any exception thrown
                   $log.info(e);
               });
        };

        return {
            getUser:getUser
        };
    };


    var module = angular.module('crudPage');
    //call the factory function to create the service
    module.factory("userDetails", userDetails);
}());