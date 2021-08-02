window.addEventListener('DOMContentLoaded', function(){

    $.ajax({
        url: 'json/classevent.json',
        success:function(a){
            console.log('성공')
        
            let classList = '';
            a.class.forEach(function(v){
                classList += `<li>
                                <a href="#">${v.month}.${v.date} ${v.title}</a>
                            </li>`                
            })
            $('.cla_text ul').html(classList);

            let imgList;
            function makeList(type){
                imgList = ''
                a[type].forEach(function(v){
                    imgList += `<li class="list_items">
                                        <a href="#">
                                            <p class="list_img">
                                                <img src="${v.img}" alt="<${v.title}>의 이미지">
                                            </p>
                                            <h3>${v.title2}</h3>
                                        </a>
                                    </li>`
                });
            }
            makeList('class');
            $('.class_slide').html(imgList);

            makeList('event');
            $('.event_slide').html(imgList);

            $('.class_slide, .event_slide').slick({
                arrows: true,
                dots: false,
                infinite: true,
                slidesToShow: 2,
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
                          slidesToShow: 2,
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

            const scrollC = document.querySelector('.scrollC')
            const scrollE = document.querySelector('.scrollE')

            if(localStorage.pageName2 == 'Class Calender'){
                window.scrollTo({
                    left: 0,
                    top:scrollC.offsetTop,
                    behavior: 'smooth'
                });
            }else if(localStorage.pageName2 == 'Event'){
                window.scrollTo({
                    left: 0,
                    top:scrollE.offsetTop,
                    behavior: 'smooth'
                });
            }

            $('main a').on('click', function(e){
                e.preventDefault();
            })        

             // 달력만들기

            var today = new Date(); // 오늘날짜
            var date = new Date(); // today의 date를 세어주는 역할

            console.log(today, date);

            const prev = document.querySelector('.prev')
            const next = document.querySelector('.next')

            function prevCalender(){
                // 이전달만들기
                today = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
                buildCalender();
            };
            prev.addEventListener('click', function(){
                prevCalender();
            })
            
            function nextCalendar(){
                // 다음달 만들기
                today = new Date(today.getFullYear(), today.getMonth()+1, today.getDate());
                buildCalender();
            };
            next.addEventListener('click', function(){
                nextCalendar();
            })

            function buildCalender(){   
                const month = new Date(today.getFullYear(), today.getMonth(), 1); // 이번달 첫날
                const lastDate = new Date(today.getFullYear(), today.getMonth()+1, 0); // 이번달 마지막날
                const calendar = document.querySelector('.calendar'); // 달력 테이블
                const calenderTitle = document.querySelector('.calenderTitle') // 달력 년, 월 표시

                // 이번달 만들기
                calenderTitle.innerHTML = `${today.getFullYear()}년 ${today.getMonth()+1}월`;

                while (calendar.rows.length > 2){
                    calendar.deleteRow(calendar.rows.length-1);
                }

                let row = null, count = 0, cell;
                row = calendar.insertRow();

                for(let i=0; i<month.getDay(); i++){
                    cell = row.insertCell(); // 열을 한칸씩 만들어줌
                    count = count+1 // 열을 옆으로 만들어줌
                }

                for(let i=1; i<=lastDate.getDate(); i++){
                    // 1일부터 마지막일까지 만듬
                    cell = row.insertCell();
                    cell.innerHTML = i;
                    count = count+1;

                    if(count%7 == 1){
                        //일요일 구하기, 색깔변경
                        cell.style = 'color: #f00';
                    }

                    if(count%7 == 0){
                        cell.style = 'color: blue';
                        row = calendar.insertRow(); // 토요일 다음에 셀 추가
                    }
                    
                    a.class.forEach(function(v){
                        if(i == v.date && today.getMonth()+1 == v.month){
                            cell.className = 'cal_point';
                        }
                    })             
                }

            };

            buildCalender();






        },
        error:function(){console.log('실패')}
    })


   

});
