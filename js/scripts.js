window.onload = function() {
    // ----------判断页面是否出现滚动条来控制页脚位置-------------
    if (document.documentElement.clientHeight > document.documentElement.offsetHeight) {
        $('.footer').addClass('fixed');
    } else {
        $('.footer').removeClass('fixed');
    }
   
    // ------------左右高度一致---------
    var hl = $(".left-nav-2").outerHeight(); //获取左侧left层的高度 
    var hr = $(".charge-container").outerHeight(); //获取右侧right层的高度  
    var mh = Math.max(hl, hr); //比较hl与hr的高度，并将最大值赋给变量mh
    $(".left-nav-2").height(mh); //将left层高度设为最大高度mh  
    $(".charge-container").height(mh); //将right层高度设为最大高度
}
// ----------------------首页---------------
$(function() {
    // 头部个人中心,购物车
    $('.user-nav').add('.cart-container').hover(function() {
        $(this).find('.js-hover').show();
    }, function() {
        $('.js-hover').hide();
    });

    // 移动业务
    $('.mobile-charge').hover(function() {
            $(this).find('.mobile-charge-list').show();
        }, function() {
            $(this).find('.mobile-charge-list').hide();
        })
        //分享
    $('.share-container').hover(function() {
        $('.share-type').fadeIn(500);
    }, function() {
        $('.share-type').fadeOut(500);
    });

    //删除购物车内容
    $('.cart-box-list').find('.delete').click(function() {
        var $parent = $(this).parents('li');
        var len = $('.cart-box-list li').length;
        $parent.remove();
        if (len <= 1) {
            $('.cart-box-list').addClass('hide');
            $('.bottom-calculate').addClass('hide');
            $('.empty-cart').removeClass('hide');
        } else {
            $('.empty-cart').addClass('hide');
        }
    });

    //信息弹窗(添加收货地址，表单查看详情)
    $('.add-addr-info').add('.detail-info').click(function() {
        $('.ui-dialog').addClass('show');
        $('.ui-dialog').find('.icon-error').click(function() {
            $('.ui-dialog').removeClass('show');
        })
    });

    //选择框
    $('.select-box').find('li').click(function() {
        var $span = $(this).children('.sprice-select');
        var $parent = $(this).parent();
        $(this).addClass('active').siblings('li').removeClass('active');
        $parent.find('.sprice-select').removeClass('sprite');
        $span.addClass('sprite');
    });


    // 点击激活active
    $('.sort-btn').find('li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });


    // 隐藏客服
    $('.customer-service').find('.sprite-cancel').click(function() {
        $('.ask-girl').hide();
    });

    //选择套餐
    $('.js-select-mobile').find('li').click(function() {
        var index = $('.js-select-mobile li').index($(this));
        // var $parent = $(this).parent('.js-select-mobile');
        $('.mobile-business').find('.o-box').eq(index).addClass('show').siblings('.o-box').removeClass('show');
    });


    // ---------------------------购物车页面-----------------------
    minus_plus();
    allCheck();

     //购物车数量加减
    function minus_plus(){
        var count = 1;
        $('.minus').on('click',function(){
            var $parent = $(this).parent('.amount');
            var $count = $parent.find('.count');
            count = $count.val(); //每次点击前先获取input的值
            if(count<=1){
                $(this).addClass('disable');
                return;
            }
            $count.val(--count);
        });

        $('.plus').on('click',function(){  
            var $parent = $(this).parent('.amount');
            var $count = $parent.find('.count');
            count = $count.val(); //每次点击前先获取input的值
            $count.val(++count);
            $('.minus').removeClass('disable');
        });

        $('.count').change(function (){
            if($(this).val()==0){
                alert('数量不能为0');
                $(this).siblings('.minus').addClass('disable');
                $(this).val(1);
            }
        });
    }
    
    function allCheck(){
        //全选
        $('.all-check').add('.select-all').click(function(){ 
            var check = $(this).find(":checkbox").prop("checked");
            if(check == false){
                $(".check-list :checkbox").prop("checked", false); 
                $(".all-check :checkbox").prop("checked", false);
                $(".select-all :checkbox").prop("checked", false);  
            }else{
                $(".check-list :checkbox").prop("checked", true); 
                $(".all-check :checkbox").prop("checked", true); 
                $(".select-all :checkbox").prop("checked", true); 
            }            
        });

        //单选某个商品时，若列表中有未勾选的商品，则取消全选按钮的选中状态
        $(".check-list :checkbox").click(function(){
            var flag = 0;
            //遍历每个商品
            $(".check-list :checkbox").each(function(i){
                var check = $(".check-list :checkbox").eq(i).prop("checked");
                if(check == false){
                    flag++;
                    $(this).parents('tr').removeClass('checked');
                }else {
                    $(this).parents('tr').addClass('checked');
                }
            });

            if(flag>=1){
                $(".all-check :checkbox").prop("checked", false);
                $(".select-all :checkbox").prop("checked", false); 
            }else {     
                $(".all-check :checkbox").prop("checked", true); 
                $(".select-all :checkbox").prop("checked", true); 
            }
        });
    }
    // ---------------------------购物车页面--结束---------------------


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
        $('.customer-service').show();
       
    } else {
        $('.slideUp').hide();
        $('.share').hide();

    }

     
}

// ------------------返回顶部结束---------------



//----------日期范围限制-------------------
    var start = {
        elem: '#start',
        format: 'YYYY-MM-DD hh:mm:ss',
        min: '2009-01-01', //设定最小日期为当前日期
        max: '2099-06-16', //最大日期
        istime: true,
        istoday: false,
        choose: function(datas){
             end.min = datas; //开始日选好后，重置结束日的最小日期
             end.start = datas //将结束日的初始值设定为开始日
        }
    };

    var end = {
        elem: '#end',
        format: 'YYYY-MM-DD hh:mm:ss',
        max: '2099-06-16',
        istime: true,
        istoday: false,
        choose: function(datas){
            start.max = datas; //结束日选好后，充值开始日的最大日期
        }
    };
    laydate(start);
    laydate(end);

// --------日期插件结束------------


