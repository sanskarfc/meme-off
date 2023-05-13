import React, { useState } from 'react';
import './App.css';

function App() {
  const [memeUrl, setMemeUrl] = useState('');

  const handleGetMemeClick = async () => {
    try {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();
      const memes = data.data.memes;
      const randomMeme = memes[Math.floor(Math.random() * memes.length)];
      setMemeUrl(randomMeme.url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Meme Race</h1>
      <h2>Press the button to get a random meme template</h2>
      <button onClick={handleGetMemeClick}>Get a Meme!</button>
      {memeUrl && (
        <div>
          <img src={memeUrl} alt="Meme" />
        </div>
      )}
    </div>
  );
}

export default App;

