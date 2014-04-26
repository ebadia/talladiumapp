'use strict';

/* Directives */
/*
directive('myDirective', function() {
  // A directive definition object
	return {
// directive definition is defined via options // which we'll override here
	restrict: String,
	priority: Number,
	terminal: Boolean,
	template: String or Template Function:
		function(tElement, tAttrs) {...}, 
	templateUrl: String,
	replace: Boolean or String,
	scope: Boolean or Object, 
	transclude: Boolean,
	controller: String or
	function(scope, element, attrs, transclude, otherInjectables) { ... },
	controllerAs: String,
	require: String,
	link: function(scope, iElement, iAttrs) { ... }, 
	compile: return an Object OR
		function(tElement, tAttrs, transclude) { 
		return {
			pre: function(scope, iElement, iAttrs, controller) { ... },
			post: function(scope, iElement, iAttrs, controller) { ... } }
		// or
		return function postLink(...) { ... } 
		}
		};
	}; 
});
*/

angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
	console.log(version);
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);

appebp.directive('fecha', function() {
  return {
	restrict: 'AE',
	replace: 'true',
	template: '<span>{{fechaOut}}</span>',
	scope:{
		fechaIn: "@"
	},
	transclude: true,
	link: function(scope,element,attrs){
		if (scope.fechaIn != "")
			scope.fechaOut = scope.fechaIn.substring(4,7) + "/" + scope.fechaIn.substring(0,4);
	}
  };
});