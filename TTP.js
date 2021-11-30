const TEST_WORDS = ["apples", "the", "or", "welcome", "Canada", "zebra", "wave", "kitchen", "snacks", "laptop", "coffee", "purple", "because", "who", "with", "a", "music", "quote", "business", "cola", "come", "went", "dragons", "yes", "jump", "how", "dance", "ox", "Batman", "memes", "yeet", "bananas", "snake", "paper", "too", "new", "orange", "view", "summer", "picture", "out", "ghost", "thanks", "last", "beer", "algorithm", "function", "script", "wood", "bag", "cheetos", "tooth", "refer", "knit", "hero", "gene", "yum", "exercise", "heavy", "pizza", "happy", "eye", "young", "blood", "scary", "nut", "no", "at", "hi", "my"];
// shuffles array of words
const TEST_WORDS_SHUFFLED = TEST_WORDS.sort((a, b) => 0.5 - Math.random());
let countdown = false;
let current_position = 0;
let seconds = 30;

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

//calculates stats, hides content-container, and displays stats-container once timer expires
function stats() {
    let correct = document.querySelectorAll(".correct").length;
    let incorrect = document.querySelectorAll(".incorrect").length; 
    let total = correct + incorrect;
    let accuracyResults = correct / total * 100;
    let accuracy = "Accuracy: " + accuracyResults.toFixed() + "%";
    let grossWpmResults = (total / 5) - incorrect;
    let netWpmResults = grossWpmResults / 0.50;
    let wpm = "WPM: " + netWpmResults.toFixed();
    let wpmEl = document.getElementById("wpm");
    let accuracyEl = document.getElementById("accuracy");
    let timer = document.getElementById("countdown");
    let timerCon = timer.innerText;
    let wordsCon = document.getElementById("contents-container");
    let statsCon = document.getElementById("stats-container");


    if(timerCon === "0") {
        wpmEl.innerText = wpm;
        accuracyEl.innerText = accuracy; 

        wordsCon.style.visibility = "hidden";
        statsCon.style.visibility = "visible";
    }
}

// refresh page
function refresh() {
    window.location.reload();
}

// timer and stats for type test
function testTimer() {
    let time = seconds;
    let testTimer = setInterval(function() {
            time--;

            if(time >= 0) {
                id = document.getElementById("countdown");
                id.innerHTML = `${time}`;
            } else {
                stats();
                clearInterval(testTimer);
            }
        }, 1000);
    countdown = true;
}    

function startCountdown() {
    if (!countdown) testTimer();
}

//event listeners
document.addEventListener("keypress", function(e) {
    const WORDS_DIV = document.getElementById("words-div");
    const WORDS_ARRAY = WORDS_DIV.children;

    if(e.key === WORDS_ARRAY[current_position].innerHTML) {
        WORDS_ARRAY[current_position].className = "correct";
        current_position++;
        WORDS_ARRAY[current_position].className = "cursor";
    } else if (e.key === "Backspace" || e.key === "Delete") { 
        WORDS_ARRAY[current_position].className = "";
        current_position--;
        WORDS_ARRAY[current_position].className = "cursor";
//Ask Dale how to stop decrementation beyond index 0
    } else {
        WORDS_ARRAY[current_position].className = "incorrect";
        current_position++;
        WORDS_ARRAY[current_position].className = "cursor";
    }
});

document.onkeydown = startCountdown;