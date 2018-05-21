$("document").ready(function(){
    // init foundation stuff - interchange, close box, etc.
    $(document).foundation();
    
    // Cookie config for modal
    // If no cookie with our chosen class...
    if($.cookie("dismiss-ribbon-gdpr-webinar-2018-05-24") == null){
        $('#alertTop').removeClass("hide");
    }else{
        $('#alertTop').addClass("hide");
    }
    $(".dismiss").click(function(){
        $.cookie('dismiss-ribbon-gdpr-webinar-2018-05-24', 'true', { expires: 30 });
        $('#alertTop').addClass("hide");
    });
    // not for prod!
    // $(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
    //     console.log(newSize + ' breakpoint');
    // });
});
