/**
 * Created by Lee on 16.11.2016.
 */
$(document).ready(function(){
    $('.unique-focus').focus(function() {
        $(this).nextUntil().css('display','block');
    });
    $( "input" ).focusout(function() {
        $(".active-arrow").hide();
    });
    $( "textarea" ).focusout(function() {
        $(".active-arrow").hide();
    });

    $('.act-drop').click(function(e){
         var text = $(this).text();
        $(this).parent().prev().text(text);
    });


    $(".table-info tr:first-child td").click(function () {
        $(this).toggleClass('td-hov');
        $(this).children().toggleClass('td-i-hov');
    });


    $(".dropdown-date").click(function(){
        $(this).children(".dropdown-content").toggle();
    });

    $(".share-menu").hover(function () {
        $(this).toggle();
    });

    $(".share-ico").hover(function() {
        $(this).siblings(".share-menu").toggle();
    });

    $(".radio-btn").click(function(){
        $(this).toggleClass('radio-btn-act');
    });

    $('.check-ico').click(function () {
       $(this).toggleClass('check-ico-checked');
    });

    $('.check-inner').click(function () {
        $(this).toggleClass('checked-inner');
    });

    $('.btn-acr').click(function () {
        if ( $( this ).hasClass( "minus-circle" ) ) {

            $( this ).removeClass("minus-circle");
            $( this ).addClass("plus-circle");
        }
        else {
            $( this ).addClass("minus-circle");
            $( this ).removeClass("plus-circle");
        }
    });

    (function($) {

        var allPanels = $('.accordion > dd').hide();

        $('.accordion > section > .btn-acr').click(function() {
            // allPanels.slideUp();
            $(this).parent().next().toggle();
            // return false;
        });

    })(jQuery);

});