'use strict';

var appFactories = angular.module('appFactories',[]);

appFactories.factory('AdopiFactory',['$http','$resource','wsConstants','$cacheFactory',function($http, $resource, wsConstants, $cacheFactory){
    return {

        account: function(){
            var url = wsConstants.webServiceURL+'home/';
            return $http.get(url);
        },

        userList: function(offset){
           var url = wsConstants.webServiceURL+'users?count=200&offset='+offset;
           //delete $http.defaults.headers.common['X-Request-With'];
           //$http.defaults.headers.common.Authorization = wsConstants.webServiceAUTH;
            return $http.get(url, {cache:true});
        },

        searchUsers: function(requete, offset){
           var url = wsConstants.webServiceURL+'loop?count=200&q='+ requete +'&offset='+offset;
            return $http.get(url, {cache:true});
        },      
        
        userDetail: function($resource){
            var url = 'http://api.adopteunmec.com/api/users/'+$resource;
            //$http.defaults.headers.common.Authorization = wsConstants.webServiceAUTH;
            return $http.get(url, {cache:true})
        }
    };
}]);

appFactories.factory('AdopiLocalFactory',['$http','$resource','wsConstants','$cacheFactory',function($http, $resource, wsConstants, $cacheFactory){
    return {


        userLocalList: function(){
            return $http.get('data/nantes/nantes.json');
        }
    };
}]);