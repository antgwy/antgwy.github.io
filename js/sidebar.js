$(document).ready(function() {
    var mediamatch = window.matchMedia('(max-width: 48em)');
    mediamatch.onchange = function() {
        if(mediamatch.matches) {
          hideSidebar();
        }
    }
    if(!mediamatch.matches) {
        showSidebar();
    }
    $('#right-toggle').click(function(){
        if($('#right-toggle').hasClass('open')){
            showSidebar();
        } else {
            hideSidebar();
        }
    });
});
function showSidebar() {
    $('.post-toc-wrap').show();
    $('.post-toc-wrap').animate({"width": "320px"});
    $('body').animate({"margin-right": "320px"}, function() {
        $(window).resize();
    });
    $('.left-post').removeClass('pure-u-md-3-4');
    $('.body_container').animate({"padding-right": 0});
    $('.right-widgets').hide();
    $('#right-toggle').removeClass('open');
    $('#right-toggle').addClass('close');
}
function hideSidebar(){
    $('.post-toc-wrap').animate({"width": 0}, function(){
        $('.post-toc-wrap').hide();
    });
    $('body').animate({"margin-right": 0});
    $('.left-post').addClass('pure-u-md-3-4');
    $('.body_container').animate({"padding-right": "60px"}, function() {
        $('.body_container').css('padding-right', '');
        $(window).resize();
    });
    $('.right-widgets').show();
    $('#right-toggle').removeClass('close');
    $('#right-toggle').addClass('open');
}