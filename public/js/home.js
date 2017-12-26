alert('connected');

var logOpen = document.querySelector('#plus');
var highlights = document.querySelector('.hiddenHighlights');
var highlights2 = document.querySelector(".hiddenHeader");
var logOpen2 = document.querySelector("#plus2");
var hiddenReleases = document.querySelector(".hiddenReleases");
var logOpen3 = document.querySelector("#plus3");
var speakerBio = document.querySelector('.speakerBio')



logOpen.addEventListener('click', function(){
    //at the start log will be closed

        //when page loads display changelog icon

        if (logOpen.classList.contains('fa-plus')) {
            //check if
            logOpen.classList.remove('fa-plus');
            logOpen.classList.add('fa-minus');
            highlights.classList.remove('hiddenHighlights');
            highlights2.classList.remove("hiddenHeader");
        } else {
            //the minus sign is showing
            logOpen.classList.remove('fa-minus');
            logOpen.classList.add('fa-plus');
            highlights.classList.add('hiddenHighlights');
            highlights2.classList.add('hiddenHeader');
        }
});

logOpen2.addEventListener('click', function(){
    if (logOpen2.classList.contains('fa-plus')){

        logOpen2.classList.remove('fa-plus');
        logOpen.classList.add('fa-minus');
        hiddenReleases.classList.remove('hiddenReleases');
    } else {
        logOpen2.classList.remove('fa-minus');
        logOpen2.classList.add('fa-plus');
        hiddenReleases.classList.add('hiddenReleases');
        
    }
});

logOpen3.addEventListener('click', function(){

if(logOpen3.classList.contains('fa-plus')){

    logOpen3.classList.remove('fa-plus');
    logOpen3.classList.add('fa-minus');
    speakerBio.classList.remove("speakerBio");
} else {
    logOpen3.classList.remove('fa-minus');
    logOpen3.classList.add('fa-plus');
    speakerBio.classList.add('speakerBio');
    
}
});