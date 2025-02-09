import React from 'react';

function ImageReact() {
  return (
    <div className="container">
      <div className="header">
        <div className="st-logo">
          <p>st.</p>
          <p>Student Tribe</p>
        </div>
        <div className="imfs-logo">
          <img src="https://i.imgur.com/45M0L6E.png" alt="IMFS Logo" />
        </div>
      </div>
      <div className="content">
        <div className="title">
          <img src="https://i.imgur.com/W2nXhY0.png" alt="St. Got" />
          <p>NELLORE</p>
          <p>Get Ready</p>
        </div>
        <div className="audition-details">
          <p>NEXT AUDITION HAPPENING AT</p>
          <p>Rao's Degree College</p>
          <p>23th December</p>
        </div>
        <div className="win-chance">
          <p>This is your chance to win</p>
          <div className="amount">
            <p>₹ 2,00,000</p>
          </div>
          <p>Worth Cash Prizes + Celebrity Status</p>
        </div>
        <div className="register">
          <p>REGISTER NOW</p>
          <img src="https://i.imgur.com/1qQ64eL.png" alt="QR Code" />
        </div>
        <div className="categories">
          <p>Singing . Group Performance . Instrumental Music . Puzzle Solving . Painting</p>
          <p>Acting/Mimicry Poetry/Shayari . Martial Arts . Beatboxing . Dance Stand-up Comedy . Magic</p>
        </div>
        <div className="contact">
          <p>Lalu Naik- 6305340294</p>
          <p>Paul- 6300075830</p>
        </div>
      </div>
    </div>
  );
}

export default ImageReact;