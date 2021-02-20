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
        newActivity.style.backgroundColor = "white";
        newActivity.style.padding = "15px 10px 15px 10px";
        newActivity.style.width = "80%";
        newActivity.classList.add('active');
        newActivity.style.borderBottom = "hsl(0, 3%, 87%) solid 1px";
        newActivity.style.display = "flex";
        newActivity.style.justifyContent = "space-between";
        newActivity.style.alignItems = "center";


        //Adding image
        //check icon
        let check = document.createElement('IMG');
        check.setAttribute('src', '/img/check.png');
        check.setAttribute('width', '20');
        check.setAttribute('height', '20');
        newActivity.append(check);
        check.style.display = 'none';


        //circle icon
        //First create a wrapper to surround the new IMG element
        let circleWrap = document.createElement('div');
        //Create the new IMG element that will be the circle icon
        let circle = document.createElement('IMG');
        circle.setAttribute('src', '/img/circle.png');
        circle.setAttribute('width', '20');
        circle.setAttribute('height', '20');
        circle.classList.add('activeCircle');
        //Place within the circleWrap div the IMG icon
        circleWrap.append(circle);
        //Used flexbox in order to position both the circle icon and the answer text towards the left of the new div
        circleWrap.style.display = "flex";
        circleWrap.style.justifyContent = "flex-start";
        circleWrap.style.alignItems = "center";
        //Attaching the circle icon wrapper (circleWrap) -- with the circle incon inside of it, to the new div
        newActivity.append(circleWrap);


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

    


        //Cross icon
        let cross = document.createElement('IMG');
        cross.setAttribute('src', '/img/cross.png');
        cross.setAttribute('width', '10');
        cross.setAttribute('height', '10');
        //Attaching the cross icon to the new div
        newActivity.append(cross);



        let activeClassLength = document.querySelectorAll('.active').length;
        //This tells the counter that the display text will be the number of divs with "active" classes
        counter.innerText = activeClassLength + " items left";


        //Add an event listener that will remove the newActivity div when the cross icon is clicked
        cross.addEventListener('click', function () {

            let activeClassLength = document.querySelectorAll('.active').length;

            newActivity.style.display = "none";
            newActivity.classList.remove = "active";

            if (activeClassLength > 0) {

                activeClassLength = activeClassLength - 1;
                counter.innerText = activeClassLength + " items left";

            }



        })


        //Add an event listener to the circle so that when clicked it will show the check mark and put line through the word
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