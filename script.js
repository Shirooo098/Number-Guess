// const musicBtn = document.getElementById("muteBtn")
// const bgm = document.getElementById("bgm");

window.addEventListener('load', () => {
    let audioBtn = document.getElementById("btn");

    // const musicBtn = document.createElement("<ion-icon></ion-icon>")
    // musicBtn.name = 'volume-high-outline';
    musicBtn.id = 'muteBtn';
    audioBtn.appendChild(musicBtn)

    function playAudio(){
        if (bgm.paused){
            bgm.play()
        } else {
            bgm.pause();
        }
    }
    
    musicBtn.addEventListener("click", playAudio)
    
})