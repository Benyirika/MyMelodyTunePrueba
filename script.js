const STORAGE_KEY = 'melodymia-songs';

const defaultSongs = [
  {
    title: 'Luna en movimiento',
    genre: 'Indie pop',
    bpm: 118,
    duration: '3:34',
    notes: 'Melodía suave con sintetizador y una línea de bajo envolvente.'
  },
  {
    title: 'Ritmo nocturno',
    genre: 'Electro',
    bpm: 128,
    duration: '4:01',
    notes: 'Hook central con batería punchy y un coro brillante para la escena nocturna.'
  }
];

const form = document.getElementById('melody-form');
const melodyList = document.getElementById('melody-list');

function loadSongs() {
  const storageValue = localStorage.getItem(STORAGE_KEY);

  if (!storageValue) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultSongs));
    return defaultSongs;
  }

  try {
    const parsed = JSON.parse(storageValue);
    return Array.isArray(parsed) && parsed.length ? parsed : defaultSongs;
  } catch (error) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultSongs));
    return defaultSongs;
  }
}

function renderSongs() {
  const songs = loadSongs();
  melodyList.innerHTML = '';

  songs.forEach((song) => {
    const item = document.createElement('li');
    item.className = 'melody-item';
    item.innerHTML = `
      <strong>${song.title}</strong>
      <span>${song.genre} · ${song.bpm} BPM · ${song.duration}</span>
      <span>${song.notes}</span>
    `;
    melodyList.appendChild(item);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const songData = {
    title: document.getElementById('songName').value.trim(),
    genre: document.getElementById('genre').value.trim(),
    bpm: Number(document.getElementById('bpm').value),
    duration: document.getElementById('duration').value.trim(),
    notes: document.getElementById('notes').value.trim()
  };

  if (!songData.title || !songData.genre || !songData.duration || !songData.notes) {
    return;
  }

  const songs = loadSongs();
  songs.unshift(songData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(songs));
  form.reset();
  renderSongs();
});

renderSongs();
