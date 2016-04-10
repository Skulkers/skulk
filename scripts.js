
$(document).ready(function () {
	$('#showbounce').mouseenter(function(){
               $(this).effect('bounce', 500)
       });

    $('#videochange').hover(function() {
      $(this).attr('src','Skulk_The_Hulking_By_Hook_Or_By_Crooked_Automatic_Assault_Rifle.gif');
    },function() {
      $(this).attr('src','videostill1.gif');
    })
});

