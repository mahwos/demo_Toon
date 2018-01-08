/*!
 * HTML5 Video Player Template 02
 * http://html5videoplayer.net/
 *
 * Copyright 2012, socusoft.com
 */
 
 $(function() {
	 

     var videoBox = [];
   
	 
   function showVideo(vitem){
   
    	
   var videoID = vitem.attr('alt');
   
  
	
   var widthHeight = vitem.attr('rel').split('x');
   var bAutoPlay = vitem.attr('autoplay');
	var bLoop	=  vitem.attr('loop');

	var strAutoPlay,strLoop;

	
	if(bAutoPlay != null)
	{
		strAutoPlay = ' autoplay="autoplay" ';
	}
	else
	{
		strAutoPlay = ' ';
	}

	if(bLoop != null)
	{
		strLoop = ' loop="loop" ';
	}
	else
	{
		strLoop = ' ';
	}
    
 
   //video is does not exist
   if(videoBox[videoID] == null)
   {
   
        var PlayerSkin;
        if(widthHeight[2] =="TED")
            PlayerSkin =  'class="mejs-ted"';
        else if(widthHeight[2] =="WMP")
            PlayerSkin =  'class="mejs-wmp"';
        else
            PlayerSkin = ' ';
   
        var videoStr =   '<div class="videoNode" id="VideoBox_'+videoID+'">\n<video '+PlayerSkin+strAutoPlay + strLoop +' id="'+videoID+'" controls preload="none" width="'+widthHeight[0]+'" height="'+widthHeight[1]+'"\n'+
            '\tposter="poster/'+videoID+'.jpg"">\n'+
            '\t<source src="./videos/'+videoID+'.mp4" type="video/mp4" />\n'+
            '\t<source src="./videos/'+videoID+'.webm" type="video/webm" />\n'+
            '\t<source src="./videos/'+videoID+'.ogv" type="video/ogg" />\n'+
            '</video>\n</div>';
   
            var vbox = vitem.append(videoStr);
   
            videoBox[videoID] = vbox;
   
   
   
            $("#"+videoID).mediaelementplayer({
                                      plugins: ['flash','silverlight']
                                     });
   
   
        }
        else
    {
   
            $("#VideoBox_"+videoID).show();
    }   
   }
   
 
	 
	$("#Wrapper").find(".videoitem").each(function() {
			showVideo($(this));
			});
  
    $('#tips').delay(5000).fadeOut('slow');
});