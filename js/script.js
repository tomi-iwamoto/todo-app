const inputField = document.getElementById('activity');
let listContainer = document.getElementById('list-container');
let clear = document.getElementById('clear');
let counter = document.getElementById('counter');



inputField.addEventListener('keyup', function (e) {

    //This indicates that the if the event is by the "enter" key (key 13) then do the following:
    if (e.keyCode == 13) {

        if(inputField.value !== ' ') {

                //CREATE NEW DIV
                let newActivity = document.createElement('div');
                //Adding the new div to the wrapper that surrounds the input field. 
                listContainer.append(newActivity);
                //Style the new div
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
                circle.classList.add('show');
                //Placing IMG element inside the circle wrap div
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

                        // //Add an event listener that will remove individual newActivity div when the cross icon is clicked
                        // cross.addEventListener('click', function (e) {

                        //     console.log(e);

                        //     newActivity.style.display = "none";
                        //     newActivity.classList.remove = "active";

                            

                        // })

        
                //SETTING UP THE COUNTER
                //Getting at all the new created divs which have the added class of "active"
                let newDiv = document.querySelectorAll('.active');
                //Getting the array from the newDiv nodelist
                let newDivArray = Array.from(newDiv);
                //GETTING THE INNER TEXT OF THE COUNTER
                let activeClassLength = newDivArray.length;
                //This tells the counter that the display text will be the number of divs with "active" classes
                counter.innerText = activeClassLength + " items left";


                        //Add an event listener that will remove individual newActivity div when the cross icon is clicked
                        cross.addEventListener('click', function (e) {

                            newActivity.classList.remove = "active";
                            // newActivity.style.display = "none";

                            listContainer.removeChild(newActivity);

                            //The newDivArray.length - gives me the number of the index of the element that I click on. Not the total length, or number of elements in the array.
                            alert(newDivArray.length);

                            
                        })




                        //ADDING EVENT LISTENER TO THE CIRCLE ICON
                        //This event listener will take away the circle icon and replace it with the check mark icon
                        //This will also put a strike through line to over the word to indicate a finished activity
                        circle.addEventListener('click', function (e) {

                            circle.style.display = "none";
                            check.style.display = "block";
                            
                            circleWrap.append(check);
                            circleWrap.append(answerWrap);
                            answerWrap.classList.toggle('strike');

                            //Create an event listener to the words "clear completed" in the counter section so that only the activities that have been completed will be removed
                            clear.addEventListener('click', function () {

                                //If the check mark is display:block
                                if (answerWrap.className == "strike") {

                                    //Then remove the newActivity div
                                    newActivity.style.display = "none";

                                } 

                            })

                        });


                //ADDING EVENT LISTENER TO THE CHECK MARK ICON
                //This event listener will remove the check icon and replace it with the circle icon
                //This will also toggle the strike through style on the activity word. 
                check.addEventListener('click', function (e) {

                    check.style.display = "none";
                    circle.style.display = "block";
                    answerWrap.classList.toggle('strike');

                });



        }
    }
})





//This tells the counter that the display text will be the number of divs with "active" classes
// counter.innerText = newDiv.length + " items left";
                