
$(window).scroll(function(event) {
	if($(window).scrollTop()>40){
		$("nav").css({
		background : 'white',
		
	});
	}else{
		$("nav").css({
		background:"transparent",
		
	});
	}
});
 setInterval(function(){
	$(".carousel-item.active ").find("button").css({
	 transform: "rotate(360deg)",
	

});
	$(".carousel-item.active ").find("h2").css({
	 
	opacity: "1",
	
});
		$(".carousel-item.active ").find("h1").css({
	 
	 fontSize: "50px",
	
});
},500)
 $("#search").click(function(event) {
 	
 	$(".search").css({
 		top: '100px',
 		display:"block"
 		
 	});
 	
 });
 $(".search-close").click(function(event) {
 	$(".search").css({
 		top: '-300px',
 		display:"none"
 		
 	});
 });
 $(".fa-shopping-cart").click(function(event) {
 	
 	$(".card-modal").css({
 		 display:"block",
 		 right: "10px",
         top: "20px",
         width:"400px",
 		
 	});
 	
 });
 $(".card-close").click(function(event) {
 	$(".card-modal").css({
 		
 		display:"none",
 		
 	});
 });

  $(".searcard").children("input").mouseover(function(event) {
  	$(".inputsear").css({
  		display: 'none',
  		
  	});
  });
  $(".searcard").children("input").mouseout(function(event) {
	$(".inputsear").css({
  		display: 'block',
  	});
  });