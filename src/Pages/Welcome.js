import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Welcome = () => {
  return (
    <div className="background-image">
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./pics/background4.jpg" className="d-block w-100 carousel-image" alt="Craft" />
                </div>
                <div className="carousel-item">
                  <img src="./pics/background5.jpg" className="d-block w-100 carousel-image" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                  <img src="/pics/sample1.jpeg" className="d-block w-100 carousel-image" alt="Slide 3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 d-flex flex-column justify-content-start align-items-start">
            <h1>Why Use Namecraft</h1>
            <p>Make stunning designs with PicMonkey's name tag maker. You'll be amazed at what you can create—no design skills required.</p>
            <Link to="/home" className="btn btn-primary mt-2">Click To Generate</Link>
          </div>
          <div className="col-md-6 d-flex justify-content-between mb-footer-space">
            <div className="card mr-3">
              <img src="./pics/craft.png" className="card-img-top" alt="Craft" />
            </div>
            <div className="card ml-3">
              <img src="./pics/background5.jpg" className="card-img-top" alt="Craft" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
