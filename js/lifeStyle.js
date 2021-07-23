window.addEventListener('DOMContentLoaded', function(){

    const titleSub = document.querySelector('.title_sub');
    const lifeTab = document.querySelectorAll('.life_tab ul li');
    const lifeGall = document.querySelectorAll('.life_gall');
    
    let subList = ["DESIGN","LIVING","STYLE","CULTURE"]
    let dataList = ["design", "living", "style", "culture"]

    // console.log(lifeTab,lifeGall)

                  
    let num = 0;
    for(let i=0; i<lifeTab.length; i++){
        lifeTab[i].addEventListener('click', function(e){            
            e.preventDefault();
            lifeTab[num].classList.remove('tab_now');
            lifeGall[num].classList.remove('active');
            lifeTab[i].classList.add('tab_now');
            lifeGall[i].classList.add('active');
            num = i;

            titleSub.textContent = subList[i]
            
        });
    }

    $.ajax({
        url: 'json/lifestyle.json',
        success:function(a){
            let li;

            // 디자인
            li = '';
            a.design.forEach(function(v){                
                listUp(v);            
            });     
            $('.gall_design').html(li)        
             
            // 리빙
            li = '';
            a.living.forEach(function(v){                
                listUp(v);
            });                 
            $('.gall_living').html(li)

            // 스타일
            li = '';
            a.style.forEach(function(v){                
                listUp(v);
            });                 
            $('.gall_style').html(li)

            // 컬쳐
            li = '';
            a.culture.forEach(function(v){                
                listUp(v);
            });    
            $('.gall_culture').html(li)                         
                        
            function listUp(v){
                li += `<li>
                            <a href="#">
                                <h3>${v.title}</h3>
                                <img src="${v.img}" alt="<${v.title}>의 이미지">
                            </a>
                       </li>`
            }

            // 디자인
            const designList = document.querySelectorAll('.gall_design li');               
                for(let i=0; i<designList.length; i++){
                    designList[i].addEventListener('click', function(e){
                        e.preventDefault();
                        $('.popup').css({display: 'flex'})
                        dataChange(a.design[i]);
                    });                
                };

            // 리빙
            const livingList = document.querySelectorAll('.gall_living li');               
            for(let i=0; i<livingList.length; i++){
                livingList[i].addEventListener('click', function(e){
                    e.preventDefault();
                    $('.popup').css({display: 'flex'})
                    dataChange(a.living[i]);
                });                
            };

            // 스타일 
            const livingList = document.querySelectorAll('.gall_living li');               
            for(let i=0; i<livingList.length; i++){
                livingList[i].addEventListener('click', function(e){
                    e.preventDefault();
                    $('.popup').css({display: 'flex'})
                    dataChange(a.living[i]);
                });                
            };
            // 컬쳐
            const livingList = document.querySelectorAll('.gall_living li');               
            for(let i=0; i<livingList.length; i++){
                livingList[i].addEventListener('click', function(e){
                    e.preventDefault();
                    $('.popup').css({display: 'flex'})
                    dataChange(a.living[i]);
                });                
            };


            $('.popup').on('click', function(){
                $(this).css({display: 'none'})
            });

            function dataChange(item){
                li = `<p>
                        <img src="${item.img}" alt="<${item.title}>의 이미지">
                      </p>    
                      <h2>${item.title}</h2>
                      <span>${item.detail}</span>`;

                $('.popup').html(li);
            }
            console.log('성공')
        },
        error:function(){
            console.log('실패')

        }
    })

    


});