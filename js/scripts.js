// ----------------------首页---------------

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
