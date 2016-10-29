/**
 * Created by jjenkins on 10/29/2016.
 */
(function(){

    var httpRequester = function($http, $log){

        var getHttpRequest = function(reuest){

            return $http.get(reuest)
                .then(function(response) {
                    //returns http response data
                    $log.info(response.data);
                    return response.data;
                }).catch(function(e){
                    //catch any exception thrown
                    $log.info(e);
                });
        };
        return {
            getHttpRequest:getHttpRequest
        };
        }

    var module = angular.module('crudPage');
    //call the factory function to create the service
    module.factory("httpRequester", httpRequester);
}());