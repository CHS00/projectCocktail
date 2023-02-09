import React from 'react';
import "./Footer.scss";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {

  const [activeBtn, setActiveBtn] = useState(false);

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
            <a href="#">
              전자금융 분쟁처리 <br />
            </a>
            Tel : 3000-3000 <br />
            Fax : 02-0000-0000 <br />
            Mail : moco@gmail.com <br />
            <a href="#">전자상거래법상의 소비자분쟁해결기준</a> <br />
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
    </footer>
  );
};

export default Footer;