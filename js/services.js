'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
/*
angular.module('myApp.services', []).
  value('version', '0.1');
*/

//app.value('version', '0.1');
//app.value('theOUTip', "81.184.4.91:8888");

//app.value('prodider', "209");
//
//app.value("lang" , "en");
//app.value("country" , "ES"), 
//app.value("countryUserSetting" , "ES");
//app.value("countriesCarSelection" , "ES");
//app.value("favouredList" , "1");
//app.value("linkingTargetType" , "P");

appebp.factory('menuFactory', function(){
	
	var factory = {};

	factory.menu = [
		{"name": "Compatibilidades", "url": "/"},
		{"name": "Faqs", "url": "/faqs"},		
	];

	return factory;

});


appebp.factory('talladiumFactory', function($http){
	
	//var url = "lib/fuscador.json";
	//var url = "http://ideatius.com/apps/talladium/bend";
	var url = "http://ideatius.com/apps/talladium/bend";

	var factory = {};
	
    factory.getData = function(){
			
		return $http.get(url+'/products').then( function(response){
			//console.log(response);
			return response;
		});
	}

    factory.getOneProduct = function(product_id){
		console.log(encodeURI(url+"/product?producto="+product_id));

		return $http.get( encodeURI(url+"/product?producto="+product_id) ).then( function(response){
			//console.log(response);
			return response;
		});
	}

    factory.getOneFabricante = function(product_id, fabricante_id){
		console.log( encodeURI(url+"/fabricante?producto="+product_id+"&fabricante="+fabricante_id) );

		return $http.get( encodeURI(url+"/fabricante?producto="+product_id+"&fabricante="+fabricante_id) ).then( function(response){
			//console.log(response);
			return response;
		});
	}

    factory.getOneConexion = function(product_id, fabricante_id, conexion_id){
		
		console.log("getOneConexion");
		console.log( encodeURI(url+"/conexion?producto="+product_id+"&fabricante="+fabricante_id+"&conexion="+conexion_id) );

		return $http.get( encodeURI(url+"/conexion?producto="+product_id+"&fabricante="+fabricante_id+"&conexion="+conexion_id) ).then( function(response){
			//console.log(response);
			return response;
		});
	}

    factory.getlistFromProduct = function(product_id){
			
		console.log("getlistFromProduct");
		console.log( encodeURI(url+"/productlist?producto="+product_id) );

		return $http.get( encodeURI(url+"/productlist?producto="+product_id) ).then( function(response){
			//console.log(response);
			return response;
		});
	}

    factory.getlistFromFabricante = function(product_id,fabricante_id){
			
		console.log("getlistFromFabricante");
		console.log( encodeURI(url+"/productlist?producto="+product_id+"&fabricante="+fabricante_id) );

		return $http.get( encodeURI(url+"/productlist?producto="+product_id+"&fabricante="+fabricante_id) ).then( function(response){
			//console.log(response);
			return response;
		});
	}

    factory.getlistFromConexion = function(product_id,fabricante_id,conexion_id){
			
		console.log("getlistFromConexion");
		console.log( encodeURI(url+"/productlist?producto="+product_id+"&fabricante="+fabricante_id+"&conexion="+conexion_id) );

		return $http.get( encodeURI(url+"/productlist?producto="+product_id+"&fabricante="+fabricante_id+"&conexion="+conexion_id) ).then( function(response){
			//console.log(response);
			return response;
		});
	}

    factory.getlistFromModelo = function(product_id,fabricante_id,conexion_id,modelo_id){
			
		console.log("getlistFromModelo");
		console.log( encodeURI(url+"/productlist?producto="+product_id+"&fabricante="+fabricante_id+"&conexion="+conexion_id+"&modelo="+modelo_id) );

		return $http.get( encodeURI(url+"/productlist?producto="+product_id+"&fabricante="+fabricante_id+"&conexion="+conexion_id+"&modelo="+modelo_id) ).then( function(response){
			//console.log(response);
			return response;
		});
	}

	//*************************************** FAQS

   factory.getFaqs = function(){
			
		console.log("getFaqs");

		return $http.get(url+'/faqs').then( function(response){
			//console.log(response);
			return response;
		});
	}

   factory.getFaqsCategoria = function(categoria){
			
		console.log("getFaqsCategoria");

		return $http.get(url+'/faqscategoria?categoria='+categoria).then( function(response){
			//console.log(response);
			return response;
		});
	}

   factory.getFaqsSubCategoria = function(categoria){
			
		console.log("getFaqsSubCategoria");
		console.log(categoria);

		return $http.get(url+'/faqssubcategoria?categoria='+categoria).then( function(response){
			//console.log(response);
			return response;
		});
	}

   factory.getFaqsCausa = function(causa){
			
		console.log("getFaqsCausa");
		console.log(causa);

		return $http.get(url+'/faqscausa?causa='+causa).then( function(response){
			//console.log(response);
			return response;
		});
	}



    return factory;

});




appebp.factory('tecdocFactory', function($http){
	
	//var url = "lib/fuscador.json";
	var url = "/api/products";

	var factory = {};
	
    factory.getData = function(){
			
		return $http.get(url).then( function(response){
			//console.log(response);
			return response;
		});
	}

    factory.getOneProduct = function(product_id){
			
		return $http.get("/api/product/"+product_id).then( function(response){
			//console.log(response);
			return response;
		});
	}

    factory.getOneFabricante = function(product_id, fabricante_id){
			
		return $http.get("/api/fabricante/"+product_id+"/"+fabricante_id).then( function(response){
			//console.log(response);
			return response;
		});
	}

    factory.getOneConexion = function(product_id, fabricante_id, conexion_id){

		return $http.get("/api/conexion/"+product_id+"/"+fabricante_id+"/"+conexion_id).then( function(response){
			//console.log(response);
			return response;
		});
	}

    factory.getlistFromProduct = function(product_id){
			
		return $http.get("/api/productlist/"+product_id).then( function(response){
			//console.log(response);
			return response;
		});
	}

    factory.getlistFromFabricante = function(product_id,fabricante_id){
			
		return $http.get("/api/productlist/"+product_id+"/"+fabricante_id).then( function(response){
			//console.log(response);
			return response;
		});
	}

    factory.getlistFromConexion = function(product_id,fabricante_id,conexion_id){
			
		return $http.get("/api/productlist/"+product_id+"/"+fabricante_id+"/"+conexion_id).then( function(response){
			//console.log(response);
			return response;
		});
	}



    return factory;

});

appebp.factory('addsFactory', function($http){
	
	var url = 'http://ideatius.com/apps/talladium/bend';

	var factory = {};

	factory.getAllAdds = function(){
		return $http.get(url+'/adds').then( function(data){
			//console.log(data.data.data);
			return data.data.data;
		});
	}
	
    factory.getRandomAdd = function(){

		return this.getAllAdds().then( function(datos) {
    		//console.log(datos);
			var cuantos = datos.length;
			var indice = Math.floor(Math.random() * cuantos );
			return datos[indice];
 		});
	}

	factory.getRandomAddFromArray = function(array){

		//console.log(datos);
		var cuantos = array.length;
		var indice = Math.floor(Math.random() * cuantos );
		return array[indice];
	}

    factory.getAdd = function(id){
		
		return this.getAllAdds().then( function(datos) {
    		//console.log(datos);
	    	return datos[id-1];
	    });
	}

    factory.setClick = function(addId,lo,la){
		
		// guardamos: id del anuncio coordenadas desde lugar del click
		var obj = {
			'addid': addId,
			'lo': lo,
			'la': la
		};

		//console.log(obj);

		return $http.post(url+'/click',obj).then( function(data){
			//console.log(data.data);
			return data.data;
		});
	}

	factory.getAddContent = function(url){

		return $http.get( url ).then(function(data){
			console.log(data.data);
			return data.data;
		});

	}


    return factory;

});





