$(document).ready(function(){
    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        navigation : true,
        nav: true,
        navigationText: ["<i class='fas fa-long-arrow-alt-right right-arrow-design'></i>", "<i class='fas fa-long-arrow-alt-left left-arrow-design'></i>"]
        });
        
        $("#category-owl-demo").owlCarousel({
        
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],
        navigation : true,
        navigationText: ["<i class='fa fas fa-long-arrow-alt-right right-arrow-design'></i>", "<i class='fa fas fa-long-arrow-alt-left left-arrow-design'></i>"]
        });

    $('.navbar-toggler').click(function(){
        $(this).toggleClass('toggler');
    })
    $('.dropdown-bold-category').click(function(){
        $(this).toggleClass('dropdown-toggler');
    })
    $('.user-icon').click(function(){
        $(".toggle-user-container").show();
        $(".blue-user-icon").show();
        $(".user-icon").hide();
    
        // $(this).toggleClass('userIconBackground');
    })
    $(".blue-user-icon").click(
        function(){
            $(".user-icon").show();
            $(".blue-user-icon").hide();
            $(".toggle-user-container").hide();
        }
    )
    $(".location-icon").click(function(){
        $(".toggle-location-container").show();
        $(".blue-location-icon").show();
        $(".location-icon").hide();
    })
    $(".blue-location-icon").click(function(){
        $(".toggle-location-container").hide();
        $(".blue-location-icon").hide();
        $(".location-icon").show();
    })
    

    // blog page
  
     
});