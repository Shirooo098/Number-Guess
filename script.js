const bgm = document.getElementById("bgm");
const mute = document.getElementById("muteBtn");

function playAudio(){
    if (bgm.paused){
        bgm.play();
        muteBtn.src = 'assets/audio.png';
    } else {
        bgm.pause();
        muteBtn.src = 'assets/mute.png';
    }
}

muteBtn.addEventListener('click', playAudio);
