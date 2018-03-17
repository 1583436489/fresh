/**
 * 当前位置
 */
function setPageIndex(index){
	$('.active').removeClass('active');
	$('#'+index).addClass('active');
}