const textSpan = document.querySelectorAll('.text1  h2 p ');
const butns = document.querySelectorAll('.buttons');
const medias = document.querySelectorAll('.bulle');



window.addEventListener ('load' , () =>{

        const Time = gsap.time ({paused: true});

        Time
        .staggerForm(textSpan, 1, {top: -50, opacity: 0, ease: "power.out"}, 0.3 )
        .staggerForm(butns, 1, {opacity: 0, ease: "power2.out"}, 0.3)
        .staggerForm(medias, 1, {right:-200, ease: "power2.out"}, 0.3, '-=1')


        Time.play(); 
})