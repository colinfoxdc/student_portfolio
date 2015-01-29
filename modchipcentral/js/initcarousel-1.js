jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initcarousel-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    if ( typeof html5Lightbox === "undefined" )
    {
        html5Lightbox = jQuery(".html5lightbox").html5lightbox({
            skinsfoldername:"",
            jsfolder:jsFolder,
            barheight:48
        });
    }
    jQuery("#amazingcarousel-1").amazingcarousel({
        jsfolder:jsFolder,
        width:240,
        height:180,
        skinsfoldername:"",
        arrowhideonmouseleave:1000,
        scrollmode:"page",
        itembottomshadowimagetop:100,
        navheight:16,
        random:false,
        showhoveroverlay:true,
        arrowheight:32,
        itembackgroundimagewidth:100,
        skin:"Classic",
        responsive:true,
        bottomshadowimage:"bottomshadow-110-95-0.png",
        enabletouchswipe:true,
        navstyle:"bullets",
        backgroundimagetop:-40,
        arrowstyle:"always",
        navswitchonmouseover:false,
        hoveroverlayimage:"hoveroverlay-64-64-3.png",
        itembottomshadowimage:"itembottomshadow-100-100-5.png",
        showitembottomshadow:false,
        transitioneasing:"easeOutExpo",
        showitembackgroundimage:false,
        itembackgroundimage:"",
        playvideoimagepos:"center",
        circular:true,
        arrowimage:"arrows-32-32-2.png",
        showbottomshadow:false,
        navimage:"bullet-16-16-0.png",
        itembackgroundimagetop:0,
        showbackgroundimage:false,
        lightboxbarheight:48,
        showplayvideo:true,
        spacing:15,
        scrollitems:1,
        navdirection:"horizontal",
        itembottomshadowimagewidth:100,
        backgroundimage:"",
        arrowwidth:32,
        pauseonmouseover:true,
        bottomshadowimagetop:95,
        navmode:"page",
        screenquery:{
	mobile: {
		screenwidth: 600,
		visibleitems: 1
	}
},
        previewmode:false,
        interval:3000,
        navwidth:16,
        navspacing:8,
        playvideoimage:"playvideo-64-64-0.png",
        visibleitems:5,
        direction:"horizontal",
        bottomshadowimagewidth:110,
        autoplay:false,
        backgroundimagewidth:110,
        loop:0,
        transitionduration:1000
    });
});