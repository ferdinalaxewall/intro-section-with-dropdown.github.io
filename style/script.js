$(document).ready(function(){
   $(".navbar-dropdown .navbar-link").click(function(){
        let dataDropdown = $(this).attr("data-dropdown-show");
        let dataTarget = $(this).attr("data-target");
        
         if (dataDropdown == "hide") {
            $(this).attr("data-dropdown-show", "show");
            $(".dropdown-list#" + dataTarget).attr("data-dropdown-show", "show");
         }else{
            $(this).attr("data-dropdown-show", "hide");
            $(".dropdown-list#" + dataTarget).attr("data-dropdown-show", "hide");
         }
   }); 

   $(".menu-button").click(function(){
      let dataNavigation = $(this).attr("data-navigation-show");

      if (dataNavigation == "hide") {
         $(this).attr("data-navigation-show", "show");
         $(".navbar-list-group").attr("data-navigation-show", "show");
      } else {
         $(this).attr("data-navigation-show", "hide");
         $(".navbar-list-group").attr("data-navigation-show", "hide");
      }
   });

   $(".close-menu-button").click(function(){
      $(".menu-button").attr("data-navigation-show", "hide");
      $(".navbar-list-group").attr("data-navigation-show", "hide");
   });

   $(".navbar-overlay").click(function(){
      $(".close-menu-button").click();
   });
});