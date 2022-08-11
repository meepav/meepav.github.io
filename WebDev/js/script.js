var x = document.getElementById("links");
function myFunction(){
    if(x.style.display === "block" || x.style.display === "flex"){
        x.style.display = "none";
    }
    else{
        menu();
    }
}

var desktopsize = window.matchMedia("(min-width):540px")
desktopsize.addEventListener("change", function(){
    menu();
    //console.log("dsjknfskdjnf");
})

function menu(){
    //console.log("hello");
    if (desktopsize.matches) 
    {
        x.style.display = "flex";
    }
    else{
        x.style.display = "block";
    }
}

// button press to change steps
var button = document.querySelector(".button");
var stepText = document.querySelector(".steps");
var ans = document.querySelector("#photo"); // change of photos
var stepNum = 1;
// console.log(button);
button.addEventListener('click', function()
{
    //console.log(ans);
    if (stepNum == 1)
    {
        stepNum = 2;
        stepText.innerHTML = "<h2><u>Step 2: Pour your Drizzle</u></h2>";
        ans.src = "../images/step2.png";
    }
    else if (stepNum == 2)
    {
        stepNum = 3;
        stepText.innerHTML = "<h2><u>Step 3: Add Granola</u></h2>";
        ans.src = "../images/nutbutter.jpg";
    }
    else if (stepNum == 3)
    {
        stepNum = 4;
        stepText.innerHTML = "<h2><u>Step 4: Add fruits of your choice</u></h2>";
        ans.src = "../images/granola.jpg";
    }
    else if (stepNum == 4)
    {
        stepNum = 5;
        stepText.innerHTML = "<h2><u>Step 5: Add toppings of your choice</u></h2>";
        ans.src = "../images/step4.png";
    }
    else if (stepNum == 5)
    {
        stepNum = 6;
        stepText.innerHTML = "<h2><u>Congratulations!!</u></h2>";
        ans.src = "../images/finish.jpg";
    }
})

