// 1. Array of song objects
const songs = [
    { title: "Kala Chashma", artist: "Badshah & Neha Kakkar (Hindi)" },
    { title: "Appadi Podu", artist: "Tamil Dance Beats Track" },
    { title: "Vachindama", artist: "Sid Sriram (Telugu)" },
    { title: "Bollywood Beats", artist: "Hindi fusion rhythm" },
    { title: "Bollywood melodies", artist: "music melody instrument" },
    { title: "Tamil Bits", artist: "Tamil fusion track" },
    { title: "Tamil melodies", artist: "tolly melody string" },
    { title: "Hyderabad Chutney", artist: "Telugu Grooves bass" },
    { title: "Telugu melody", artist: "south rhythm sitar" }
];

const $ = id => document.getElementById(id);
const [title, artist, playlistContainer, searchInput, prevBtn, nextBtn] = 
      ['title', 'artist', 'playlist-tracks', 'search-input', 'prev', 'next'].map($);

let songIndex = 0;

function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    
    // Update active UI state
    playlistContainer.querySelectorAll('li').forEach((item, idx) => 
        item.classList.toggle('active-track', idx === songIndex)
    );
}

// Function to handle navigation
// dir is 1 for next, -1 for previous
const changeSong = (dir) => {
    songIndex = (songIndex + dir + songs.length) % songs.length;
    loadSong(songs[songIndex]);
};

// Event listeners
if (prevBtn) prevBtn.addEventListener('click', () => changeSong(-1));
if (nextBtn) nextBtn.addEventListener('click', () => changeSong(1));

// Build Playlist & Search Filter UI
songs.forEach((song, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${song.title}</strong><span>${song.artist}</span>`;
    li.onclick = () => { 
        songIndex = idx; 
        loadSong(songs[idx]); 
    };
    playlistContainer.appendChild(li);
});

searchInput.addEventListener('input', e => {
    const filter = e.target.value.toLowerCase();
    playlistContainer.querySelectorAll('li').forEach(li => 
        li.style.display = li.textContent.toLowerCase().includes(filter) ? 'flex' : 'none'
    );
});

// Initialize
loadSong(songs[songIndex]);