import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

function Search() {
  const navigate = useNavigate();
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [searchText, setSearchText] = useState("");

  const keywords = [
    "#리메이크", "#청춘", "#직장", "#미식", "#역사",
    "#재난", "#블랙코미디", "#힐링", "#코즈믹호러",
    "#사이버펑크", "#가족", "#여행", "#성장", "#펫"
  ];

  const handleKeywordClick = (keyword) => {
    setSelectedKeywords((prev) => {
      const newSelectedKeywords = prev.includes(keyword)
        ? prev.filter((k) => k !== keyword)
        : [...prev, keyword];

      setSearchText(newSelectedKeywords.join(" "));
      return newSelectedKeywords;
    });
  };

  const handleDeselectClick = () => {
    setSelectedKeywords([]);
    setSearchText("");
  };

  const hideContent = selectedKeywords.length > 0;

  return (
    <div className="container">
      <img  
        src="/images/previous.png"
        alt="previous"
        className="previous-icon"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }} 
      />

      <div className="search-box">
        <img 
          src="/images/graysearchIcon.png" 
          alt="graysearch" 
          className={`graysearch-icon`} 
        />
        <span style={{ color: searchText ? "white" : "#818181", marginLeft: '10px' }}>
          {searchText || "게임, 시리즈, 영화를 검색하세요..."}
        </span>
      </div>

      <img 
        src="/images/deselect.png" 
        alt="deselect" 
        className="deselect-icon" 
        onClick={handleDeselectClick} 
      />

      <div className="keywordButton-container">
        {keywords.map((keyword, index) => (
          <div
            key={index}
            className="keywordButton"
            onClick={() => handleKeywordClick(keyword)}
            style={{
              borderColor: selectedKeywords.includes(keyword) ? "#E50814" : "white",
              color: selectedKeywords.includes(keyword) ? "#E50814" : "white",
            }}
          >
            {keyword}
          </div>
        ))}
      </div>

      {/* 키워드가 선택되면 "검색 결과"로 표시 */}
      {hideContent ? (
        <div className="recommended-box">검색 결과</div>
      ) : (
        <div className="recommended-box">추천 시리즈 & 영화</div>
      )}

      {!hideContent && (
        <>
          <div className="my-box">
            <img src="/images/my.webp" alt="my" />
            나의 해방일지
            <img src="/images/recommandedPlay.png" alt="recommandedPlay" className="my-recommanded-play" />
          </div>

          <div className="oldguard-box">
            <img src="/images/oldguard.jpeg" alt="oldguard" />
            올드가드
            <img src="/images/recommandedPlay.png" alt="recommandedPlay" className="oldguard-recommanded-play" />
          </div>

          <div className="youngSheldon-box">
            <img src="/images/youngSheldon.png" alt="youngSheldon" />
            영 셸던
            <img src="/images/recommandedPlay.png" alt="recommandedPlay" className="youngSheldon-recommanded-play" />
          </div>

          <div className="haikyu-box">
            <img src="/images/haikyu.jpg" alt="haikyu" />
            하이큐!!
            <img src="/images/recommandedPlay.png" alt="recommandedPlay" className="haikyu-recommanded-play" />
          </div>

          <div className="bfood-box">
            <img src="/images/bfood.jpg" alt="bfood" />
            극장판 짱구는 못말려 21기: <br />
            엄청 맛있어! B급 음식 <br />
            서바이벌
            <img src="/images/recommandedPlay.png" alt="recommandedPlay" className="bfood-recommanded-play" />
          </div>

          <div className="doc-box">
            <img src="/images/doc.jpg" alt="doc" />
            슬기로운 의사생활
            <img src="/images/recommandedPlay.png" alt="recommandedPlay" className="doc-recommanded-play" />
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
