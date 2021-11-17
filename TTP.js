const TEST_WORDS = ["apples", "the", "or", "welcome", "Canada", "zebra", "wave", "kitchen", "snacks", "laptop", "coffee", "purple", "because", "who", "with", "a", "music", "quote", "business", "cola", "come", "went", "dragons", "yes", "jump", "how", "dance", "ox", "Batman", "memes", "yeet", "bananas", "snake", "paper", "too", "new", "orange", "view", "summer", "picture", "out", "ghost", "thanks", "last", "beer", "algorithm", "function", "script", "wood", "bag", "cheetos", "tooth", "refer", "knit", "hero", "gene", "yum", "exercise", "heavy", "pizza", "happy", "eye", "young", "blood", "scary", "nut", "no", "at", "hi", "my"];
// shuffles array of words
const TEST_WORDS_SHUFFLED = TEST_WORDS.sort((a, b) => 0.5 - Math.random());
const TIMER_EL = document.getElementById("countdown");
let seconds = 60;

// displays shuffled words dynamically
function shuffledWords() {
    let prg = document.getElementById("shuff-words");
    prg.innerHTML = TEST_WORDS_SHUFFLED.join(" ");
}
// refreshes page
function refresh() {
    window.location.reload();
}
// timer
function startCountdown() {
        setInterval(function() {
        seconds--;

        if(seconds >= 0) {
            id = document.getElementById("countdown");
            id.innerHTML = `${seconds}`;
//      } else { 
//          add code to display typing stats here
        }
    }, 1000);
}

// event listener
document.onkeydown = startCountdown;