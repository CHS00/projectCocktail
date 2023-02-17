import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { ButtonComp, DropdownComp } from '../Index/IndexComp';
import "./Search.scss";

import item from '../../item/item';
import { useNavigate } from 'react-router-dom';


const Search = (props) => {

  const { setSelected } = props

  const [dropdown,setDropdown] = useState(false);

  const [type,setType] = useState("모든 종류")
  const [minAlc,setMinAlc] = useState(0);
  const [maxAlc,setMaxAlc] = useState(100);

  const [alcArr,setAlcArr] = useState([...item])

  const [selectedAlc,setSelectedAlc] = useState("non")

  const navigate = useNavigate();

  useEffect(()=>{
    let alcFilter1 = [...item].filter((data)=>{
      return (
        Number(data.alc) >= Number(minAlc) &&
        Number(data.alc) <= Number(maxAlc)
      )
    })

    let alcFilter2 = [...item].filter((data)=>{
      return (
        data.type === type && 
        Number(data.alc) >= Number(minAlc) &&
        Number(data.alc) <= Number(maxAlc)
        );
    });
    type==="모든 종류"?setAlcArr(alcFilter1):setAlcArr(alcFilter2);
  },[type,minAlc,maxAlc])

  return (
    <div className='search-comp'>
      <img className='search-text' src={require("../../img/searchText.png")} alt="text" />

      <div className='choose-opt'>
        <div className='type-select'> 
          종류 선택
          <div className='choosed-type' onClick={()=>{
            setDropdown(!dropdown)
          }}>{type}</div>
          <DropdownComp dropdown={dropdown}>
            <ul className='type-dropdown'>
              <li onClick={()=>{setType("모든 종류"); setDropdown(false);}}>모든 종류</li>
              <li onClick={()=>{setType("보드카"); setDropdown(false);}}>보드카</li>
              <li onClick={()=>{setType("럼"); setDropdown(false);}}>럼</li>
              <li onClick={()=>{setType("진"); setDropdown(false);}}>진</li>
              <li onClick={()=>{setType("리큐르"); setDropdown(false);}}>리큐르</li>
              <li onClick={()=>{setType("그 외"); setDropdown(false);}}>그 외</li>
            </ul>
          </DropdownComp>
        </div>

        <div className='alc-select'>
          도수 <br />
          <input type="number" placeholder={minAlc} 
          className={classNames("input-alc", "min-alc")}
          min="0" max="100"
          onChange={(e)=>{
            e.target.value===""?setMinAlc(0):setMinAlc(e.target.value)
          }}/>
          &nbsp;~&nbsp;
          <input type="number" placeholder={maxAlc} 
          className={classNames("input-alc", "max-alc")}
          min="0" max="100"
          onChange={(e)=>{
            e.target.value===""?setMaxAlc(100):setMaxAlc(e.target.value)}}/>
        </div>
      </div>

      <div className='list-div'>
        {
          alcArr.length===0?<img src={require("../../img/cantfind.png")} alt="" />:
          alcArr.map((a,i)=>{
            return(
                <img 
                src={require(`../../item/img/${a.id}.png`)} 
                key={i}
                alt="list-pic"
                className='list-pic'
                onClick={()=>{
                  setSelectedAlc(a);
                }}/>
            )
          })
        }
      </div>

      <div className='result'>
        {
          selectedAlc==="non"?
          (
            <img src={require("../../img/nonSelect.png")} alt="non" />
          ):
          (
            <div className='result-alc'>
              <img src={require(`../../item/img/${selectedAlc.id}.png`)} alt="selected-alc" />
              <div className='result-alc-info'>
                <p>제품명 : {selectedAlc.name} <br />
                타입 : {selectedAlc.type} <br />
                도수 : {selectedAlc.alc} <br />
                용량 : {selectedAlc.amount}ml</p>
                <p>{selectedAlc.info}</p>
                <ButtonComp
                style={{
                  width:"250px", height:"50px", position:"absolute", right:"0", bottom:"0"}}
                onClick={() => {
                  // 선택한 재료를 레시피에 자동으로 추가하여 레시피페이지로
                  setSelected(selectedAlc);
                  navigate('/recipe');
                }}>이 재료로 칵테일 만들기</ButtonComp>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Search;