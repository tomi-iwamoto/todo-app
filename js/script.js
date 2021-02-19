const inputField = document.getElementById('activity');
let addButton = document.getElementById('add');
let listContainer = document.getElementById('list-container');


inputField.addEventListener('keyup', function (e) {

    //This indicates that the if the event is by the "enter" key (key 13) then do the following:
    if(e.keyCode == 13) {
    

    //The new created div
    let newActivity = document.createElement('div');
    //Adding the new div to the wrapper that surrounds the input field. 
    listContainer.appendChild(newActivity);

    //STYLE THE NEW DIV
    newActivity.style.backgroundColor = "white";
    newActivity.style.padding = "15px 10px 15px 10px";
    newActivity.style.width = "75%";
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
    newActivity.appendChild(check);
    check.style.display = 'none';

    //circle icon
    let circle = document.createElement('IMG');
    circle.setAttribute('src', '/img/circle.png');
    circle.setAttribute('width', '20');
    circle.setAttribute('height', '20');
    //Attaching the circle icon to the new div
    newActivity.appendChild(circle);


    //create a div wrapper around the input field answer -- which will help to place this element in the center of the newActivity div
    let answerWrap = document.createElement('div');
    newActivity.appendChild(answerWrap);
    answerWrap.style.alignSelf = "flex-start";
    //The new div will contain the answer that's been typed into the input field
    let answer = inputField.value;
    answerWrap.innerText = answer;
    //This clears the input field once it's been submitted.
    inputField.value = ' ';



    //Cross icon
    let cross = document.createElement('IMG');
    cross.setAttribute('src', '/img/cross.png');
    cross.setAttribute('width', '10');
    cross.setAttribute('height', '10');
    //Attaching the cross icon to the new div
    newActivity.appendChild(cross);


    //Add an event listener that will remove the newActivity div when the cross icon is clicked
    cross.addEventListener('click', function () {

        newActivity.style.display = "none";

    })


    //Add an event listener to the circle so that when clicked it will show the check mark and put line through the word
    circle.addEventListener('click', function () {

        circle.style.display = "none";
        check.style.display = "block";
        newActivity.appendChild(check);
        newActivity.appendChild(answerWrap);
        newActivity.appendChild(cross);

        newActivity.style.textDecoration = "line-through";

    })
  

    }
})


