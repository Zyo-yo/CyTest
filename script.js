// Wait until page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn").addEventListener("click", test);
});




function test() {
    var qNum = 0;
    console.log(qNum);
    var password = document.getElementById("password").value.toLowerCase();
    console.log(password);
    let selected = document.querySelector('input[name="option"]:checked');
    //var passworddate = document.getElementById("date");

    // clear old message
    document.getElementById("feedback").innerHTML = "";

    // clear input
    function clearInput() {
        document.getElementById("password").value = "";
        document.getElementById("hint").value = "";
    }
    //hides password input
    function hideInputPass(){
        document.getElementById("password").style.display = "none";
    }
    //display password input
    function displayPassword(){
        document.getElementById("password").style.display = "block";
    }

    //unhide multiple choice
    function displayMultiChoice(){
        document.getElementById("multi").style.display = "block";
    }
    //display multiple choice
    function hideMultiChoice(){
        document.getElementById("multi").style.display = "none";
    }

    //multiple choice function photo changer
    function setOptionImage(labelId, imgSrc, altText) {
        const label = document.getElementById(labelId);

        // keep the radio button
        const radio = label.querySelector('input[type="radio"]');

        // clear everything in the label
        label.innerHTML = "";

        // re-add the radio button
        label.appendChild(radio);

        // create and add image
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = altText;
        img.width = 150;

        label.appendChild(img);
    }


        function createDodgeButton(text = "Click me 😈") {
        const btn = document.createElement("button");
        btn.textContent = text;
        btn.id = "dodgeBtn";

        // let CSS handle styling
        btn.style.position = "absolute";
        btn.style.top = "200px";
        btn.style.left = "50%";
        btn.style.transform = "translateX(-50%)";

        document.body.appendChild(btn);

        btn.addEventListener("click", () => {
            moveButtonWithinPhone(btn);
        });
    }

    function moveButtonWithinPhone(btn) {
        // get "phone screen" boundaries (your body)
        const container = document.body;

        const maxX = container.clientWidth - btn.offsetWidth;
        const maxY = container.clientHeight - btn.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        btn.style.left = randomX + "px";
        btn.style.top = randomY + "px";

        // reset transform so positioning works properly
        btn.style.transform = "none";
    }


    //focus on input
    function focusInput() {
        document.getElementById("password").focus();
    }
    focusInput();


        //create button
    function createLinkButton(buttonText, link) {
    // Create button element
    const button = document.createElement("button");
        //set button id
    button.id = "yes";


    // Set button text
    button.textContent = buttonText;

    // Add click event
    button.onclick = function () {
        window.location.href = link;
    };

    // Add button to page
    document.body.appendChild(button);
}



    //questions
    if (password === "human rights museum" || password === "hrm" || password === "the forks") {
        document.getElementById("rule").innerHTML = "Question 2: What movie did we watch when I first held your hand? 🤔";
        document.getElementById("questionImage").src = "images/q2.gif";
        clearInput();
        focusInput();
    } else if (password === "zootopia 2" || password === "zootopia two") {
        document.getElementById("rule").innerHTML = "Question 3: What did we eat before we watched that movie? 🤔";
        document.getElementById("questionImage").src = "images/q3.gif";
        //document.getElementById("hint").innerHTML = "Hint: its close to the word \"capacity\".";
        clearInput();
        focusInput();

    } else if (password === "ramen" || password === "japanese food") {
        document.getElementById("rule").innerHTML = "Question 4: Who did we saw when we were at St Vital for the first time? 🤔";
        document.getElementById("questionImage").src = "images/q4.gif";
        //document.getElementById("hint").innerHTML = "Hint: its close to the word \"capcacity\".";
        //passworddate.style.display = "block";
        clearInput();
        focusInput();
        //password.style.display = "hidden";
    
    } else if (password === "ate denielle") {
        document.getElementById("rule").innerHTML = "Question 5: During our first date, which restaurant did i take you to? 🤔";
        document.getElementById("questionImage").src = "images/q5.gif";
        clearInput();
        focusInput();
        
    } else if (password === "local public eatery" || password === "local") {
        document.getElementById("rule").innerHTML = "Question 6: Who were we hanging out when i first got your phone number? 🤔";
        document.getElementById("questionImage").src = "images/q6.gif";
        clearInput();
        focusInput();
        

    } else if (password === "lady" || password === "lady angeles") {
        document.getElementById("rule").innerHTML = "Question 7: Which sticker is my fav to use? 🤔";
        document.getElementById("questionImage").src = "images/q7.gif";
        clearInput();
        focusInput();
        hideInputPass();
        displayMultiChoice();
        setOptionImage("option1", "images/q7-1.webp", "yer mom")
        setOptionImage("option2", "images/q1.gif", "yer mom")
        setOptionImage("option3", "images/q7-3.gif", "yer mom")
        setOptionImage("option4", "images/q7-4.webp", "yer mom")
        setOptionImage("option5", "images/q7-5.gif", "yer mom")

    } else if (selected && selected.value === "1") {
        document.getElementById("rule").innerHTML = "Question 8: What is the title of the song I first translated for you? 🤔";
        document.getElementById("questionImage").src = "images/q8.gif";
        hideMultiChoice();
        displayPassword();
        clearInput();
        focusInput();

    } else if (password === "naiilang") {
        document.getElementById("rule").innerHTML = "Question 9: What is the name of the JellyCat dog keychain i gave you? 🤔";
        document.getElementById("questionImage").src = "images/peewee.jpg";
        displayPassword();
        clearInput();
        focusInput();

    } else if (password === "peewee" || password === "pee wee") {
        document.getElementById("rule").innerHTML = "Question 10: What was the keychain i got us at the claw machines? 🤔";
        document.getElementById("questionImage").src = "images/q10.gif";
        clearInput();
        focusInput();
        hideInputPass();
        displayMultiChoice();
        setOptionImage("option1", "images/q10-3.avif", "yer mom")
        setOptionImage("option2", "images/q10-2.jpeg", "yer mom")
        setOptionImage("option3", "images/q10-4.jfif", "yer mom")
        setOptionImage("option4", "images/q10-5.jfif", "yer mom")
        setOptionImage("option5", "images/q10-1.jpg", "yer mom")

        
    } else if (selected && selected.value === "5") {
        document.getElementById("rule").innerHTML = "Question 11: Which pokemon did we tried to catch when our friends started to suspect something of us? 🤔";
        document.getElementById("questionImage").src = "images/q11.gif";
        hideMultiChoice();
        displayPassword();
        clearInput();
        focusInput();


    } else if (password === "dondozo") {
        document.getElementById("rule").innerHTML = "Question 12: Where did we come from on our first \"road trip\" together? 🤔";
        document.getElementById("questionImage").src = "images/q12.gif";
        displayPassword();
        clearInput();
        focusInput();

    } else if (password === "neepawa") {
        document.getElementById("rule").innerHTML = "Question 13: Which pokemon did I printed out for you when i asked to court you? 🤔";
        document.getElementById("questionImage").src = "images/q13.gif";
        displayPassword();
        clearInput();
        focusInput();

    } else if (password === "oshawott") {
        document.getElementById("rule").innerHTML = "Question 14: What game did we play for the first time that we ended up staying until 4AM for? 🤔";
        document.getElementById("questionImage").src = "images/q14.gif";
        displayPassword();
        clearInput();
        focusInput();

    }else if (password === "roblox" || password === "barbie dream house") {
        document.getElementById("rule").innerHTML = "Question 15: May I Officially be your Boyfriend?";
        document.getElementById("questionImage").src = "images/q15.gif";
        document.getElementById("btn").style.display = "none";
        createLinkButton("YES","");
        hideInputPass();
        createDodgeButton("NO 😈")
        


    }else {
        document.getElementById("feedback").innerHTML =
            "<span style='color:red;'>❌ Wrong Answer! Try again.</span>";
            clearInput();
        }

    //document.getElementById("number").innerHTML = "Length: " + password.length;
}