window.addEventListener('DOMContentLoaded', function(){
    
  $.ajax({
    url:'json/index.json',
    success:function(a){
      console.log('성공')


      let title, img, detail, more, contents ="" ;

      a.index.forEach(function(v){
        title = v.title;
        img = v.img;
        detail = v.detail;
        more = v.more;
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
                              <span>${more}</span>
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
      
    },
    error:function(){
      console.log('실패')
    }

  })




});
