<<<<<<< HEAD
jQuery(function(){
=======
gjQuery(function(){
>>>>>>> 9e012ee43574a61aa0567caf7e73e2e303ad2cc1
    $(function () {
        $(window).scroll(function () { //Fonction appelée quand on descend la page
            if ($(this).scrollTop() > 200 ) {  // Quand on est à 200pixels du haut de page,
                $('#scrollUp').css('right','10px'); // Replace à 10pixels de la droite l'image
            } else {
                $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
            }
        });
    });
});
