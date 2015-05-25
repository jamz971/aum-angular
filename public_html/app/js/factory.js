'use strict';

var appFactories = angular.module('appFactories',['ngResource']);

appFactories.factory('AdopiFactory',['$http','$resource',function($http, $resource){
    return {

        userList: function(){
            var url = 'http://api.adopteunmec.com/api/users?count=10&offset=0';
               return $http.get(url)
                    /*.success(function(data){
                        console.log('success', data);
                    }).
                    error(function(status, headers){
                        consloe.log('error', status, headers, config);
                    })*/;
        },

        searchUsers: function(requete){
            var url = 'https://api.adopteunmec.com/api/loop?count=5&q='+ requete +'&offset=0';
            return $http.get(url)
                    .success(function(data){
                        data;
                    }).
                    error(function(status, headers){
                        status, headers;
                    });
        },      
        
        userDetail: function(userId){
            //var url = 'https://api.adopteunmec.com/api/users/:userId';
            /*return $resource('https://api.adopteunmec.com/api/users/:userId', {}, {
              query: {method:'GET', params:{userId:'user'}, isArray:true}
            });

            console.log($resource);*/

            var url = 'https://api.adopteunmec.com/api/users/'+userId;
            return $http.get(url);
        }
    };
}]);
