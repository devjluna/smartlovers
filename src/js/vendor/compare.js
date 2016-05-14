var compare = function(){
	var n = $("input[name='compare[]']:checked").length
	
	if(n == 2){
		$('#myModal').modal('show')
		$("input[name='compare[]']").attr('checked',false)
	}
};

module.exports = compare;