alert('connected');

var logOpen = document.querySelector('#plus');
var highlights = document.querySelector('.hiddenHighlights');



logOpen.addEventListener('click', function(){
    //at the start log will be closed

        //when page loads display changelog icon

        if (logOpen.classList.contains('fa-plus')) {
            //check if
            logOpen.classList.remove('fa-plus');
            logOpen.classList.add('fa-minus');
            // highlights.classList.remove('.hiddenHighlights');
        } else {
            //the minus sign is showing
            logOpen.classList.remove('fa-minus');
            logOpen.classList.add('fa-plus');
        }
});

function toggleLog(){
    //select the plus sign
    var logOpen = document.querySelector("#plus");
    // when page loads display changelog icon
    if(logOpen.classList.contains('fa-plus')){
        // check if it has the changelog icon plus
        logOpen.classList.remove("fa-plus");
        logOpen.classList.add("fa-minus");
    } else {
 //the minus sign is showing
 logOpen.classList.remove("fa-minus");
 logOpen.classList.add("fa-plus")
    }

}

function toggleText(){
    // when plus sign is clicked show this text
    //select the plus sign
    var logClosed = document.querySelector('#plus');
    //select the text divider
    var show = document.querySelector('#showText');
    //now toggle the text
    if(logOpen.classList.contains('fa-minus')){
    //text should be visible
    show.style.display = "block";
    p.innerHtml = "Hello World";
    } else {
        //text should be hidden
        show.style.display = "none";
        p.innerHtml = "Hello World";
    }
}

//if log open does not === the class of fa-plus 
// then display your respective text