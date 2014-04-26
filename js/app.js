'use strict';


// Declare app level module which depends on filters, and services
var appebp = angular.module('talladiumApp', ['ngRoute','ngSanitize','ngTouch','ionic']).
  config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/', {templateUrl: 'views/RootControllerView.html', controller: 'RootController'});
    $routeProvider.when('/product/:productId', {templateUrl: 'views/ProductControllerView.html', controller: 'ProductController'});
    $routeProvider.when('/fabricante/:productId/:fabricanteId', {templateUrl: 'views/FabricanteControllerView.html', controller: 'FabricanteController'});
    $routeProvider.when('/conexion/:productId/:fabricanteId/:conexionId', {templateUrl: 'views/ConexionControllerView.html', controller: 'ConexionController'});

    $routeProvider.when('/lista', {templateUrl: 'views/ListaControllerView.html', controller: 'ListaController'});
    $routeProvider.when('/lista/:productId', {templateUrl: 'views/ListaControllerView.html', controller: 'ListaController'});
    $routeProvider.when('/lista/:productId/:fabricanteId', {templateUrl: 'views/ListaControllerView.html', controller: 'ListaController'});
    $routeProvider.when('/lista/:productId/:fabricanteId/:conexionId', {templateUrl: 'views/ListaControllerView.html', controller: 'ListaController'});
    $routeProvider.when('/lista/:productId/:fabricanteId/:conexionId/:modeloId', {templateUrl: 'views/ListaControllerView.html', controller: 'ListaController'});

    $routeProvider.when('/myModalexample/:idadd', {templateUrl: 'views/Modal.html', controller: 'AddsController'});

    $routeProvider.when('/faqs', {templateUrl: 'views/Faqs.html', controller: 'FaqsController'});
    $routeProvider.when('/faqscategoria/:categoria', {templateUrl: 'views/FaqsCategoria.html', controller: 'FaqsCategoriaController'});
    $routeProvider.when('/faqssubcategoria/:subcategoria', {templateUrl: 'views/FaqsSubCategoria.html', controller: 'FaqsSubCategoriaController'});
    $routeProvider.when('/faqscausa/:causa', {templateUrl: 'views/FaqsCausa.html', controller: 'FaqsCausaController'});

    //$routeProvider.when('/settings', {templateUrl: 'views/SettingsControllerView.html', controller: 'SettingsController'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
