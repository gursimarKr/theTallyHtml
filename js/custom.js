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
});