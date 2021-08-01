window.addEventListener('DOMContentLoaded', function(){

    const lifeTab = document.querySelectorAll('.life_tab ul li');          
    
    $.ajax({
        url: 'json/lifestyle.json',
        success:function(a){
            let li , idx = 0;

            $('.title_sub').text(localStorage.pageName);


            let num = 0;
            for(let i=0; i<lifeTab.length; i++){
                if(localStorage.pageName != lifeTab[i].textContent){
                    lifeTab[i].classList.remove('tab_now');
                }else{
                    lifeTab[i].classList.add('tab_now');
                    num = i;  
                };
                lifeTab[i].addEventListener('click', function(e){    
                    e.preventDefault();
                    lifeTab[num].classList.remove('tab_now');
                    lifeTab[i].classList.add('tab_now');
                    num = i;  

                    localStorage.pageName = lifeTab[i].textContent
                    
                    $('.title_sub').text(localStorage.pageName);
                    
                    listUp(localStorage.pageName.toLowerCase());                  
                });
            } 

            function listUp(type){
                li = '';
                a[type].forEach(function(v){                
                    li += `<li>
                            <a href="#">
                                <h3>${v.title}</h3>
                                <img src="${v.img}" alt="<${v.title}>의 이미지">
                            </a>
                       </li>`
                });     
                $('.life_gall').html(li)
                
                $('.life_gall li').on('click',function(e){
                    e.preventDefault();
                    idx = $(this).index();
                    console.log()
                    dataChange(localStorage.pageName.toLowerCase());
                    $('.popup').css({display: 'flex'});                            
        
                }) 
            }
            listUp('design');          

            function dataChange(type){
                    li = `<p>
                            <img src="${a[type][idx].img}" alt="<${a[type][idx].title}>의 이미지">
                        </p>    
                        <h2>${a[type][idx].title}</h2>
                        <span>${a[type][idx].detail}</span>`;             
                $('.popup').html(li);
            }                
            
            $('.popup').on('click', function(){
                $(this).css({display: 'none'})
            });


            $('main a').on('click', function(e){
                e.preventDefault();
            })


            console.log('성공')
        },
        error:function(){
            console.log('실패')

        }
    })

    


});