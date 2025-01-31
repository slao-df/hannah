import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Search.css";

function Search() {
  const navigate = useNavigate();
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [hideKeywords, setHideKeywords] = useState(false);
  const [hideContent, setHideContent] = useState(false);
  const inputRef = useRef(null);

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
      setHideContent(newSelectedKeywords.length > 0);
      return newSelectedKeywords;
    });
  };

  const handleDeselectClick = () => {
    setSelectedKeywords([]);
    setSearchText("");
    setHideKeywords(false);
    setHideContent(false);
  };

  const handleSearchBoxClick = () => {
    if (selectedKeywords.length === 0) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
      setHideKeywords(true);
      setHideContent(true);
    }
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") {
      setHideKeywords(false);
      setHideContent(false);
    }
  };

  return (
    <div className="container">
      <img  
        src="/images/previous.png"
        alt="previous"
        className="previous-icon"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }} 
      />

      <div 
        className="search-box" 
        onClick={handleSearchBoxClick} 
        style={{ pointerEvents: selectedKeywords.length > 0 ? 'none' : 'auto' }}
      >
        <img 
          src="/images/graysearchIcon.png" 
          alt="graysearch" 
          className="graysearch-icon" 
        />
        <input
          ref={inputRef}
          type="text"
          value={searchText}
          onChange={handleInputChange}
          className="search-input"
          style={{
            background: "none", 
            border: "none", 
            color: "white", 
            fontSize: "16px", 
            outline: "none", 
            width: "100%",
            pointerEvents: selectedKeywords.length > 0 ? 'none' : 'auto'
          }}
          placeholder="게임, 시리즈, 영화를 검색하세요..."
          disabled={selectedKeywords.length > 0} 
        />
      </div>

      <img 
        src="/images/deselect.png" 
        alt="deselect" 
        className="deselect-icon" 
        onClick={handleDeselectClick} 
      />

      {!hideKeywords && (
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
      )}

      {!hideContent && (
        <>
          <div className="recommended-box">
            추천 시리즈 & 영화
          </div>

          <Link to="/Detail">
            <div className="my-box">
              <img src="/images/my.webp" alt="my" />
              나의 해방일지
              <img src="/images/recommandedPlay.png" alt="recommandedPlay" className="my-recommanded-play" />
            </div>
          </Link>

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
