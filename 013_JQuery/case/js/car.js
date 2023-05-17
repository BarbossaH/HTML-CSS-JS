
$(function () {
  countGoods();
  //全部选中模块
  $('.checkall').change(function () {
    // $(this).prop("checked");
    // console.log($(this).prop("checked"));
    $('.j-checkbox').prop("checked", $(this).prop("checked"));
    $('.checkall').prop("checked", $(this).prop("checked"));

    if ($(this).prop('checked')) {
      $('.cart-item').addClass('check-cart-item');
    }
    else {
      $('.cart-item').removeClass('check-cart-item');
    }
    countGoods();
  });
  // 如果子项全部选中，则对应all也选中，反之亦然
  $('.j-checkbox').change(function () {
    // console.log($('.j-checkbox:checked').length);
    // if ($('.j-checkbox:checked').length === $('.j-checkbox').length) {
    //   $('.checkall').prop('checked', true);
    // } else {
    //   $('.checkall').prop('checked', false)
    // }

    $('.checkall').prop('checked', $('.j-checkbox:checked').length === $('.j-checkbox').length);
    if ($(this).prop('checked')) {
      $(this).parents('.cart-item').addClass('check-cart-item');
    }
    else {
      $(this).parents('.cart-item').removeClass('check-cart-item');
    }
    countGoods();
  })

  //增减商品的数量
  $('.increment').click(function () {
    var num = $(this).siblings('.itxt').val();
    num++;
    $(this).siblings('.itxt').val(num)
    // console.log(num);

    // var sumPrice = $(this).parent().parent().siblings('.p-sum').text();
    var singlePrice = $(this).parent().parent().siblings('.p-price').html();
    singlePrice = singlePrice.substr(1);
    // console.log(singlePrice);
    var sumPrice = singlePrice * num;
    // console.log(sumPrice);
    // $(this).parent().parent().siblings('.p-sum').html(' ¥ ' + sumPrice);
    $(this).parents('.p-num').siblings('.p-sum').html('￥ ' + sumPrice.toFixed(2));
    // $('.itxt')
    countGoods();

  })

  $('.decrement').click(function () {
    var num = $(this).siblings('.itxt').val();
    // console.log(typeof num);string

    if (num > 1) {
      // console.log(typeof num);string
      num--;
      // console.log(typeof num); Number

      $(this).siblings('.itxt').val(num)
      // console.log(num);

      // var sumPrice = $(this).parent().parent().siblings('.p-sum').text();
      var singlePrice = $(this).parent().parent().siblings('.p-price').html();
      singlePrice = singlePrice.substr(1);
      // console.log(singlePrice);
      var sumPrice = singlePrice * num;
      // console.log(sumPrice);
      // $(this).parent().parent().siblings('.p-sum').html(' ¥ ' + sumPrice);
      $(this).parents('.p-num').siblings('.p-sum').html('￥ ' + sumPrice.toFixed(2));

      countGoods();

    }
  })

  // 改变输入框，修改小计结果
  $('.itxt').change(function () {
    var num = $(this).val();
    // console.log(num);
    // console.log(typeof num);//string

    var singlePrice = $(this).parent().parent().siblings('.p-price').html();
    // console.log(singlePrice);
    // console.log(typeof singlePrice);//string
    //注意去除字符的符号
    singlePrice = singlePrice.substr(1);
    var sumPrice = num * singlePrice;
    // console.log(sumPrice);

    $(this).parents('.p-num').siblings('.p-sum').html('￥ ' + sumPrice.toFixed(2));
    countGoods();

  })
  function countGoods() {
    var num = 0;
    var sumPrice = 0;
    //修改总计数量和总计价格 使用each函数
    $.each($('.itxt'), function (i, ele) {
      if ($(ele).parents('.p-num').siblings('.p-checkbox').children('.j-checkbox').prop('checked')) {
        num += parseInt($(ele).val());
        console.log('time');

      }
    })

    // console.log(num);
    $.each($('.p-sum'), function (i, ele) {
      // console.log(ele);
      if ($(ele).siblings('.p-checkbox').children('.j-checkbox').prop('checked')) {
        // console.log('time');
        sumPrice += parseFloat($(ele).text().substr(1));
      }

    })
    // 如果这么写的话就会修改类的样式
    // $('.amount-sum').text('已经选了 ' + num + ' 件商品');
    // $('.price-sum').text('￥ ' + sumPrice.toFixed(2));

    $('.amount-sum em').text('已经选了 ' + num + ' 件商品');
    $('.price-sum em').text('￥ ' + sumPrice.toFixed(2));
  }

  $('.p-action a').click(function () {
    // alert(1);
    $(this).parents('.cart-item').remove();
    countGoods();

  })

  $('.remove-batch').click(function () {
    //隐藏迭代
    $(".j-checkbox:checked").parents('.cart-item').remove();
    countGoods();
  })

})