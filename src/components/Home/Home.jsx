import './Home.scss'
import { useNavigate } from 'react-router-dom';
import { ButtonComp, SliderComp } from '../Index/IndexComp';

import { useState } from 'react';
import item from '../../item/item';

const Home = () => {
  
  let navigate = useNavigate();

  let [more, setMore] = useState(2)

  const homeItems = [...item];
  homeItems.splice(more,homeItems.length);

  return (
    <div>

      <div className="main_banner">
        <ButtonComp
          color="red"
          onClick={() => {
            navigate('/recipe')
          }}
        >
          칵테일 찾아보기
        </ButtonComp>
      </div>

      <div className="main_slide">
        <SliderComp infinite={true} autoplay={true}>
          <div className="main_slide_item">
            <img
              src={require("../../img/e2.png")} alt={"event"}
            />
          </div>
          <div className="main_slide_item">
            <img
              src={require("../../img/e1.png")} alt={"event"}
            />
          </div>
          <div className="main_slide_item">
            <img
              src={require("../../img/e3.png")} alt={"event"}
            />
          </div>
          <div className="main_slide_item">
            <img
              src={require("../../img/e4.png")} alt={"event"}
            />
          </div>
        </SliderComp>
      </div>

      <img src={require("../../img/listText.png")} alt="listText" className='listText' />
      <div className='items'>  
        <div className='itemDiv'>
          {homeItems.map((item,i)=>{
            return (
              <div key={i} className="item">
                <img src={require(`../../item/img/${i}.png`)} alt="alc" />
                <div className='itemInfo'>
                  <h4>{item.name}</h4>
                  <p>도수: {item.alc} <br />
                  용량: {item.amount}ml <br />
                  가격: {item.price}</p>
                  <p>{item.info}</p>
                </div>
              </div>
            )
          })}
        </div>
        {
          more===4?
          <ButtonComp
          color="blue"
          onClick={() => {
            navigate('/search')
          }}>
            더 보기
          </ButtonComp>:
          <ButtonComp
          color="blue"
          onClick={() => {
            setMore(4);
          }}>
            더 보기
          </ButtonComp>
        }
      </div>
    </div>
  );
};

export default Home;