// \public\js\services\NerdService.js
angular.module('NerdService', []).factory('Nerd', ['$http', function($http){
	return {
		//call to get all nerds
		get : function(){
			return $http.get('/api/nerds');
		},
		//these will work when more api rotes
		//are defined on the node

		//CURRENTLY ONLY GET WORKS, REST ARE PLACEHOLDERS
		 


		//call to post and create a new nerd
		create : function(nerdData){
			return $http.post('/api/nerds', nerdData);
		},

		//call to delete a nerd
		delete:function(id){
			return $http.delete('/api/nerds/' + id);
		}
	}
}]);