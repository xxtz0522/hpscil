$(function(){
	var a = $('#mainnav'),
		b =a.offset();
	$(document).on('scroll',function(){
		var	c = $(document).scrollTop();
		if(b.top<=c){
			a.css({'position':'fixed','top':'0px','z-index':'100'})
			}else{
				a.css({'position':'static'})
				}
		})
})

// header 特效
$(function(){
	// 初始化 传入dom id
	var victor = new Victor("header", "output");
	var theme = [
			["#002c4a", "#005584"],
			["#35ac03", "#3f4303"],
			["#ac0908", "#cd5726"],
			["#18bbff", "#00486b"]
		]
	$(".color li").each(function(index, val) {
		var color = theme[index];
		 $(this).mouseover(function(){
			victor(color).set();
		 })
	});
});