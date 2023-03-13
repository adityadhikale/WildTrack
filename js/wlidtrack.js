console.log("Welcome to WildTrack");

// list of songs name , file path and poster
let songs = [
    {songName :'Yellow', filePath : 'songs/1.mp3', coverPath : 'https://i.scdn.co/image/ab67616d0000b2733d92b2ad5af9fbc8637425f0' ,artist: 'Coldplay' },
    {songName :'Photograph', filePath : 'songs/2.mp3', coverPath : 'https://i.scdn.co/image/ab67616d00001e02407981084d79d283e24d428e' ,artist:'Ed Sheeran'},
    {songName :'Night Changes', filePath : 'songs/3.mp3', coverPath : 'https://i.scdn.co/image/ab67616d0000b273d304ba2d71de306812eebaf4', artist:'One Direction'},
    {songName :'Something Just Like This', filePath : 'songs/4.mp3', coverPath : 'https://i.scdn.co/image/ab67616d0000b273198a167382d64e10284be9ec',artist:'Coldplay and The Chainsmokers' },
    {songName :'Memories', filePath : 'songs/5.mp3', coverPath : 'https://i.scdn.co/image/ab67616d0000b273c1fda32d73010571ddfc1f7e' },
    {songName :'You Are The Reason', filePath : 'songs/6.mp3', coverPath : 'https://i.scdn.co/image/ab67616d0000b273f2d671c22b70e01b78a618a8',artist:'Maroon 5' }
]

//initilizing the variables
let play_btn = document.getElementById("play_btn");
var play_img = document.getElementById("play_img")
let progressbar = document.getElementById("progressbar");
let audioElement = new Audio('songs/1.mp3');
var current_name = document.getElementById("current_name");
var current_artist = document.getElementById("current_artist");
var current_poster = document.getElementById("current_poster");
let songIndex = 0;

//handel play/pause cilck
if (play_btn) {
    play_btn.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            play_img.src='icons/pause.png'
        }
        else {
            play_img.src = "icons/play.png";
            audioElement.pause();
        }
    })
}

// Handling Time of song
audioElement.addEventListener('timeupdate' , ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;
});

// Changing progressbar according to song
progressbar.addEventListener('change',()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
});

// Handling next song 
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    current_name.innerHTML = songs[songIndex].songName;
    current_artist.innerHTML = songs[songIndex].artist;
    current_poster.src = songs[songIndex].coverPath;
    audioElement.play();
    console.log(audioElement.src);
    console.log(current_name.textContent);
    console.log(current_poster.src);

});

// Handling previous song
document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    current_name.innerHTML = songs[songIndex].songName;
    current_artist.innerHTML = songs[songIndex].artist;
    current_poster.src = songs[songIndex].coverPath;
    audioElement.play();
    console.log(audioElement.src);
    console.log(current_name.textContent);
    console.log(current_poster.src);
});