const inputField = document.getElementById('activity');
let listContainer = document.getElementById('list-container');
let clear = document.getElementById('clear');
let counter = document.getElementById('counter');
//Getting at all the new created divs which have the added class of "active"
let newDiv = document.querySelectorAll('.active');
let activeClassLength = document.querySelectorAll('.active').length;


inputField.addEventListener('keyup', function (e) {

    //This indicates that the if the event is by the "enter" key (key 13) then do the following:
    if (e.keyCode == 13) {

        if(inputField.value !== ' ') {
            
        //Create a new div
        let newActivity = document.createElement('div');
        //Adding the new div to the wrapper that surrounds the input field. 
        listContainer.append(newActivity);


        //STYLE THE NEW DIV
        newActivity.classList.add('new-div-style');
        newActivity.classList.add('active');
      

        //ADDING CHECK ICON
        //First create the image element
        let check = document.createElement('IMG');
        check.setAttribute('src', 'img/check.png');
        //Add the new check icon image to the new appended div
        newActivity.append(check);
        check.classList.add('icon');
        check.style.display = 'none';


        //ADDING CIRCLE ICON
        //First create a wrapper to surround the new IMG element which is the circle icon
        let circleWrap = document.createElement('div');
        //Create the new IMG element which will be the circle icon
        let circle = document.createElement('IMG');
        //The source of the img will be img/circle.png
        circle.setAttribute('src', 'img/circle.png');
        circle.classList.add('icon');
        circle.classList.add('activeCircle');
        //Place within the circleWrap div the IMG icon
        circleWrap.append(circle);
        //Used flexbox in order to position both the circle icon and the answer text towards the left of the new div
        circleWrap.classList.add('circle-icon-wrapper');
        //Attaching the circle icon wrapper (circleWrap) -- which has the circle icon inside of it, to the new div
        newActivity.append(circleWrap);

        
        //GETTING THE VALUE OF THE INPUT FIELD
        //create a div wrapper around the input field answer -- which will help to place this element in the circle image wrapper
        //Placing this element in this order of this event listener function so that the answer text will come after (to the right of) the circle icon in the div
        let answerWrap = document.createElement('div');
        answerWrap.style.marginLeft = "10px";
        circleWrap.append(answerWrap);
        //The new div will contain the answer that's been typed into the input field
        let answer = inputField.value;
        //The answerWrap will contain the answer from the input field
        answerWrap.innerText = answer;
        //This clears the input field once it's been submitted.
        inputField.value = ' ';



        //ADDING CROSS ICON
        let cross = document.createElement('IMG');
        cross.setAttribute('src', 'img/cross.png');
        cross.classList.add('cross-icon');
        //Attaching the cross icon to the new div
        newActivity.append(cross);



        let activeClassLength = document.querySelectorAll('.active').length;
        //This tells the counter that the display text will be the number of divs with "active" classes
        counter.innerText = activeClassLength + " items left";


        //Add an event listener that will remove individual newActivity div when the cross icon is clicked
        cross.addEventListener('click', function () {

            newActivity.style.display = "none";
            newActivity.classList.remove = "active";

        })


        //Add an event listener to the circle so that when clicked it will show the check mark and put a line through the word
        circle.addEventListener('click', function () {
            

            circle.style.display = "none";
            check.style.display = "block";

            circleWrap.append(check);
            circleWrap.append(answerWrap);
            newActivity.style.textDecoration = "line-through";


            //Create an event listener to the words "clear completed" in the counter section so that only the activities that have been completed will be removed
            clear.addEventListener('click', function () {

                //If the check mark is display:block
                if (check.style.display = "block") {

                    //Then remove the newActivity div
                    newActivity.style.display = "none";

                }

            })

        })


        }


    }
})