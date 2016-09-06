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

    //信息弹窗(添加收货地址，编辑地址，添加收货地址，表单查看详情)
    $('.add-addr-info').add('.tab-edit').add('.btn-add-address').add('.detail-info').click(function() {
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


    //我的订单页面取消订单，购物车页面取消购物车
    $('.btn-cancel').click(function(){
        var $parent = $(this).parents('tr');
        $('.confirm-dialog').addClass('show');
        $('.confirm-dialog .cancel').click(function(){
            $('.confirm-dialog').removeClass('show');
        });
        $('.confirm-dialog .confirm').click(function(){
            $('.confirm-dialog').removeClass('show');
            $parent.remove();
        });
    });

    // ---------------------------购物车页面-----------------------
    minus_plus();
    allCheck();

    //购物车数量加减
    function minus_plus() {
        var count = 1;
        $('.minus').on('click', function() {
            var $parent = $(this).parent('.amount');
            var $count = $parent.find('.count');
            count = $count.val(); //每次点击前先获取input的值
            if (count <= 1) {
                $(this).addClass('disable');
                return;
            }
            $count.val(--count);
        });

        $('.plus').on('click', function() {
            var $parent = $(this).parent('.amount');
            var $count = $parent.find('.count');
            count = $count.val(); //每次点击前先获取input的值
            $count.val(++count);
            $('.minus').removeClass('disable');
        });

        $('.count').change(function() {
            if ($(this).val() == 0) {
                alert('数量不能为0');
                $(this).siblings('.minus').addClass('disable');
                $(this).val(1);
            }
        });
    }

    function allCheck() {
        //全选
        $('.all-check').add('.select-all').click(function() {
            var check = $(this).find(":checkbox").prop("checked");
            if (check == false) {
                $(".check-list :checkbox").prop("checked", false);
                $(".all-check :checkbox").prop("checked", false);
                $(".select-all :checkbox").prop("checked", false);
            } else {
                $(".check-list :checkbox").prop("checked", true);
                $(".all-check :checkbox").prop("checked", true);
                $(".select-all :checkbox").prop("checked", true);
            }
        });

        //单选某个商品时，若列表中有未勾选的商品，则取消全选按钮的选中状态
        $(".check-list :checkbox").click(function() {
            var flag = 0;
            //遍历每个商品
            $(".check-list :checkbox").each(function(i) {
                var check = $(".check-list :checkbox").eq(i).prop("checked");
                if (check == false) {
                    flag++;
                    $(this).parents('tr').removeClass('checked');
                } else {
                    $(this).parents('tr').addClass('checked');
                }
            });

            if (flag >= 1) {
                $(".all-check :checkbox").prop("checked", false);
                $(".select-all :checkbox").prop("checked", false);
            } else {
                $(".all-check :checkbox").prop("checked", true);
                $(".select-all :checkbox").prop("checked", true);
            }
        });
    }
    // ---------------------------购物车页面--结束---------------------

    // ----------手机批发页面------------、

    // 手机通讯，手机配件
    $('.sort-title').find('a').click(function(){
        $(this).addClass('active').siblings('a').removeClass('active');
        var index = $('.sort-title a').index($(this));
        $('.sort-cotainer-list').eq(index).addClass('show')
        .siblings('.sort-cotainer-list').removeClass('show');
    })

    // 收起筛选
    $('.shrink').toggle(function(){
        $('.sc-container').hide()
        $(this).find('i').attr('class','icon-down');
    },function(){
        $('.sc-container').show();
        $(this).find('i').attr('class','icon-up');
    });

    //筛选
    $('.sc-list').find('a').live('click',function(){
        var value = $(this).html();
        var $parent = $(this).parents('li');
        var dataId = $parent.attr('class');
        var $ul = $(this).parents('.sortList').siblings('.has-select-sort');
        $parent.hide();
        createLi($ul,value,dataId);
       
    });
    //创建一个li元素
    function createLi(ul,value,dataId){
        var html = '<li data-id='+dataId+'>\
                    <span>'+value+'</span>\
                    <i>X</i>\
                </li>';
        ul.append(html);
    }

    //删除li元素
    $('.has-select-sort').find('li').live('click',function(){
        var dataId = $(this).attr('data-id');
        $('.sortList').find('li.'+dataId).show();
        $(this).remove();
    });

// --------------批量充值----------------------
   //添加号码
    $('.add-mobile').live('click',function(){
        var len = $('.batch-mobile li').length;
        var value = 0;
        if(len<11){//最后一个li为添加号码
            createMobile();
            value = parseInt($('.mobile-num').html());
            $('.mobile-num').html(++value);
        }else {
            alert('最多只可添加10个号码');
        }
    })
    //删减号码
    $('.delete-mobile').live('click',function(){
        var $li = $(this).parent('li');
        value = parseInt($('.mobile-num').html());
        $('.mobile-num').html(--value);
        $li.remove();
    })
    // 添加号码函数
    function createMobile(){
        var html = '<li>\
            <div class="input-text">\
                <input class="mobile text2" type="text" placeholder="请输入手机号">\
            </div>\
            <select>\
                <option>面值100元</option>\
                <option>面值200元</option>\
            </select>\
            价格：<span class="label-wrong">- -</span>\
            <i class="delete-mobile icon-error"></i>\
        </li>';
        $('.mobile-last-li').before(html);
    }



// -------------------物流信息-----------------
    $('.address-info').find('li').hover(function(){
        $(this).find('.edit-tab').show();
    },function(){
        $(this).find('.edit-tab').hide();
    });

    //删除地址
    $('.tab-delete').click(function(){
        if(confirm("确定删除此地址吗？")){
            $(this).parents('li').remove();
        } 
    });

    //设为默认
    $('.tab-default').live('click',function(){
        $('.edit-tab').each(function(){
            if(!($(this).find('span').hasClass('tab-default'))){
                $(this).prepend('<span class="tab-default">设为默认</span>');//给li元素添加“设为默认”按钮
            }
        })
        $('.address-info li').find('.default-addr').remove();//删除其他li元素的“默认地址”标签
        $(this).parent('.edit-tab').siblings('.person-info').append('<p class="default-addr">默认地址</p>');
        $(this).remove();


    })
  
    //添加地址函数
    // function addAddress(){
    //     var html = '<li><a>\
    //             <label class="checkbox">\
    //                 <input type="radio" name="address">\
    //                 <i class="icon-hook_2"></i>\
    //             </label>\
    //             <div class="person-info">\
    //                 <p>张一凡</p>\
    //                 <p class="detail-addr">\
    //                     <span>广东省</span>\
    //                     <span>广州市</span>\
    //                     <span>天河区</span>\
    //                     <span>天府路307号</span>\
    //                 </p>\
    //                 <p>138001380000</p>\
    //             </div>\
    //             <div class="edit-tab">\
    //                 <span class="tab-default">设为默认</span>\
    //                 <span class="tab-edit">编辑</span>\
    //                 <span class="tab-delete">删除</span>\
    //             </div>\
    //         </a></li>';
    //     $('.address-info').append(html);
    // }
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
        $('.cart-cal-now').addClass('show');

    }else {
        $('.slideUp').hide();
        $('.share').hide();
        $('.cart-cal-now').removeClass('show');

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
    choose: function(datas) {
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
    choose: function(datas) {
        start.max = datas; //结束日选好后，充值开始日的最大日期
    }
};
laydate(start);
laydate(end);

// --------日期插件结束------------
