jQuery(function($){
	$("#client_training .demo").each(function(){
		var fv = $(this).children('.video').flareVideo();
		var video_src = $(this).children('.video_src').text();
		fv.load([
		{
			src:  video_src,
			type: 'video/mp4',
			keyShortcut: false
		}
		]);
	});
});