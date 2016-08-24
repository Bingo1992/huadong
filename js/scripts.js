// ----------------------首页---------------

$(function(){
    // 头部个人中心
    $('.user-nav').hover(function(){
        $('.user-nav-list').slideToggle(500);
        $('.user').addClass('hover');
    },function(){
        $('.user-nav-list').hide();
        $('.user').removeClass('hover');
    });

    //share
    $('.share-container').hover(function(){
        $('.share-type').fadeIn(500);
    },function(){
        $('.share-type').fadeOut(500); 
    })
})

// -----------------返回顶部和底部刷新-----------------
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


//获取当前可是范围的高度 
function getClientHeight() {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
    } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
    }
    return clientHeight;
}

//获取文档完整的高度 
function getScrollHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}

window.onscroll = function() {
    if (getScrollTop() > 180) {
        $('.slideUp').addClass('show');
    } else {
        $('.slideUp').removeClass('show');
    }
}

// ------------------返回顶部和底部刷新结束---------------
