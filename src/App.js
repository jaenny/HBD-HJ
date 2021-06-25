// eslint-disable-next-line
import React, { useState } from 'react';
import './App.css';
import Webcam from "react-webcam";
import { WebcamCapture } from './cap';
import ourpic from './img/hjjy.png';
import giftbox from './img/gift.png';
import giftbox_open from './img/gift-box.png';


function App() {
  const [isImgClick, setImgClick] = useState([false,false,false]);
  
  let [isPresentNum, setPresentNum] = useState(0);
  let [isPresent, setPresent] = useState(["어떤 선물일까요?","집", "차", "재연이의 사랑"]);
  let [isReason, setReason] = useState([
    "기대 해도 좋다!",
    "아이는 그렇게 오랜 시간 겨우 내가 되려고 아팠던 걸까 쌓이는 하루만큼 더 멀어져 우리는 화해할 수 없을 것 같아",
    "끝없이 길었던 짙고 어두운 밤 사이로 조용히 사라진 네 소원을 알아 오래 기다릴게 반드시 너를 찾을게",
    "기다려 기어이 우리가 만나면 시간의 테두리 바깥에서 과거를 밟지 않고 선다면 숨이 차게 춤을 추겠어"
  ]);

  return (
    <div className="App">
      <div className="total-container">

        {/* 상단바 */}
        <nav className="navbar fixed-top navbar-expand-lg navbar-light navbar-color">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">HBD</a>
            <a className="nav-link active" aria-current="page" href="#gift">GIFT</a>
            <a className="nav-link" href="#photo">PHOTO</a>
            <a className="nav-link" href="#song">SONG</a>
          </div>
        </nav>

        {/* 우리 이미지 */}
        <div className="ourpic-container">
          <div className="temp">
            <div>
              <img className="ourpic-img" src={ ourpic }/>
            </div>
            <p className="hbdhj">Happy Birthday HyeonJung!</p>
          </div>
        </div>

        {/* GIFT */}
        <div className="gift menu" id="gift">
          <p className="title" className="title">
            뭘 좋아할지 몰라서 다 준비했어<br></br>
            제일 마음에 드는 걸로 알려줘 😘
          </p>

          <div className="gift-boxes">
            {
              isPresent.map(function(a,i){
                if (i > 0){
                  return (
                        <img className="gift-boxe-img" onClick={ ()=>{ setPresentNum(i) }} src={ isPresentNum===i ? giftbox_open : giftbox }/>
                  )
                }
              })
            }
          </div>
          <Modal isPresent={ isPresent } isPresentNum={ isPresentNum } isReason={ isReason }/>
        </div>

        {/* 사진 */}
        <div className="photo menu" id="photo">
          <p className="title">방문 인증샷 남기기</p>
          <div>
            <WebcamCapture />
          </div>
          
          <p>저장 기능 없음. 알아서 캡쳐해^^.....<br></br>다시 찍으려면 카메라 한번 더 누르기</p>
        </div>

        
        <div className="song menu" id="song">
          <p className="title">생일 정말 축하해🎉</p>
          <div className="audio-player">
            <iframe width="330" height="194" src="https://www.youtube.com/embed/xTq5yt8yM68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <p className="song-ex">생일 축하 노래는 아이유가!</p>
        </div>



      </div>
    </div>
  );
}

function Modal(props){
  if (props.isPresentNum > 0){
    return(
      <div>
        <h3>{ props.isPresent[props.isPresentNum] }</h3>
        <p className="gift-reason">{ props.isReason[props.isPresentNum]}</p>
      </div>
    )
  }
  else if (props.isPresentNum === 0){
    return(
      <div>
        <h3>{ props.isPresent[0] }</h3>
        <p className="gift-reason">{ props.isReason[0]}</p>
      </div>
    )
  }

}



export default App;
