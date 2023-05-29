import React, { useState, useEffect } from 'react'

const Meme = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {

    // fetch("https://api.imgflip.com/get_memes")
    //   .then(res => res.json())
    //   .then(data => setAllMemes(data.data.memes))

    const getMemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes()

  }, [])


  const getRandomImg = () => {
    const idx = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[idx].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImg: url
    }));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main className='container'>
      <div className='form-box'>
        <div className="input">
          <input
            type="text"
            placeholder='Top text'
            name='topText'
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder='Bottom text'
            name='bottomText'
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button
          className='btn'
          onClick={getRandomImg}
        >
          Get a new meme image
        </button>
      </div>
      <div className="img-container">
        <img src={meme.randomImg} alt="meme-img" className='meme--img' />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme
