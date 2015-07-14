'use strict';

var app = angular.module('adopteUnMec',[
	'ui.router',
    //'angular.filter',
    'ngResource',
    'angularUtils.directives.dirPagination',
    'appFactories',
    'appControllers',
    'appFilters'
	]);

app.constant('wsConstants',{
    webServiceURL : 'http://api.adopteunmec.com/api/',
    webServiceAUTH : 'Basic dGVzdEBndXN0ci5jb206MTIzNDU2OTcx',
    webServiceActivated : true
});

app.constant('loginConstants', {
    loginUser : '',
    loginPwd : ''
});

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .state('login',{
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'UserController'
        })
        .state('profile',{
            url: '/profile/:userId',
            templateUrl: 'views/profile.html',
            controller: 'UserDetailController'
        })
        .state('search',{
            url: '/search/:city/:hair_style?',
            templateUrl: 'views/search.html',
            controller: 'SearchController'
        })
        .state('tags',{
            url: '/tags',
            templateUrl: 'views/tags-list.html',
            controller: 'TagsController'
        })
        .state('tag-detail',{
            url: '/tags/:tagId',
            templateUrl: 'views/tag-detail.html',
            controller: 'TagsController'
        });
});