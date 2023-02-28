
import React from 'react';
import "./Footer.scss";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonComp } from '../Index/IndexComp';
import classNames from 'classnames';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

  const [activeBtn, setActiveBtn] = useState(false);

  useEffect(() => {
    // 스크롤이 내려가면 고안한 버튼이 나타나도록 하기
    const showBtn = () => {
      if (window.scrollY > 300) {
        setActiveBtn(true);
      }else{setActiveBtn(false)}
    };
    // 참고
    // element.scrollHeight - element.scrollTop === element.clientHeight
    // 가 true라면 어떤 요소를 끝까지 스크롤한 것이다.

    // 스크롤이벤트는 관습적으로 window.
    window.addEventListener("scroll", showBtn);
    // 스크롤할때마다 이벤트리스너 실행
    return () => {
      // useEffect가 일어나기전에 EventListener를 제거해준다.
      window.removeEventListener("scroll", showBtn);
    };
  });

  return (
    <footer id="App_footer">
      <div className="footer_block footer_cs">
        <div className="footer_cs_box">
          <p>
            서울특별시 ㅇㅇ구 ㅇㅇ동 <br />
            Tel : 3000-3000 (평일 09:00 ~ 18:00) <br />
            Fax : 02-0000-0000 <br />
            Mail : moco@gmail.com
          </p>
        </div>
        <div className="footer_cs_box">
          <p>
            모두의칵테일 <br />
            서울특별시 ㅇㅇ구 ㅇㅇ동 <br />
            사업자등록번호 : 000-00-00000 사업자정보 확인 <br />
            통신판매업신고 : 서울ㅇ 00 <br />
            책임자 : 모두의칵테일 <br />
          </p>
        </div>
        <div className="footer_cs_box">
          <p>
            <a href="#!">
              전자금융 분쟁처리 <br />
            </a>
            Tel : 3000-3000 <br />
            Fax : 02-0000-0000 <br />
            Mail : moco@gmail.com <br />
            <a href="#!">전자상거래법상의 소비자분쟁해결기준</a> <br />
          </p>
        </div>
      </div>
      <div className="footer_block footer_copyright">
        <p>
          모두의칵테일은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서
          모두의칵테일은 상품·거래 정보 및 가격에 대하여 책임을 지지 않습니다.
          <br />
          Copyright Everyone's Cocktail All rights reserved.
        </p>
      </div>
      {/* activeBtn이 true일 경우 active class 스타일적용 */}
      <a href="#" className={classNames("goTop", activeBtn && "active")}>
      {/* 개발완료 후, a href="#!"는 #로 수정 */}
        <ButtonComp color="mint">
          <FontAwesomeIcon icon={faArrowUp} size="2x" />
        </ButtonComp>
      </a>
    </footer>
  );
};

export default Footer;