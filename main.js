let slider = document.querySelector('.slider_testimony');
let sliderInd =document.querySelectorAll('.slider_test');
let contador = 1;
let tamañoWith = sliderInd[0].clientWidth;
let intervalo = 3000;

window.addEventListener('resize',function(){
    tamañoWith = sliderInd[0].clientWidth;
})

setInterval(function tiempo(){
    slides();
}, intervalo);

function slides(){
    slider.style.transform = 'translate('+(- tamañoWith * contador) + 'px)';
    slider.style.transition = 'transform 1s';
    contador ++;
    if(contador === sliderInd.length){
        contador = 0;
        setTimeout(function(){
            slider.style.transform = 'translate (0 px)';
            slider.style.transition = 'transform 0s';
        },intervalo)
    }
}

(function(){
    const titileQuestions = [...document.querySelectorAll('.questions_title')];
    console.log(titileQuestions)

    titileQuestions.forEach(question=>{
        question.addEventListener('click',()=>{
            let heigt =0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('quesions_padding--add');

            question.children [0].classList.toggle('questions_arrow--rotate');

            if(answer.clientHeight===0){
                heigt = answer.scrollHeight;
            }

            answer.style.height = `${heigt}px`;
        });
    });
})();