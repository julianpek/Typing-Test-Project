const TEST_WORDS = ["apples", "the", "or", "welcome", "Canada", "zebra", "wave", "kitchen", "snacks", "laptop", "coffee", "purple", "because", "who", "with", "a", "music", "quote", "business", "cola", "come", "went", "dragons", "yes", "jump", "how", "dance", "ox", "Batman", "memes", "yeet", "bananas", "snake", "paper", "too", "new", "orange", "view", "summer", "picture", "out", "ghost", "thanks", "last", "beer", "algorithm", "function", "script", "wood", "bag", "cheetos", "tooth", "refer", "knit", "hero", "gene", "yum", "exercise", "heavy", "pizza", "happy", "eye", "young", "blood", "scary", "nut", "no", "at", "hi", "my"];
// shuffles array of words
const TEST_WORDS_SHUFFLED = TEST_WORDS.sort((a, b) => 0.5 - Math.random());
const TIMER_EL = document.getElementById("countdown");
let countdown = false;
let current_position = 0;
let seconds = 60;

// populates words and places each individual character into a span
function words() {
    let span = document.createElement("span"),
        div = document.getElementById("words-div"),
        letters = TEST_WORDS_SHUFFLED.join(" "),
        split = letters.split("");

    for(let i = 0; i < split.length; i++) {
        div.innerHTML += "<span>" + split[i] + "</span>";
    }

    div.appendChild(span);
    div.firstElementChild.id = "cursor";
}

// refresh page
function refresh() {
    window.location.reload();
}
// timer and stats for type test
function testTimer() {
    setInterval(function() {
        seconds--;

        if(seconds >= 0) {
            id = document.getElementById("countdown");
            id.innerHTML = `${seconds}`;
        } else { 
            let correct = document.querySelectorAll(".correct").length;
            let incorrect = document.querySelectorAll(".incorrect").length; 
            let total = correct + incorrect;
            let results = correct / total * 100;
<<<<<<< Updated upstream
            let accuracy = "Accuracy: " = results.toFixed() + "%";
            let wpmresults = total / 5 - incorrect / seconds;
            let wpm = "WPM: " + wpmresults;
            

            alert(accuracy + wpm);
=======
            let accuracy = "Accuracy: " + results.toFixed() + "%";
            let wpmresults = total / 5 - incorrect / seconds;
            let wpm = "WPM: " + wpmresults.toFixed();
            let testCountdown = document.getElementById("countdown").innerHTML;
            let WORDS_DIV = document.getElementById("words-div");
            
            if(testCountdown === "0") {
               alert(wpm + " " + accuracy);
            }
>>>>>>> Stashed changes
        }
    }, 1000);
    countdown = true;
}    

function startCountdown() {
    if (!countdown) testTimer();
}

// function stats() {
//     let correct = document.querySelectorAll(".correct").length;
//     let incorrect = document.querySelectorAll(".incorrect").length; 
//     let total = correct + incorrect;
//     let results = correct / total * 100;
//     let accuracy = "Accuracy: " + results.toFixed() + "%";
//     let wpmresults = total / 5 - incorrect / seconds;
//     let wpm = "WPM: " + wpmresults.toFixed();
//     let testSeconds = document.getElementById("countdown").innerHTML;
    
//     if(testSeconds === "0") {
//         alert(accuracy + " " + wpm);
//     }
// }

//event listeners
document.addEventListener("keypress", function(e) {
    const WORDS_DIV = document.getElementById("words-div");
    const WORDS_ARRAY = WORDS_DIV.children;

    if(e.key === WORDS_ARRAY[current_position].innerHTML) {
        WORDS_ARRAY[current_position].className = "correct";
        current_position++;
        WORDS_ARRAY[current_position].className = "cursor";
    } else {
        WORDS_ARRAY[current_position].className = "incorrect";
        current_position++;
        WORDS_ARRAY[current_position].className = "cursor";
    }
});

document.onkeydown = startCountdown;