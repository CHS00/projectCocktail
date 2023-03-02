import React, { useEffect, useState } from 'react';
import { ButtonComp } from '../Index/IndexComp';
import "./Recipe.scss";

import { useDispatch, useSelector } from 'react-redux';
import { deleteArr } from '../../store';

import recipe from "../../cocktail/cocktail"
import { useNavigate } from 'react-router-dom';

const Recipe = () => {

  const navigate = useNavigate();

  // redux
  const pickedArr = useSelector((state)=> state.pickedArr)
  const dispatch = useDispatch();

  //리스트 추가
  const [pickedRecipe,setPickedRecipe] = useState([...recipe]);

  const [pickedArrArr,setpickedArrArr] = useState([...pickedArr])

  useEffect(()=>{
    // 필터가 필요한 임의의 배열 생성
    const disArr = [];
    for (let i = 0; i < pickedArrArr.length; i++) {
      if (pickedArrArr[i].type!=="리큐르" && pickedArrArr[i].type!=="그 외") {
        disArr.push(pickedArrArr[i].type);
      } else{
        disArr.push(pickedArrArr[i].name);
      }
    }
    // 임의배열의 중복 제거
    const set = new Set(disArr);
    // disArr1 = 목록에 추가된 술 배열
    const disArr1 = [...set];

    // disArr2 = setPickedRecipe에 넣어줄 배열
    const disArr2 = []
    for (let i = 0; i < pickedRecipe.length; i++) {
      // pickedRecipe[i].ingredients.filter(a=>disArr1.includes(a)) 는 pickedRecipe[i].ingredients와 disArr1의 교집합
      // JSON.stringify를 이용해 배열을 문자열로 만들어 배열을 비교해줄수 있게 된다.
      if (JSON.stringify(pickedRecipe[i].ingredients.filter(a=>disArr1.includes(a)).sort())===JSON.stringify(disArr1.sort())) {
        disArr2.push(pickedRecipe[i])
      }
    }
    setPickedRecipe([...disArr2]);
  },[pickedArrArr])

  return (
    <div className='recipe-comp'>
      <img className='recipe-text' src={require("../../img/recipeText.png")} alt="text" />

      <div className='thumb'>
        {
          pickedArrArr.map((a,i)=>{
            return (
              <div key={i} className="thumb-div">
                <div className='thumb-div-div'>
                  <img src={require(`../../item/img/${a.id}.png`)} alt="thumb-img" className='thumb-img' />
                  <div>
                    <p className='thumb-text'>
                      <span className='thumb-name'>{a.name}</span><br />
                      타입 : {a.type} <br />
                      도수 : {a.alc}
                    </p>
                  </div>
                  <div className='thumb-x' onClick={()=>{
                    setPickedRecipe([...recipe]);
                    dispatch(deleteArr(a.id));
                    let num = pickedArrArr.findIndex((value)=>value.id===a.id);
                    pickedArrArr.splice(num,1);
                    setpickedArrArr([...pickedArrArr])
                  }}>X</div>
                </div>
              </div>
            )
          })
        }
        <ButtonComp
          style={{
            width:"250px", height:"50px"}}
          onClick={() => {
            navigate('/search');
          }}>
        사용할 재료 추가</ButtonComp>
      </div>

      <div className='recipe-div'>
        {
          pickedRecipe.map((a,i)=>{
            return(
              <div key={i} className="recipe-div-div">
                <img className='recipe-img' src={require(`../../cocktail/img/${a.id}.png`)} alt="" />
                <div className='recipe-info'>
                  <h3>{a.name}</h3>
                  <p>{a.recipe}</p>
                  <p>{a.info}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Recipe;