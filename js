const audioPlayer = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const currentTimeElem = document.getElementById('current-time');
const durationElem = document.getElementById('duration');
const progressBar = document.getElementById('progress-bar');

const tracks = [
    { title: 'Mirchi', artist: 'Chinna Ponnu', src: 'mirchi.mp3', duration: '1:23' },
    { title: 'Mere Dholna', artist: 'SP Balasubrahmanyam', src: 'mere_dholna.mp3', duration: '3:45' },
];

let currentTrackIndex = 0;

function loadTrack(trackIndex) {
    const track = tracks[trackIndex];
    audioPlayer.src = track.src;
    songTitle.textContent = track.title;
    artistName.textContent = track.artist;
    durationElem.textContent = track.duration;
    progressBar.value = 0;
    audioPlayer.currentTime = 0;
}

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function nextSong() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
}

function prevSong() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
}

function seekSong() {
    const seekTime = audioPlayer.duration * (progressBar.value / 100);
    audioPlayer.currentTime = seekTime;
}

audioPlayer.addEventListener('timeupdate', () => {
    const currentMinutes = Math.floor(audioPlayer.currentTime / 60);
    const currentSeconds = Math.floor(audioPlayer.currentTime % 60).toString().padStart(2, '0');
    currentTimeElem.textContent = ${currentMinutes}:${currentSeconds};
    progressBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
});

// Load the first track initially
loadTrack(currentTrackIndex);
