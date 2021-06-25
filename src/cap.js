import React, { Component, useState } from 'react';
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;
const videoConstraints = {
  width: 275,
  height: 250,
  facingMode: "user"
};


export const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [image,setImage]=useState('');
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc)
    }
  );

  return (
    <>
    <div className="photo-container">
      <br></br>
      {image==''?<Webcam
      mirrored={true}
      audio={false}
      height={250}
      width={275}
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      videoConstraints={videoConstraints}
      />:<img src={image}/>}
      <p className="photo-ex">2021.10.13<br/>내 이름은 구현정, 오늘 생일이지</p>
    </div>
    <div>
      {image!=''?
      <button onClick={(e) => {
        e.preventDefault();
        setImage('')
      }}
      className="webcam-btn">
      📸</button>
      : <button onClick={(e)=>{
          e.preventDefault();
          capture();
        }}
      className="webcam-btn">📸</button>
      }
    </div>
    </>
  );
};

