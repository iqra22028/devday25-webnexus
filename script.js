let answers = [];
function answer(val) {
    answers.push(val);
    console.log('Answer recorded:', val); 
}

document.getElementById("submit").addEventListener("click", function() {
    getResult();
});

document.getElementById("backBtn").addEventListener("click", function() {
    retakeQuiz();
});

function getResult() {
    if (answers.length < 3) {
        alert("Please answer all the questions 🧐");
        return;
    }

    const count = [0, 0, 0]; 
    answers.forEach((a) => {
        count[a]++; 
    });

    const max = Math.max(...count);
    const vibeIndex = count.indexOf(max);

    const resultDiv = document.getElementById("result");
    let resultText = "";
    let songEmbed = "";

    if (vibeIndex === 0) {
        resultText = "🌿 You're giving major *Cottagecore Energy*! Chill, dreamy, and nature-loving.";
        songEmbed = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWSkMjlBZAZ07?utm_source=generator&autoplay=true" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    } else if (vibeIndex === 1) {
        resultText = "🖤 You're in your *Grunge Vibe* era. Dark, artsy, and a little chaotic.";
        songEmbed = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX11ghcIxjcjE?utm_source=generator&autoplay=true" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    } else {
        resultText = "💅 Slay! You're totally *Y2K Royalty*. Retro, shiny, and selfie-ready.";
        songEmbed = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4o1oenSJRJd?utm_source=generator&autoplay=true" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
    }

    document.getElementById("quiz").style.display = "none";
    resultDiv.innerHTML = `
        <h3>${resultText}</h3>
        <div class="spotify-container">
            ${songEmbed}
        </div>
    `;
    resultDiv.style.display = "block";

    document.getElementById("backBtn").style.display = "block";

    console.log("Result displayed with embed:", songEmbed); 
}

function retakeQuiz() {
    answers = [];

    document.getElementById("result").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    document.getElementById("backBtn").style.display = "none";

    const buttons = document.querySelectorAll(".question button");
    buttons.forEach(button => button.style.backgroundColor = ""); 
}

document.querySelectorAll(".question button").forEach(button => {
    button.addEventListener('click', function(event) {
        const buttons = event.target.closest(".question").querySelectorAll("button");
        buttons.forEach(button => button.style.backgroundColor = "");

        event.target.style.backgroundColor = "lightblue"; 
        const val = event.target.getAttribute('data-value'); 
        answer(val);
    });
});
