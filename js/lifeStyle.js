window.addEventListener('DOMContentLoaded', function(){
    
const lifeTab = document.querySelectorAll('.life_tab ul li');
for(let i=0; i<lifeTab.length; i++){            
    lifeTab[i].addEventListener('click', function(){
        for(let j=0; j<lifeTab.length; j++){
            lifeTab[j].classList.remove('tab_now');
        }
        lifeTab[i].classList.add('tab_now');
        console.log(lifeTab);
    });
}


});