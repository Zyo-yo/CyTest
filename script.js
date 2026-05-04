// Wait until page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn").addEventListener("click", test);
});

function test() {
    var password = document.getElementById("password").value.toLowerCase();
    console.log(password);
    var passworddate = document.getElementById("date");

    // clear old message
    document.getElementById("feedback").innerHTML = "";

    // clear input
    function clearInput() {
        document.getElementById("password").value = "";
        document.getElementById("hint").value = "";
    }

    //focus on input
    function focusInput() {
        document.getElementById("password").focus();
    }
    focusInput();

    if (password === "blue" || password === "navy blue" || password === "navy") {
        document.getElementById("rule").innerHTML = "Question 2!: Who is Cyrus' favourite pokemon? 🤔";
        document.getElementById("questionImage").src = "images/q2.gif";
        clearInput();
        focusInput();
    } else if (password === "ampharos") {
        document.getElementById("rule").innerHTML = "Question 3!:  What is Cyrus' middle name? (Ka SlayLanie's maiden name)🤔";
        document.getElementById("questionImage").src = "images/q3.gif";
        document.getElementById("hint").innerHTML = "Hint: its close to the word \"capcacity\".";
        clearInput();
        focusInput();
    
    } else if (password === "capacete") {
        document.getElementById("rule").innerHTML = "Question 4!:  When is Cyrus' birthday🤔";
        document.getElementById("questionImage").src = "images/q4.gif";
        document.getElementById("hint").innerHTML = "Hint: its close to the word \"capcacity\".";
        passworddate.style.display = "block";
        
        clearInput();
        focusInput();
        password.style.display = "hidden";
    
    } else if (passworddate === "a1earthsun") {
        document.getElementById("rule").innerHTML = "Rule 5. 8 x 8?";
    } else if (password === "a1earthsun64") {
        document.getElementById("rule").innerHTML = "Rule 6. Type in \"daddy\" backwards.";
    } else if (password === "a1earthsun64yddad") {
        document.getElementById("rule").innerHTML = "Rule 7. Type an uppercase \"Z\" in the word zebra.";
    } else if (password === "a1earthsun64yddadZebra") {
        document.getElementById("rule").innerHTML = "Rule 8. Starts with \"United\".";
    } else if (password === "a1earthsun64yddadZebraunitedstates") {
        document.getElementById("rule").innerHTML = "Rule 9. Korean country.";
    } else if (password === "a1earthsun64yddadZebraunitedstatesnorthkorea") {
        document.getElementById("rule").innerHTML = "Rule 10. Add a space at the end.";
    } else if (password === "a1earthsun64yddadZebraunitedstatesnorthkorea ") {
        document.getElementById("rule").innerHTML = "Rule 11. Solo card game.";
    } else if (password === "a1earthsun64yddadZebraunitedstatesnorthkorea solitaire") {
        document.getElementById("rule").innerHTML = "Rule 12. WW2 end year.";
    } else if (password === "a1earthsun64yddadZebraunitedstatesnorthkorea solitaire1945") {
        document.getElementById("rule").innerHTML = "Rule 13. Filipino city.";
    } else if (password === "a1earthsun64yddadZebraunitedstatesnorthkorea solitaire1945manila") {
        document.getElementById("rule").innerHTML = "Rule 14. Brown flavor.";
    } else if (password === "a1earthsun64yddadZebraunitedstatesnorthkorea solitaire1945manilachocolate") {
        alert("🎉 Congratulations, You won the password game!");

        var playagain = confirm("Would you like to play again?");
        if (playagain) {
            location.reload();
        } else {
            alert("Thanks for playing!");
        }      
    }
    else {
        document.getElementById("feedback").innerHTML =
            "<span style='color:red;'>❌ Wrong Answer! Try again.</span>";
            clearInput();
        }

    document.getElementById("number").innerHTML = "Length: " + password.length;
}