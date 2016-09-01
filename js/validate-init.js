//表单验证
$(function(){
	var operator = null;

     $('.input-form :input').bind('input propertychange', function(){
     	var $parent = $(this).parent('.input-text');
     	$parent.find('.input-wrong').remove();
     	$parent.find('.label-operator').remove();//清除提示
     	// 手机号
     	if($(this).is('.mobile')){
     		if(!isCellphone(this.value)){
     			var errorMsg = "请输入正确手机号";
     			wrong_tip($parent,errorMsg);
     		}else {
     			var correct = "广州移动";
     			mobile_tip($parent,correct);
     		}
     	// 密码
     	}else if($(this).is('.password')){
     		if(this.value =="" || this.value.length<6){
     			var errorMsg = "请输入正确的密码";
     			wrong_tip($parent,errorMsg);
     		}else {
     			var correct = "";
     			mobile_tip($parent,correct);
     		}
     	}
     });
     // 提交按钮
     $('.btn-recharge').add('.btn-save').click(function(){
     	$('.input-form :input').trigger('propertychange');
     })

})

//错误提示
function wrong_tip (parent,text) {
 	var html = '<p class="input-wrong">\
                <i class="icon-minus_2"></i>\
                <span>'+text+'</span>\
            </p>';
    parent.append(html);
    parent.find('input').css('borderColor','#eb5345');
}

//正确提示
function mobile_tip(parent,text){

	var html = '<div class="label-operator">\
                <i class="icon-hooke_3"></i>\
                <span>'+text+'</span>\
            </div>';
    parent.append(html);  
    parent.find('input').css('borderColor','#e0e3e6');     
}