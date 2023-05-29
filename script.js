
const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const songs = [
    {name: "taniya_1",
title:"Unstoppable",
artist:"Sia",
},
    {
   name: "taniya_2",
    title:"Excuses",
    artist:"Ap Dhillon",
},
{
    name: "taniya_3",
    title:"Tum Tum ",
    artist:"Sri Vardhini, Aditi, Satya Yamini, Roshini & Tejaswini",
},


];


let isPlaying = false;
const playMusic = () => {
isPlaying = true;
music.play();
play.classList.replace("fa-play", "fa-pause");
img.classList.add("anime");

};
//for pause function
const pauseMusic = () => {
isPlaying = false;
music.pause();
play.classList.replace("fa-pause", "fa-play");
img.classList.remove("anime");
};

play.addEventListener("click" , () => {
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
});


//changing the data
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
     music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
    
};

songsIndex = 0;
const nextSong = () =>{
    songsIndex =(songsIndex +1)% songs.length;
    loadSong(songs[songsIndex]);
    playMusic();
};
const prevSong = () => {
    songsIndex =(songsIndex -1 + songs.length)%songs.length;
    loadSong(songs[songsIndex]);
    playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);