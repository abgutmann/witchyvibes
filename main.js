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
    const rainBtn = document.querySelector('#rain')
    const fireplaceBtn = document.querySelector('#fireplace')
    const cauldronBtn = document.querySelector('#cauldron')
    const mortarBtn = document.querySelector('#mortar')
    const bgmBtn = document.querySelector('#bgm')
    const musicContainer = document.querySelector('.music-btn')
    const icon = document.querySelector('.icon') 

//Song Titles
const songs = ['99sounds-rain-modified', 'zapsplat-fire', 'zapsplat-cauldron-modified', 'zapsplat-mortar-modified', 'purrple-cat-green-tea']

// //Song Index
// let songIndex = 0

// //Initially load song info into DOM
// loadSong(songs[songIndex])

//loadSong Function
function loadSong(song) {
    audio.src = `assets/${song}.mp3`
}

//playSong
function playSong() {
    musicContainer.classList.add('play')

    audio.play()
}

//pauseSong
function pauseSong() {
    musicContainer.classList.remove('play')

    audio.pause()
}


//Event Listeners
rainBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play', loadSong(songs[0]))

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

fireplaceBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play', loadSong(songs[1]))

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

cauldronBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play', loadSong(songs[2]))

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

mortarBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play', loadSong(songs[3]))

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

bgmBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play', loadSong(songs[4]))

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})