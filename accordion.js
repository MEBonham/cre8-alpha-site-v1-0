
$(document).ready(function($) {
    $('#accordion').find('.accordion-toggle').click(function(){

        console.log("CLICK");

        //Expand or collapse this panel
        $(this).next().slideToggle('fast');

        //Hide the other panels
        $(".accordion-content").not($(this).next()).slideUp('fast');

    });
});