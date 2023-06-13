$(function(){
    let Pj01Img = $('.all .left figure img');
    let pj06Img = $('.other .left figure img');
    let item = $('.item'); 

    item.mouseup(function(){
        console.log($(this).index())
        let imgIndex = $(this).index() + 1;
        Pj01Img.attr('src','img/img0'+ imgIndex + '.jpg')
        pj06Img.attr('src','img/img00'+ imgIndex + '.jpg')

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