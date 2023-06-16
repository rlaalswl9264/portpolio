$(function(){
    let Pj01Img = $('.all .left figure img');
    let mb06Img = $('.other .left figure img');
    let item = $('.item'); 
    let itemPj = $('.all .item'); 
    let itemmb = $('.other .item '); 

    itemPj.mouseup(function(){
        console.log($(this).index())
        let imgIndex = $(this).index() + 1;
        Pj01Img.attr('src','img/img0'+ imgIndex + '.jpg')

    })

    itemmb.mouseup(function(){
        console.log($(this).index())
        let imgIndex = $(this).index() + 1;
        mb06Img.attr('src','img/img00'+ imgIndex + '.jpg')

    })


    $(".Graphic__img").carouselTicker();
    $(".cont03__img").carouselTicker({
          // animation speed
          speed: 1,
          // animation delay
          delay: 30,
          // or 'next'
          direction:"prev",
          // or 'vertical'
          mode:"horizontal",
          // callback
          onCarouselTickerLoad:function () {},
    });
    
})