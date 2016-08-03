var myApp = angular.module('myModule',['ngStorage']);
    myApp.controller("myController",function($scope,$http,$localStorage){
       $scope.toBeSavedInWishList = true;
       if(!$localStorage.savedWishlist){
        $scope.wishlistToDispaly = [];
       }else{
        $scope.wishlistToDispaly = $localStorage.savedWishlist;
       }
        $scope.$watch('search',function(){
            fetch();
        });
        $scope.search = "The Conjuring";
         function fetch(){
      $http.get("http://www.omdbapi.com/?t=" + $scope.search)
      .then(function(response){ $scope.details = response.data; });

      $http.get("http://www.omdbapi.com/?s=" + $scope.search)
      .then(function(response){ $scope.related = response.data; });
    }
		$scope.update = function(movie){
  		$scope.search = movie.Title;
    };
		$scope.addwish = function(details){
		for (var i = 0; i < $scope.wishlistToDispaly.length; i++) {
        if($scope.details.imdbID == $scope.wishlistToDispaly[i].imdbID){
          $scope.toBeSavedInWishList = false;
          $scope.successMessage = "Already Added to wishlist";
          alert("Already in wishlist");
          break;
        }
        else{
          $scope.toBeSavedInWishList = true;
        }
      }
      if($scope.toBeSavedInWishList == true){
        $scope.successMessage = "added to wishlist";
        $scope.wishlistToDispaly.push($scope.details);
        $localStorage.savedWishlist = $scope.wishlistToDispaly;
      }
			
		};
});