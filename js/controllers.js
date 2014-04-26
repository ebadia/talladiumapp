'use strict';

/* Controllers */

appebp.controller('RootController', function($scope,$location,$http,tecdocFactory,talladiumFactory,menuFactory) {

	init();
	
	// establece una variable de sesion que se puede usar durante toda la sesion
	// se podria poner tambien una de pagina con localStorage
	sessionStorage.clear();
	
	function init(){

		//cfpLoadingBar.start();
		talladiumFactory.getData().then( 
			function(data){
				//console.log(data.data.data);
				$scope.productos = data.data.data;
				$scope.ready = true;
				//cfpLoadingBar.complete();
		},
			function(err){
				//cfpLoadingBar.complete();
			}
		);


	}
	
});

appebp.controller('MenuController', function($scope,$location,$http,$ionicSideMenuDelegate,menuFactory) {

	init();
	
	// establece una variable de sesion que se puede usar durante toda la sesion
	// se podria poner tambien una de pagina con localStorage
	
	function init(){

		//cfpLoadingBar.start();
		$scope.items = menuFactory.menu;
		console.log($scope.items);

	}

	$scope.goto = function(url){
		//console.log(url);
		$location.path(url);
		$ionicSideMenuDelegate.toggleRight();
	}
	
});

appebp.controller('FaqsController', function($scope,$location,$http,menuFactory,talladiumFactory) {

	init();
	
	// establece una variable de sesion que se puede usar durante toda la sesion
	// se podria poner tambien una de pagina con localStorage
	sessionStorage.clear();
	
	function init(){

		talladiumFactory.getFaqs().then( function(data){
			//console.log(data.data.data);
			$scope.faqs = data.data.data;
			$scope.ready = true;
		});
	}

	
});

appebp.controller('FaqsCategoriaController', function($scope,$location,$http,$routeParams,menuFactory,talladiumFactory) {

	init();
	
	// establece una variable de sesion que se puede usar durante toda la sesion
	// se podria poner tambien una de pagina con localStorage

	sessionStorage.categoria = $routeParams.categoria;
	$scope.categoria = sessionStorage.categoria;
	
	function init(){

		talladiumFactory.getFaqsCategoria($routeParams.categoria).then( function(data){
			//console.log(data.data.data);
			$scope.faqs = data.data.data;
			$scope.ready = true;
		});
	}

	
});

appebp.controller('FaqsSubCategoriaController', function($scope,$location,$http,$routeParams,menuFactory,talladiumFactory) {

	init();
	
	// establece una variable de sesion que se puede usar durante toda la sesion
	// se podria poner tambien una de pagina con localStorage

	sessionStorage.subcategoria = $routeParams.subcategoria;
	$scope.subcategoria = sessionStorage.subcategoria;
	$scope.categoria = sessionStorage.categoria;
	
	function init(){

		talladiumFactory.getFaqsSubCategoria($routeParams.subcategoria).then( function(data){
			//console.log(data.data.data);
			$scope.faqs = data.data.data;
			$scope.ready = true;
		});
	}

	
});

appebp.controller('FaqsCausaController', function($scope,$location,$http,$routeParams,menuFactory,talladiumFactory) {

	init();
	
	// establece una variable de sesion que se puede usar durante toda la sesion
	// se podria poner tambien una de pagina con localStorage

	sessionStorage.causa = $routeParams.causa;
	$scope.causa = sessionStorage.causa;
	$scope.subcategoria = sessionStorage.subcategoria;
	$scope.categoria = sessionStorage.categoria;
	
	function init(){

		talladiumFactory.getFaqsCausa($routeParams.causa).then( function(data){
			console.log(data.data.data);
			$scope.faqs = data.data.data;
			$scope.ready = true;
		});
	}

	
});


appebp.controller('ProductController', function($scope,$location,$http,$routeParams,tecdocFactory,talladiumFactory) {

	init();
	
	sessionStorage.producto = $routeParams.productId;
	$scope.producto = sessionStorage.producto;
	
	function init(){

		talladiumFactory.getOneProduct($routeParams.productId).then( function(data){
			//console.log(data.data.data);
			$scope.productos = data.data.data;
			$scope.ready = true;
		});

	}
	
	$scope.listFromProduct = function (product){
		$location.path("/lista/"+product);
	}
	
});

appebp.controller('FabricanteController', function($scope,$location,$http,$routeParams,tecdocFactory,talladiumFactory) {

	init();
	
	sessionStorage.producto = $routeParams.productId;
	sessionStorage.fabricante = $routeParams.fabricanteId;
	$scope.producto = sessionStorage.producto;
	$scope.fabricante = sessionStorage.fabricante;
	
	function init(){
		
		talladiumFactory.getOneFabricante($routeParams.productId, $routeParams.fabricanteId).then( function(data){
			//console.log(data.data.data);
			$scope.productos = data.data.data;
			$scope.ready = true;
		});

	}
	
	$scope.listFromFabricante = function (product,fabricante){
		$location.path("/lista/"+product+"/"+fabricante);
	}
	
});

appebp.controller('ConexionController', function($scope,$location,$http,$routeParams,tecdocFactory,talladiumFactory) {

	init();
	
	sessionStorage.producto = $routeParams.productId;
	sessionStorage.fabricante = $routeParams.fabricanteId;
	sessionStorage.conexion = $routeParams.conexionId;
	$scope.producto = sessionStorage.producto;
	$scope.fabricante = sessionStorage.fabricante;
	$scope.conexion = sessionStorage.conexion;
	
	function init(){
		
		//tecdocFactory.getOneConexion($routeParams.productId, $routeParams.fabricanteId, $routeParams.conexionId).then( function(data){
		//	$scope.productos = data.data;
		//	$scope.ready = true;
		//});

		talladiumFactory.getOneConexion($routeParams.productId, $routeParams.fabricanteId, $routeParams.conexionId).then( function(data){
			//console.log(data.data.data);
			$scope.productos = data.data.data;
			$scope.ready = true;
		});

	}
	
	$scope.listFromConexion = function (product,fabricante,conexion){
		$location.path("/lista/"+product+"/"+fabricante+"/"+conexion);
	}
	
});

appebp.controller('ListaController', function($scope,$location,$http,$routeParams,tecdocFactory,talladiumFactory) {

	init();
	
	function init(){
		
		//console.log($routeParams.productId);
		//console.log($routeParams.fabricanteId);
		//console.log($routeParams.conexionId);
		
		$scope.producto = sessionStorage.producto;
		$scope.fabricante = sessionStorage.fabricante;
		$scope.conexion = sessionStorage.conexion;
		$scope.modelo = sessionStorage.modelo;

		if ( $routeParams.fabricanteId == undefined && $routeParams.conexionId == undefined && $routeParams.modeloId == undefined){
			talladiumFactory.getlistFromProduct($routeParams.productId).then( function(data){
				$scope.productos = data.data.data;
				$scope.ready = true;
			});
		} else if ( $routeParams.conexionId == undefined && $routeParams.modeloId == undefined){
			talladiumFactory.getlistFromFabricante($routeParams.productId,$routeParams.fabricanteId).then( function(data){
				$scope.productos = data.data.data;
				$scope.ready = true;
			});
		} else if ( $routeParams.modeloId == undefined){
				talladiumFactory.getlistFromConexion($routeParams.productId,$routeParams.fabricanteId,$routeParams.conexionId).then( function(data){
				$scope.productos = data.data.data;
				$scope.ready = true;
			});
		} else {
			talladiumFactory.getlistFromModelo($routeParams.productId,$routeParams.fabricanteId,$routeParams.conexionId,$routeParams.modeloId).then( function(data){
				$scope.productos = data.data.data;
				$scope.ready = true;
				//console.log(data.data.data);
			});
		}

	}
	
});


appebp.controller('AddsController', function($scope,$location,$routeParams,$rootScope,$timeout,$http,$sce,$ionicModal,addsFactory) {

	var mytimeout;

	if ( $routeParams.idadd === undefined )
		init();

	// establece una variable de sesion que se puede usar durante toda la sesion
	// se podria poner tambien una de pagina con localStorage
	//sessionStorage.clear();
	
	function init(){

		// aqui deberiamos recoger soo una vez los adds de la bd 
		// y ponerlos en un array del $scope del addv espacio para
		// lanzar el visualizador random. Asi solo leemos 1 vez datos de la red
		addsFactory.getAllAdds().then( function(adds){
			$scope.addsArray = adds;
			mytimeout = $timeout($scope.onTimeout,10);
		});

	}

	$scope.onTimeout = function(){
		//var addv = addsFactory.getRandomAdd();

		var addv = addsFactory.getRandomAddFromArray($scope.addsArray);
		//console.log(addv);
		//console.log(addv.img);

		$scope.imgAdd = addv.img;
		$scope.urlAdd = addv.url;
		$scope.idAdd = addv.id;

		mytimeout = $timeout($scope.onTimeout,5000);

		//});

	};

	$scope.openAdd = function(idAdd){

		$rootScope.ready = false;
		$rootScope.modal.show();

		var addv = addsFactory.getAdd(idAdd).then( function(addv){
			//console.log(addv);
			// gets coordinates to save in clicks db
			navigator.geolocation.getCurrentPosition(
				function(position) {
					console.log(position);
					addsFactory.setClick(idAdd,position.coords.longitude,position.coords.latitude);
				},
				function(e) { 
					console.log("Error retrieving position " + e.code + " " + e.message)
				}
			);

			// get html for modal window
			addsFactory.getAddContent(addv.url).then( function(data){
				$rootScope.contentAdd = $sce.trustAsHtml(data);
				//$location.path("myModalexample/"+idAdd);
				$rootScope.ready = true;
			});
		});
	};

	$ionicModal.fromTemplateUrl('modal.html', function($ionicModal) {
        $rootScope.modal = $ionicModal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    //Cleanup the modal when we're done with it!
    $rootScope.$on('$destroy', function() {
    	$rootScope.modal.remove();
    }); 
	
});


