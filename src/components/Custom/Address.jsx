import React, { useEffect, useState } from "react";
import PayPopupPostCode from "./PayPopupPostCode";
import { ModalComp } from '../Index/IndexComp'; 
import "./Address.scss";


const Address = ({getName, getNum, getAddressNum, getAddressDetail}) => {
    
    //이름
    const [name,setName] = useState("")
    const changeName = (e) =>{
        setName(e.target.value);
        getName(name);
    }
    
    //폰번호
    const [fir,setFir] = useState("")
    const [mid,setMid] = useState("")
    const [end,setEnd] = useState("")
    const firNum = (e) =>{
        setFir(e.target.value);
        if((mid!=="")&&(end!=="")){
            getNum(fir+mid+end)
        }else{
            getNum("")
        }
    }
    const midNum = (e) =>{
        setMid(e.target.value);
        if((fir!=="")&&(end!=="")){
            getNum(fir+mid+end)
        }else{
            getNum("")
        }
    }
    const endNum = (e) =>{
        setEnd(e.target.value);
        if((fir!=="")&&(mid!=="")){
            getNum(fir+mid+end)
        }else{
            getNum("")
        }
    }


    //우편번호
    const [addressNum,setAddressNum] = useState("")
    const getNumData = (addressNum) => {
        setAddressNum(addressNum);
        getAddressNum(addressNum);
    }

    //주소
    const [addresslen,setAddresslen] = useState("")
    const getAddData = (addresslen) => {
        setAddresslen(addresslen);
    }

    //나머지주소
    const [addressDetail,setAddressDetail] = useState("")
    const getDetail = (e) => {
        setAddressDetail(e.target.value)
        getAddressDetail(addressDetail)
    }

    return (
        <div>
            <div className="div">
                <h3 className="title">배송지정보</h3>
                <hr className="main_hr"/>
                <table className="address_table">
                    <tbody>

                        <tr className="address_table_tr">
                            <td className="table_cate">수령인</td>
                            <td><input type="text" className="address_input_name" onChange={changeName} /></td>
                        </tr>

                        <tr className="address_table_tr">
                            <td className="table_cate">연락처</td>
                            <td>
                                <input type="number" className="address_input_phone" onChange={firNum} />
                                <span className="phone_hy">-</span>
                                <input type="number" className="address_input_phone" onChange={midNum} />
                                <span className="phone_hy">-</span>
                                <input type="number" className="address_input_phone" onChange={endNum} />
                            </td>
                        </tr>

                        <tr className="address_table_tr">
                            <td className="table_cate">배송 주소</td>
                            <td>
                                <input type="text" placeholder="우편번호" className="address_addressnum" defaultValue={addressNum} disabled />
                                <ModalComp button={
                                    <button
                                        style={{
                                            height:"40px", 
                                            width:"80px",
                                            color: "black",
                                            border: "#c9c9c9 solid 3px"
                                        }}
                                    >검색</button>
                                }height='80vh'>
                                    <PayPopupPostCode getNumData={getNumData} getAddData={getAddData} />
                                </ModalComp><br />
                                <input type="text" className="address_address" placeholder="주소" defaultValue={addresslen} disabled /><br />
                                <input type="text" className="address_address" placeholder="나머지 주소" onChange={getDetail} />
                            </td>
                        </tr>

                        <tr className="address_table_tr2">
                            <td className="table_cate">배송 메모</td>
                            <td><input type="text" className="address_memo" placeholder="배송시 요청사항을 적어주세요"/></td>
                        </tr>

                    </tbody>
                </table>
                <hr className="main_hr"/>
            </div>
        </div>
    );
};
export default Address;