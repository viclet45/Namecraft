import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import html2canvas from 'html2canvas'; // Import html2canvas library for capturing DOM elements to image


const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nameTag, setNameTag] = useState('');
  const [name, setName] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [selectedColor, setSelectedColor] = useState('#ffffff'); // State to store selected color

  const cardRef = useRef(null); // Reference to the card element for capturing screenshot

  const handleGenerateTag = () => {
    setIsLoading(true);

    // Simulate a loading delay
    setTimeout(() => {
      setNameTag(name);
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed
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

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="form-group">
            <label htmlFor="nameInput">Enter Name:</label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="additionalInfo">Additional Information:</label>
            <textarea
              className="form-control"
              id="additionalInfo"
              rows="3"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Pick Card Color</label>
            <input
              type="color"
              className="color-selector"
              value={selectedColor}
              onChange={(e) => handleColorChange(e.target.value)}
            />
          </div>

          <button
            className="btn btn-sucess mr-2 mt-2"
            onClick={handleGenerateTag}
            disabled={isLoading}
          >
            {isLoading ? 'Generating...' : 'Generate Tag'}
          </button>

          {isLoading && <p className="mt-3">Loading...</p>}

          {nameTag && (
            <div className="card mt-3" ref={cardRef}>
              <div className="card-body card-center" style={{ backgroundColor: selectedColor }}>
                <h2 className="card-title">{nameTag}</h2>
                <p className="card-text text-center">{additionalInfo}</p>
              </div>
            </div>
          )}

          {nameTag && !isLoading && (
            <button
              className="btn btn-success mt-3"
              onClick={handleDownload}
            >
              Download Name Tag
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
