'use strict';
var appFilters = angular.module('appFilters', []);

appFilters.filter('imgUrlFilter', function(){
	return function(input, urlBase, str1, str2, a, str3, id){
		urlBase = 29;
		length = input.length;

		str1 = input.substr(0, urlBase);
		str2 = input.substr(urlBase, length);

		a = parseInt(str2.substr(-2));

		if (isNaN(a) === true) {
			str3 = str2.substr(-1);
			id = str2.substr(0,str2.length - 1);
		}else{
			str3 = str2.substr(-2);
			id = str2.substr(0,str2.length - 2);
		}
		    
		    return str1 + id +'image'+ str3 +'.jpg';

		};
});