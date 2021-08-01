window.addEventListener('DOMContentLoaded', function(){

    $.ajax({
        url: 'json/library.json',
        success:function(a){
            console.log('성공')

            let book = '';
            a.subscribeNow.forEach(function(v){                
                book += `<li>
                            <figure>
                                <img src="${v.img}" alt="<${v.title}>의 이미지">
                                <figcaption><b>${v.tag}</b></figcaption>
                            </figure>            
                            <div class="shop_txt">               
                                <h3>${v.title}</h3>
                                <h5>정상가 ${v.normalPrice}원</h5>
                                <h4>할인가</h4>
                                <h3>${v.salePrice}원</h3>
                                <h6>재구독 할인가 ${v.reSubscribe}원</h6>
                                <div class="shop_bt">
                                    <a href="#">월 구독</a>
                                    <a href="#"><b>1년 정기 구독</b></a>                    
                                </div>    
                            </div>
                        </li>`
            });     
            $('.shop_wrap').html(book);
                        
            $(".shop_wrap").slick({
                arrows: false,
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000
            });

            $('.shop_bt a').on('click', function(e){
                e.preventDefault();
            })

            let bookLi = '';
            a.bookList.forEach(function(v){
                bookLi += `<li class="list_items">
                                <a href="#">
                                    <p class="list_img">
                                        <img src="${v.img}" alt="<${v.title}>의 이미지">
                                    </p>
                                    <h3>${v.title}</h3>
                                </a>
                            </li>`
            });
            $('.lib_slid ul').html(bookLi);

            $(".lib_slid ul").slick({
                arrows: true,
                dots: false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                      breakpoint: 1250,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                      }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          infinite: true,
                          dots: false
                        }
                    },
                    {
                        breakpoint: 573,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
                          infinite: true,
                          dots: false
                        }
                    }
                ]
            });

            $('.list_items a').on('click', function(e){
                e.preventDefault();
            })

            $('main a').on('click', function(e){
                e.preventDefault();
            })

        },
        error:function(){console.log('실패')}
    });

    $('.lib_exp a').on('click', function(e){
        e.preventDefault();
    })



});
