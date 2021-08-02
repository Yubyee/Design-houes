window.addEventListener('DOMContentLoaded', function(){
    
  $.ajax({
    url:'json/index.json',
    success:function(a){
      console.log('성공')

      let title, img, detail, contents ="" ;

      a.index.forEach(function(v){
        title = v.title;
        img = v.img;
        detail = v.detail;
        // console.log(title, img, detail, more)

        contents += `<div class="con">
                        <img src="${img}" ait="${title}의 이미지">            
                        <div>
                          <a href="#">
                            <h2>
                              <span>${title}</span>
                            </h2>                    
                            <p>
                              <span>${detail}</span>
                            </p>
                            <h5>
                              <span>view more +</span>
                            </h5>
                          </a>                    
                        </div>                
                    </div>`

        $(".slide").html(contents);
      });

      $(".slide").slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
      });

      $('.slick-current').find('div').addClass('active');
      $('.slide').on('afterChange', function(event, slick, currentSlide){
        // console.log(currentSlide);
        $('.con div').removeClass('active');
        $('.slick-current').find('div').addClass('active');
      });


      $('main a').on('click', function(e){
        e.preventDefault();
      })  


      
    },
    error:function(){
      console.log('실패')
    }

  })




});
