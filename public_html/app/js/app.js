'use strict';

var app = angular.module('adopteUnMec',[
	'ngRoute',
    'appFactories',
    'appControllers',
    'appFilters'
	]);

app.config(['$routeProvider',function($routeProvider){

		$routeProvider
				.when('/home', {
                    templateUrl:'views/home.html',
                    controller: 'MainController'
                })
                .when('/search/:city/:hair_style?/', {
                    templateUrl:'views/search.html',
                    controller: 'SearchController'
                })
                .when('/tags',{
                    templateUrl:'views/tags-list.html',
                    controller: 'TagsController'
                })
                .when('/tags/:tagId',{
                    templateUrl:'views/tag-detail.html',
                    controller: 'TagsController'
                })
                .when('/login', {
                    templateUrl:'views/login.html',
                    controller: 'UserController'
                })
                .when('/user/:userId', {
                    templateUrl:'views/profile.html',
                    controller: 'UserDetailController'
                })
                .otherwise({
                	redirectTo:'/home'
                });
	}
]);