## Project Overview
This project is a fully functional music player built using pure (vanilla) JavaScript. It is designed to be a clean, educational, and modular tool that demonstrates how to manipulate the HTMLAudioElement API. It includes a responsive UI, playlist management, and essential media controls.

## Key Features
- Audio Core: Uses the native Audio() object for high-performance playback.
- Responsive UI: Fully mobile-friendly layout that adapts to various screen sizes.
- Media Controls: Full support for Play, Pause, Skip (Next), and Back (Previous) functionality.
- Visual Feedback: 
  - Progress Bar: Syncs with the current audio time and allows users to seek (click to jump).
  - Volume Control: Simple range slider to adjust audio levels.
  - Metadata: Displays dynamic song titles and artist information from the playlist array.
- Autoplay: Automatically transitions to the next track in the queue once the current track finishes.

## Technical Specifications
This project adheres to modern web standards:

- HTML5: Semantic tags used for accessibility.
- CSS3: Flexbox/Grid for layout, CSS variables for theme management, and transitions for smooth UI animations.
- JavaScript (ES6): Utilizes classList for UI updates, eventListeners for interactivity, and the Audio constructor for playback logic.

 ## Project Structure
- Plaintext

  /music-player
  - index.html          
  - style.css
  - script.js           
  - /assets
      - /music         
      - /covers         

##  How to Setup
Clone the Repo:

Bash
git clone https://github.com/yourusername/music-player.git
Add Your Music:
Place your .mp3 files in the /assets/music folder.

Update the Playlist:
Open script.js and update the songs array:

JavaScript
const songs = [
  { title: "Song Name", artist: "Artist Name", src: "assets/music/song1.mp3" }
];
Launch:
Simply open index.html in any modern browser.

## Future Enhancements
[ ] Shuffle Mode: Randomize the playlist order.

[ ] Repeat/Loop: Allow users to loop a single track or the entire playlist.

[ ] LocalStorage: Remember the last played song and volume level on refresh.
