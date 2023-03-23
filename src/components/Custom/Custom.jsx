import React from 'react';
import { useState } from 'react';
import Address from './Address';

const Custom = () => {

  const [addInfo,setAddInfo] = useState("")
  const getAddressNum = (address) =>{
      setAddInfo(address)
  }
  const [addDetail,setAddDetail] = useState("")
  const getAddressDetail = (address) =>{
      setAddDetail(address)
  }

  const [receiverName,setReceiverName] = useState("")
  const getName = (name) => {
      setReceiverName(name)
  }

  const [phoneNum,setPhoneNum] = useState("")
  const getNum = (num)=>{
      setPhoneNum(num)
  }

  return (
    <div>
      <img src={require("../../img/dummy.png")} alt="" />
      <Address getName={getName} getNum={getNum} getAddressNum={getAddressNum} getAddressDetail={getAddressDetail} />
    </div>
  );
};

export default Custom;