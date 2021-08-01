window.addEventListener('DOMContentLoaded', function(){

    $.ajax({
        url: 'json/search.json',
        success:function(a){console.log('성공');
    
        let titleList = '', bodyList = '', imageList = '';

        a.searchTitle.forEach(function(v){
            titleList += `<li>
                            <a href="#">
                                <p class="search_img">
                                    <img src="${v.img}" alt="<${v.title}>의 이미지">
                                </p>
                                <div class="search_txt">
                                    <h3>${v.title}</h3>
                                    <h4>${v.detail}</h4>
                                    <h5>${v.source}</h5>
                                </div> 
                            </a>                       
                        </li>`
        });

        $('.searchTitle').html(titleList);

        a.searchBody.forEach(function(v){
            bodyList += `<li>
                            <a href="#">
                                <p class="search_img">
                                    <img src="${v.img}" alt="<${v.title}>의 이미지">
                                </p>
                                <div class="search_txt">
                                    <h3>${v.title}</h3>
                                    <h5>${v.source}</h5>
                                </div> 
                            </a>                       
                        </li>`
        });

        $('.searchBody').html(bodyList);

        a.searchImage.forEach(function(v){
            imageList += `<li>  
                                <p>${v.title}</p>
                                <a href="#">
                                    <img src="${v.img}" alt="<${v.title}의 이미지>">
                                </a>
                            </li>`
        });

        $('.searchImage').html(imageList)

        $('.searchImage li').hover(
            function(){
                // 마우스 올렸을때
                $(this).find('p').addClass('active').stop();  
                $(this).find('img').css('transform', 'translate(-50%, -50%) scale(1.1)');                   
            },             
            function(){
                // 마우스 내렸을때
                $(this).find('p').removeClass('active').stop();  
                $(this).find('img').css('transform', 'translate(-50%, -50%) scale(1)');  
            } 
        );

        $('main a').on('click', function(e){
            e.preventDefault();
        })
    
    
    
    },
        error:function(){console.log('실패')}
    })


});
