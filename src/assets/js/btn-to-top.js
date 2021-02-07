jQuery(document).ready(function () {

    jQuery("#btnUP").hide();

    jQuery('a#btnUP').click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 1000) {
            jQuery('#btnUP').fadeIn();
        } else {
            jQuery('#btnUP').fadeOut();
        }
    });
});