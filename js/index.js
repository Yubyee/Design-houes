window.addEventListener('DOMContentLoaded', function(){
    
$(".slide").slick({
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
//   autoplay: true,
  autoplaySpeed: 3000
});

const conBg = document.querySelectorAll('.con img');

for(let i=0; i<conBg.length; i++){
  if(i <= 4){    
    let imgSrc = conBg[i].getAttribute('src');
    let start = imgSrc.lastIndexOf('_')+1;
    let end = imgSrc.lastIndexOf('.');
    
    console.log(imgSrc.slice(start,end));

    let str = imgSrc.slice(start,end);
    console.log(str)
    let changeStr = imgSrc.replace(str,ran(str));
    console.log(changeStr)


    function ran(s){
      let num = 0;
      num = `0${[i+1]}`
      if(s == num){
        ran(s)
      }
      return num;
    } 
  } 
}
});
