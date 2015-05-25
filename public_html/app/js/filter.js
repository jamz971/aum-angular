'use strict';
var appFilters = angular.module('appFilters', []);

appFilters.filter('imgUrlFilter', function(){
	return function(input, limit, index, str1, str2){

			switch(limit = input.length){
		       case 43:
		         index = 1;
		         break;
		       case 44:
		         index = 2;
		         break;
		       case 45:
		         index = 3;
		         break;
		       case 46:
		         index = 2;
		         break;
		       case 47:
		         index = 1;
		         break;      
		    }
	     
		    str1 = input.substr(0, limit - index+1);
		    str2 = input.substr((limit - index+1), input.length);
		    
		    return str1 +'image'+ str2 +'.jpg';
		    /*console.log(str1, str2);*/
		};
});