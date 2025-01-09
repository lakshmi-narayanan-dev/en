// ----------------------------------------------------
setTimeout(function () {
    document.getElementById('preloader').classList.add('hide');
}, 1500);
// ----------------------------------------------------

// ----------------------------------------------------
let w = window.innerWidth;
let h = window.innerHeight;
console.log(w);

window.addEventListener('resize', function () {
    if (Math.abs(window.innerWidth - w) >= 100) {
        w = window.innerWidth;
        console.log(w);

        window.location.reload();
    }
});

// ----------------------------------------------------

// ----------------------------------------------------
const topB = document.querySelector('#top');
const bottomB = document.querySelector('#bottom');

topB.addEventListener("click", function () {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    );
});

bottomB.addEventListener("click", function () {
    window.scrollTo(
        {
            top: document.body.scrollHeight,
            behavior: "smooth"
        }
    );
});
// ----------------------------------------------------

// ----------------------------------------------------

document.querySelectorAll('.course-details-box').forEach(function (parameteraudio){
    parameteraudio.addEventListener('click', function(){
        
        let audioclick = new Audio('./click.mp3');
        audioclick.play();
    });
});



// ----------------------------------------------------