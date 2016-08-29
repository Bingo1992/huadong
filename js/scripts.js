// ----------------------首页---------------
window.onload=function(){
   var hl = $(".left-nav-2").outerHeight(); //获取左侧left层的高度 
   var hr = $(".charge-container").outerHeight(); //获取右侧right层的高度  
   var mh = Math.max(hl,hr); //比较hl与hr的高度，并将最大值赋给变量mh
   $(".left-nav-2").height(mh); //将left层高度设为最大高度mh  
   $(".charge-container").height(mh); //将right层高度设为最大高度
}

$(function(){
    // 头部个人中心,购物车
    $('.user-nav').add('.cart-container').hover(function(){
        $(this).find('.js-hover').show();
    },function(){
        $('.js-hover').hide();
    });

    // 移动业务
    $('.mobile-charge').hover(function(){
        $('.mobile-charge-list').show();
    },function(){
        $('.mobile-charge-list').hide();
    })
    //分享
    $('.share-container').hover(function(){
        $('.share-type').fadeIn(500);
    },function(){
        $('.share-type').fadeOut(500); 
    });

    //删除购物车内容
    $('.cart-box-list').find('.delete').click(function(){
        var $parent = $(this).parents('li');
        var len = $('.cart-box-list li').length;
        $parent.remove();
        if(len == 1){
            $('.cart-box-list').addClass('hide');
            $('.bottom-calculate').addClass('hide');
            $('.empty-cart').removeClass('hide');
        }
    });

    //信息弹窗
    $('.add-addr-info').click(function(){
        $('.ui-dialog').addClass('show');
        $('.ui-dialog').find('.icon-error').click(function(){
            $('.ui-dialog').removeClass('show');
        })
    });

    //选择框
    $('.select-box').find('li').click(function(){
        var $span = $(this).children('.sprice-select');
        var $parent = $(this).parent();
        $(this).addClass('active').siblings('li').removeClass('active');
        $parent.find('.sprice-select').removeClass('sprite');
        $span.addClass('sprite');
    })


})

// -----------------返回顶部-----------------
//获取滚动条当前的位置 
function getScrollTop() {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}

window.onscroll = function() {
    if (getScrollTop() > 200) {
        $('.slideUp').show();
        $('.share').show();
        // 隐藏客服
        $('.customer-service').find('.sprite-cancel').click(function(){
            $('.ask-girl').hide();
        })
    } else {
        $('.slideUp').hide();
        $('.share').hide();

    }
}

// ------------------返回顶部结束---------------
