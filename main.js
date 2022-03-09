    //What do I want to do?

        //I want that when the user clicks a button, some things happen:
            //1st, the button appearance changes:
                //The background color changes from white to dark purple
                //The icon color changes from dark purple to light purple
                //The drop shadow of the button changes to a lighter purple
            //2nd, I want the corresponding sound to start playing on a loop.
        
        //When the button gets clicked again, I want this to happen:
            //1st, the button appearance changes:
                //The background color changes from dark purple to white
                //The icon color changes from light purple to dark purple
                //The drop shadow of the button changes to light purple to dark purple
            //2nd, I want the corresponding sound to stop playing.
            
//Variables
    const icon = document.querySelector('.icon') 

function doAudio(number) {
    let audioelm = document.querySelector(`[data-song-order="${number}"]`)
    console.log(audioelm)
    return audioelm
  }

//playSong
function playSong(btn) {
    btn.classList.add('play')
    let number = btn.getAttribute("data-song")
    let audio = doAudio(number)

    audio.play()
}

//pauseSong
function pauseSong(btn) {
    btn.classList.remove('play')
    let number = btn.getAttribute("data-song")
    let audio = doAudio(number)

    audio.pause()
}


//Event Listeners
document.querySelectorAll(".music-btn").forEach((btn)=>{
    let songNumber = btn.getAttribute('data-song')

    btn.addEventListener('click', (e) => {
        let btn = e.target
        const isPlaying = btn.classList.contains('play')

        // doAudio(songNumber)
        if(isPlaying) {
            pauseSong(btn)
        } else {
            playSong(btn)
        }
    })
})

