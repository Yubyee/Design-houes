window.addEventListener('DOMContentLoaded', function(){   

    $('header').load('inc.html header > div',nav);
    $('footer').load('inc.html footer > div');

    function nav(){
        const lifeMenu = document.querySelector('header .lifestyle > a')
        const lifeMenuList = document.querySelectorAll('header .lifestyleTab a')
       
        lifeMenu.addEventListener('click', function(){          
            localStorage.pageName = 'Design'
        });
        
        for(let i=0; i<lifeMenuList.length; i++){
            lifeMenuList[i].addEventListener('click', function(){
                localStorage.pageName = lifeMenuList[i].innerHTML;
            });
        }
       
        $.ajax({
            url: 'json/lifestyle.json',
            success:function(a){
                let li=0, idx=0;
    
                function listUp(type){
                    li = '';
                    a[type].forEach(function(v){                
                        li += `<li class="list_load">
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

                switch(localStorage.pageName){
                    case 'Design' : Design(); break;
                    case 'Living' : Living(); break;
                    case 'Style' : Style(); break;
                    case 'Culture' : Culture(); break;
                }

                function Design(){
                    listUp('design');
                };
                function Living(){
                    listUp('living');
                };
                function Style(){
                    listUp('style');
                };
                function Culture(){
                    listUp('culture');
                };
            }
        });

        const classMenu = document.querySelector('.classevent > a')
        const classMenuList = document.querySelectorAll('.classevent > p > a')

        classMenu.addEventListener('click', function(){
            localStorage.pageName2 = '';
        })  
        for(let i=0; i<classMenuList.length; i++){
            classMenuList[i].addEventListener('click', function(){
                localStorage.pageName2 = this.innerHTML
            })    
        }

        //SCROLL        
        let sPos = {state:'down',y:0, y2:0}
        function scrollUpDwon(){
            sPos.y = window.scrollY;
            if(sPos.y > sPos.y2){
                sPos.state = 'down';
            }else{
                sPos.state = 'up';
            }
            sPos.y2 = sPos.y;
        }
        window.addEventListener('scroll', function(){
            let domHeight = document.documentElement.offsetHeight;
            let winHei = window.innerHeight;
            scrollUpDwon();
            // console.log(domHeight, winHei, this.scrollY)

            if(sPos.state == 'down' && this.scrollY > 200){
                //DOWN
                $('header').css('transform', 'translateY(-100%)')
            }else{
                //UP
                $('header').css('transform', 'translateY(0%)')
            }

            
            if (window.matchMedia("(max-width: 767px)").matches) {

            }

        });


        


    }


    





});