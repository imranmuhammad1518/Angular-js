app.controller('PortfolioController',['$scope','$location','$mdDialog','$mdMedia',function($scope,$location,$mdDialog,$mdMedia){
	
	 
	  $scope.images1 = [
	  { "id"   : 0,
		"src"  : "images/portfolio-image1.jpg",
		"desc" : "Bride Henna Design"
	  },
	  { "id"   : 1,
		"src"  : "images/portfolio-image2.jpg",
		"desc" : "Birthday Party Henna Design"
	  },
	  { "id"   : 2,
		"src"  : "images/portfolio-image3.jpg",
		"desc" : "Guests Henna Design"
	  },
	  { "id"   : 3,
		"src"  : "images/portfolio-image13.jpg",
		"desc" : "Guests Henna Design"
	  },
	  { "id"   : 4,
		"src"  : "images/portfolio-image17.jpg",
		"desc" : "Guests Henna Design"
	  }
  ];
  
 $scope.images2 = [
	  { "id"   : 5,
		"src"  : "images/portfolio-image4.jpg",
		"desc" : "Bride Henna Design"
	  },
	  { "id"   : 6,
		"src"  : "images/portfolio-image5.jpg",
		"desc" : "Birthday Party Henna Design"
	  },
	  { "id"   : 7,
		"src"  : "images/portfolio-image6.jpg",
		"desc" : "Guests Henna Design"
	  },
	  { "id"   : 8,
		"src"  : "images/portfolio-image14.jpg",
		"desc" : "Guests Henna Design"
	  },
	  { "id"   : 9,
		"src" : "images/portfolio-image18.jpg",
		"desc" : "Guests Henna Design"
	  }
  ];
  
  $scope.images3 = [
	  { "id"   : 10,
		"src"  : "images/home-image3.jpg",
		"desc" : "Bride Henna Design"
	  },
	  { "id"   : 11,
		"src" : "images/portfolio-image8.jpg",
		"desc" : "Birthday Party Henna Design"
	  },
	  { "id"   : 12,
		"src" : "images/portfolio-image9.jpg",
		"desc" : "Guests Henna Design"
	  },
	  { "id"   : 13,
		"src" : "images/portfolio-image15.jpg",
		"desc" : "Guests Henna Design"
	  },
	  { "id"   : 14,
		"src" : "images/portfolio-image19.jpg",
		"desc" : "Guests Henna Design"
	  }
  ];
  
  $scope.images4 = [
	  { "id"   : 9,
		"src"  : "images/portfolio-image10.jpg",
		"desc" : "Bride Henna Design"
	  },
	  { "id" : 10,
		"src" : "images/portfolio-image11.jpg",
		"desc" : "Birthday Party Henna Design"
	  },
	  { "id" : 11,
		"src" : "images/portfolio-image12.jpg",
		"desc" : "Guests Henna Design"
	  },
	  { "id" : 2,
		"src" : "images/portfolio-image16.jpg",
		"desc" : "Guests Henna Design"
	  },
	  { "id" : 3,
		"src" : "images/portfolio-image20.jpg",
		"desc" : "Guests Henna Design"
	  }
  ];
	
 var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("showImage");
var captionText = document.getElementById("caption");

	$scope.imageStyle = {
	"border-radius" : "5px",
    "cursor"		: "pointer",
    "transition"	: "0.3s",
	}
	
	$scope.showCloseButtton = false;
	//alert(showCloseButtton);
$scope.openImage = function(index,arrayImageNumber){
	
	$scope.showCloseButtton = true;
	
	$scope.modal = {
	"display"		   : "block",
    "position"         : "fixed",
    "z-index"          : "1",
    "padding-top" 	   : "100px",
    "left"        	   : "0",
    "top" 		       : "0",
    "width" 	  	   : "100%",
    "height"	  	   : "100%",
    "overflow"    	   : "auto",
    "background-color" : "rgb(0,0,0)",
    "background-color" : "rgba(0,0,0,0.9)",
	"from-transform":"scale(0)",
	"from-transform":"scale(1)"
	}
	
	$scope.modalContent = {
	"margin"	: "auto",
    "display"	: "block",
    "width"		: "100%",
    "max-width" : "700px"
	}
	
	$scope.closeImage = {	
	"position"        : "absolute",
    "top"	          : "15px",
    "right"	          : "35px",
    "color"	          : "#f1f1f1",
    "font-size"       : "40px",
    "font-weight"     : "bold",
    "transition"      : "0.3s",
	"color" 		  : "#bbb",
    "text-decoration" : "none",
    "cursor"		  : "pointer"
	}
	
	if(arrayImageNumber == 1){
    $scope.modal_Img = $scope.images1[index].src;
    $scope.captionText = $scope.images1[index].desc;
	}
	
	if(arrayImageNumber == 2){
    $scope.modal_Img = $scope.images2[index].src;
    $scope.captionText = $scope.images2[index].desc;
	}
	
	if(arrayImageNumber == 3){
    $scope.modal_Img = $scope.images3[index].src;
    $scope.captionText = $scope.images3[index].desc;
	}
	
	if(arrayImageNumber == 4){
    $scope.modal_Img = $scope.images4[index].src;
    $scope.captionText = $scope.images4[index].desc;
	}
}

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
$scope.closeModalImage = function() { 

   $scope.showCloseButtton = "false";
   $scope.modal = {"display": "none"}
} 

}]);