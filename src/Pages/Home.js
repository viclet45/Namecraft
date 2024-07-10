import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import html2canvas from 'html2canvas';

const cardTemplates = [
  { id: 1, className: 'card-template-1',  },
  { id: 2, className: 'card-template-2',  },
  { id: 3, className: 'card-template-3',  },
  { id: 4, className: 'card-template-4',  },
  { id: 5, className: 'card-template-5',  },
  { id: 6, className: 'card-template-6',  },
  { id: 7, className: 'card-template-7',  },
  { id: 8, className: 'card-template-8',  },
  { id: 9, className: 'card-template-9',  },
];

const fontStyles = [
  { id: 1, name: 'Great Vibes, cursive' },
  { id: 2, name: 'Roboto, sans-serif' },
  { id: 3, name: 'Lobster, cursive' },
  { id: 4, name: 'Montserrat, sans-serif' },
  { id: 5, name: 'Sacramento, cursive' },
  { id: 6, name: 'Open Sans, sans-serif' },
  { id: 7, name: 'Playfair Display, serif' },
  { id: 8, name: 'Pacifico, cursive' },
  { id: 9, name: 'Bebas Neue, sans-serif' },
  { id: 10, name: 'Amatic SC, cursive' },
  { id: 11, name: 'Cinzel, serif' },
  { id: 12, name: 'Merriweather, serif' },
  { id: 13, name: 'Dancing Script, cursive' },
  { id: 14, name: 'Raleway, sans-serif' },
  { id: 15, name: 'Alegreya, serif' },
  { id: 16, name: 'Garamond, serif' },
  { id: 17, name: 'Cormorant Garamond, serif' },
  { id: 18, name: 'Abril Fatface, cursive' },
  { id: 19, name: 'Montserrat Alternates, sans-serif' },
  { id: 20, name: 'Quicksand, sans-serif' },
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nameTag, setNameTag] = useState('');
  const [name, setName] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [selectedCard, setSelectedCard] = useState(cardTemplates[0]);
  const [selectedFontStyle, setSelectedFontStyle] = useState(fontStyles[0].name);
  const [fontSize, setFontSize] = useState(32); // Default font size

  const cardRef = useRef(null);

  const handleGenerateTag = () => {
    setIsLoading(true);
    setTimeout(() => {
      setNameTag(name);
      setIsLoading(false);
    }, 2000);
  };

  const handleDownload = () => {
    html2canvas(cardRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'name_tag.png';
      link.click();
    });
  };

  const handleCardSelection = (card) => {
    setSelectedCard(card);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleFontStyleChange = (fontStyle) => {
    setSelectedFontStyle(fontStyle);
  };

  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 1);
  };

  const decreaseFontSize = () => {
    setFontSize(prevSize => (prevSize > 1 ? prevSize - 1 : prevSize));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 card-template-column">
          <div className="form-group">
            <label>Select Card Template</label>
            <div className="d-flex flex-wrap">
              {cardTemplates.map(card => (
                <div
                  key={card.id}
                  className={`card m-2 ${selectedCard.id === card.id ? 'border-primary' : ''}`}
                  style={{ width: '150px', height: '100px', cursor: 'pointer' }}
                  onClick={() => handleCardSelection(card)}
                >
                  <div className={`card-body d-flex justify-content-center align-items-center ${card.className}`}>
                    <p className="card-text">{card.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="form-name">
            <label htmlFor="nameInput">Name</label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ maxWidth: '300px' }}
            />
          </div>

          <div className="add-info">
            <label htmlFor="additionalInfo">Additional Information</label>
            <textarea
              className="form-control"
              id="additionalInfo"
              rows="3"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              style={{ maxWidth: '300px' }}
            />
          </div>

          <div className="Pick-color">
            <label>Pick Card Color</label>
            <input
              type="color"
              className="color-selector"
              value={selectedColor}
              onChange={(e) => handleColorChange(e.target.value)}
            />
          </div>

          <div className="font-Style mt-2">
            <label>Select Font Style</label>
            <select
              className="form-control"
              value={selectedFontStyle}
              onChange={(e) => handleFontStyleChange(e.target.value)}
              style={{ maxWidth: '300px' }}
            >
              {fontStyles.map(font => (
                <option key={font.id} value={font.name}>{font.name}</option>
              ))}
            </select>
          </div>

          <div className="font-Size mt-2">
            <label>Adjust Font Size</label>
            <div className="d-flex align-items-center plus-button" >
              <button className=" Minusbutton btn btn-secondary mr-2" onClick={decreaseFontSize}>-</button>
              <span>{fontSize}px</span>
              <button className=" Plusbutton btn btn-secondary ml-2" onClick={increaseFontSize}>+</button>
            </div>
          </div>

          <button
            className="btn btn-danger mr-2 mt-2"
            onClick={handleGenerateTag}
            disabled={isLoading}
          >
            {isLoading ? 'Generating...' : 'Generate Tag'}
          </button>

          {isLoading && <p className="mt-3">Loading...</p>}

          {nameTag && (
          <div className="card-container mt-3" ref={cardRef}>
            <div className={`cardbody p-3 ${selectedCard.className}`} style={{ backgroundColor: selectedColor, marginBottom: '10px', fontFamily: selectedFontStyle }}>
              <h2 className="card-title" style={{ fontSize: `${fontSize}px` }}>{nameTag}</h2>
              <p className="card-text" style={{ fontSize: `${fontSize}px` }}>{additionalInfo}</p>
            </div>
          </div>
          )}

          {nameTag && !isLoading && (
            <button
              className="btn btn-success mt-2"
              onClick={handleDownload}
            >
              Download
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
