
document.addEventListener("DOMContentLoaded", function () {

    // DIRTY Responsive pricing table JS

    jQuery("ul").on("click", "li", function () {
        var pos = jQuery(this).index() + 2;
        jQuery("tr").find('td:not(:eq(0))').hide();
        jQuery('td:nth-child(' + pos + ')').css('display', 'table-cell');
        jQuery("tr").find('th:not(:eq(0))').hide();
        jQuery('li').removeClass('active');
        jQuery(this).addClass('active');
    });

    // Initialize the media query
    var mediaQuery = window.matchMedia('(min-width: 960px)');

    // Add a listen event
    mediaQuery.addListener(doSomething);

    // Function to do something with the media query
    function doSomething(mediaQuery) {
        if (mediaQuery.matches) {
            jQuery('.sep').attr('colspan', 5);
        } else {
            jQuery('.sep').attr('colspan', 2);
        }
    }

    // On load
    doSomething(mediaQuery);

    // Toggle Click on certain resolution

    jQuery(window).resize(function () {
        var screenWidthCheck = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (screenWidthCheck < 960) {
            jQuery(".offres.click").click();
        }
    });

});
