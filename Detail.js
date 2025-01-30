import React from "react";
import "./Detail.css";

function Detail() {
  return (
    <div className="container">

      <div className="content-box">
        <img src="/images/contentthumnail.jpg" alt="Content Thumbnail" className="content-thumbnail" />
      </div>

      <img src="/images/contentPlay.png" alt="Content Play Icon" className="contentPlay-icon" />
      <img src="/images/device.png" alt="Device Icon" className="device-icon" />
      <img src="/images/contentsdetailPrevious.png" alt="Contents Detail Previous Icon" className="contentsdetailPrevious-icon" />
      <img src="/images/sound.png" alt="Sound Icon" className="sound-icon" />

      <div className="content-title">
        <b>동감</b>
      </div>
      <div className="content-year">2022</div>
      <img src="/images/age.png" alt="Age Icon" className="age-icon" />
      <div className="content-time">1시간 54분</div>
      <img src="/images/hd.png" alt="HD Icon" className="hd-icon" />
      <img src="/images/actor.png" alt="Actor Icon" className="actor-icon" />

      <div className="choiced-keyword">#청춘 #성장</div>

      <div className="play-box">
      <img src="/images/playButton.png" alt="playButton" className="playButton-icon" />
      재생
      </div>


      <img src="/images/save.png" alt="save" className="save-icon" />
      <div className="save-box">저장</div>

      <div className="contents-plot">1999년 어느 날, 한 대학교 3학년생이 오래된 HAM 무전기로 같은 학교에 다니는 누군가와 교신을 시작한다. 
        그런데 무전기 너머 그녀가 사는 곳은 20년 후의 시간.</div>

      <div className="contents-actors">출연: 여진구, 조이현, 김혜윤 ... 더 보기 <br></br>감독: 서은영</div>

      <img src="/images/listplusButton.png" alt="listplusButton" className="listplusButton-icon" />
      <div className="listplus">내가 찜한 리스트</div>
      <img src="/images/assessment.png" alt="assessment" className="assessment-icon" />
      <div className="assessment">평가</div>
      <img src="/images/share.png" alt="share" className="share-icon" />
      <div className="share">공유</div>
      <img src="/images/line.png" alt="line" className="line-icon" />

      <div className="similar-content">비슷한 콘텐츠</div>
    </div>
    
  );
}

export default Detail;
