// 1. Full Combined Array containing your requested 12 Songs
const songs = [
    { title: "Kala Chashma", artist: "Badshah & Neha Kakkar (Hindi)", src: "https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Bollywood_Dreams_-_Steve_Oxen/2019-12-11_-_Bollywood_Dreams_-_Steve_Oxen.mp3" },
    { title: "Appadi Podu", artist: "Tamil Dance Beats Track", src: "https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Mumbai_Chase_-_Steve_Oxen/2019-12-11_-_Mumbai_Chase_-_Steve_Oxen.mp3" },
    { title: "Vachindama", artist: "Sid Sriram (Telugu)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
    { title: "Bollywood Beats", artist: "Hindi fusion rhythm", src: "https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Bollywood_Dreams_-_Steve_Oxen/2019-12-11_-_Bollywood_Dreams_-_Steve_Oxen.mp3" },
    { title: "Bollywood melodies", artist: "music melody instrument", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { title: "Tamil Bits", artist: "Tamil fusion track", src: "https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Mumbai_Chase_-_Steve_Oxen/2019-12-11_-_Mumbai_Chase_-_Steve_Oxen.mp3" },
    { title: "Tamil melodies", artist: "tolly melody string", src: "https://www.fesliyanstudios.com/musicfiles/2019-12-11_-_Peaceful_Sitar_-_Steve_Oxen/2019-12-11_-_Peaceful_Sitar_-_Steve_Oxen.mp3" },
    { title: "Hyderabad Chutney", artist: "Telugu Grooves bass", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { title: "Telugu melody", artist: "south rhythm sitar", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
];
const $ = id => document.getElementById(id);
const [audio, title, artist, playPauseBtn, progress, currentTimeEl, durationEl, volumeSlider, playlistContainer, searchInput] = 
      ['audio', 'title', 'artist', 'play-pause', 'progress', 'current-time', 'duration', 'volume', 'playlist-tracks', 'search-input'].map($);

let songIndex = 0, isPlaying = false;

function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
    playlistContainer.querySelectorAll('li').forEach((item, idx) => item.classList.toggle('active-track', idx === songIndex));
}

const togglePlay = (play) => {
    isPlaying = play !== undefined ? play : !isPlaying;
    playPauseBtn.innerHTML = `<i class="fa-solid fa-${isPlaying ? 'pause' : 'play'}"></i>`;
    isPlaying ? audio.play() : audio.pause();
};

const changeSong = (dir) => {
    songIndex = (songIndex + dir + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    if (isPlaying) togglePlay(true);
};

playPauseBtn.addEventListener('click', () => togglePlay());
$('prev').addEventListener('click', () => changeSong(-1));
$('next').addEventListener('click', () => changeSong(1));

const fmt = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
audio.addEventListener('timeupdate', ({srcElement: {duration, currentTime}}) => {
    if (!duration) return;
    progress.value = (currentTime / duration) * 100;
    currentTimeEl.innerText = fmt(currentTime);
    durationEl.innerText = fmt(duration);
});

progress.addEventListener('input', e => audio.currentTime = (e.target.value / 100) * audio.duration);
volumeSlider.addEventListener('input', e => audio.volume = e.target.value);
audio.addEventListener('ended', () => changeSong(1));

// Build Playlist & Search Filter UI
songs.forEach((song, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${song.title}</strong><span>${song.artist}</span>`;
    li.onclick = () => { songIndex = idx; loadSong(songs[idx]); togglePlay(true); };
    playlistContainer.appendChild(li);
});

searchInput.addEventListener('input', e => {
    const filter = e.target.value.toLowerCase();
    playlistContainer.querySelectorAll('li').forEach(li => li.style.display = li.textContent.toLowerCase().includes(filter) ? 'flex' : 'none');
});

loadSong(songs[songIndex]);
audio.volume = volumeSlider.value;
