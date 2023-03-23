import React, { useEffect, useState } from "react"
import './IndexComp.scss'
import classNames from 'classnames'

import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight,faCaretLeft,faXmark } from '@fortawesome/free-solid-svg-icons'

import { Modal } from 'react-bootstrap'

export const ButtonComp = (props) => {
  const { children, size, icon, style, block, tile, color, onClick } = props

  const [ripples, setRipples] = useState([])

  // ripples배열이 길어져 애니메이션 밀림현상이 일어나는것을 방지하는 useEffect
  useEffect(() => {
    if (ripples.length > 0) {
      const a = setTimeout(() => {
        // 0.6초마다 ripples요소중 id(ripples.length)가 
        // ripples배열 길이-1이 아닌것만을 골라내 ripples에 넣음으로,
        // 배열의 마지막 요소만을 지운값을 ripples에 넣는다.
        // (처음생성된 id는 0으로 시작하므로)
        setRipples(ripples.filter((e) => e.id !== ripples.length - 1))
      }, 500)
      // useEffect 실행하기전 clearTimeout으로
      // setTimeout을 취소시켜 버튼클릭 딜레이를 방지한다.
      return () => {clearTimeout(a)}
    }
  }, [ripples])


  // 클릭애니메이션. 클릭했을 때, setRipples가 발동하게 하기.
  const clickAnimation = (e) => {

    // 우선 애니메이션에서 나타날 도형의 값을 지정

    // clientX = 창내부의 x좌표
    // getBoundingClientRect().xx 이곳의 xx는
    // top = 창상단에서 대상의 처음위치값, bottom = 상단부터 끝 위치값
    // left = 좌측에서 대상의 처음위치값, right = 좌측부터 끝 위치값
    // 아래 선언한 x는 (커서x좌표-버튼 좌측 끝 좌표)로 버튼 내부의 x좌표값
    let x = e.clientX - e.currentTarget.getBoundingClientRect().left
    let y = e.clientY - e.currentTarget.getBoundingClientRect().top
    
    // React.createElement(a,[props],[...children])으로 컴포넌트 생성
    // a = 태그이름문자열, props = 컴포넌트에 넣어주는 데이터 객체
    // children = 자식으로 넣어주는 요소
    // 아래가 생성될 애니메이션(의 도형값)
    let ripple = React.createElement(
      // span태그 생성하고 값없이 props전달
      'span',
      {
        // 애니메이션 시작위치
        style: { left: x + 'px', top: y + 'px' },
        key: ripples.length,
        className: 'ripple-span',
      },
      null,
    )
    setRipples(
      ripples.concat({
        element: ripple,
        id: ripples.length,
      }),
    )
  }
  return (
    <button
      style={style}
      // classnames 모듈로 특정값이 true/false임에 따라 클래스명을 추가제거
      className={classNames(
        'button',
        size,
        icon ? 'icon' : '',
        block ? 'block' : '',
        tile ? 'tile' : '',
        color,
      )}
      onClick={(e) => {
        clickAnimation(e)
        onClick(e)
      }}
    >
      <span>{children}</span>
      {/* 애니메이션이 일어날 span 삽입 */}
      {ripples.map((e) => e.element)}
    </button>
  )
}

ButtonComp.defaultProps = {
  onClick: function () {},
}


// 슬라이더
export const SliderComp = ({
  dots,
  infinite,
  speed,
  slidesToShow,
  slidesToScroll,
  arrows,
  autoplay,
  children,
}) => {

  //화살표
  // https://bum-developer.tistory.com/entry/NPM-react-slick 참고
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="customarrow arrow-next"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faCaretRight} size="3x" />
      </div>
    )
  }

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="customarrow arrow-prev"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faCaretLeft} size="3x" />
      </div>
    )
  }

  const settings = {
    dots: dots,
    infinite: infinite,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: arrows,
    autoplay: autoplay,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <div style={{width : '100%'}}>
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}

//기본 설정
SliderComp.defaultProps = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
}


// 드롭다운
export const DropdownComp = (props) => {
  
  const {children,dropdown} = props

  const [dropdownAnimation,setDropdownAnimation] = useState(false);
  // repeat으로 드롭다운을 여러번 빠르게 눌렀을때 생기는 버그 제거
  const [repeat, setRepeat] = useState(null);

  useEffect(()=>{
    if (dropdown) {
      clearTimeout(repeat);
      setRepeat(null);
      setDropdownAnimation(true);
    }else{
      setRepeat(setTimeout(()=>{
        setDropdownAnimation(false);
      },400))
    };
    return 
  },[dropdown]);


  return(
    <div className={dropdown?"slide-fade-in-dropdown":"slide-fade-out-dropdown"}>
      {dropdownAnimation && children}
    </div>
  )
}


//모달
export const ModalComp = ({
  children,
  button,
  image,
  className,
  height,
  bigimage,
}) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const cloneChild = React.cloneElement(children, { onSelect: handleClose })
  return (
    <>
      {/* 모달 open 버튼 */}
      <span onClick={handleShow}>{button}</span>
      {/* 모달 창 내용 */}
      <Modal
        centered
        dialogClassName={classNames('opened_modal', className)}
        show={show}
        onHide={handleClose}
      >
        <Modal.Body className={bigimage ? 'bigimage' : null}>
          {image ? (
            <>
              <div className="img_block">{image}</div>
              <div className="content_block">
                {bigimage ? (
                  <div className='bigimage_close'>
                    <ButtonComp color='white' icon onClick={handleClose}>
                      <FontAwesomeIcon icon={faXmark} size='2x' />
                    </ButtonComp>
                  </div>
                ) : null}
                {children}
              </div>
            </>
          ) : (
            <div className="noimg_content_block" style={{ height: height }}>
              {cloneChild}
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  )
}
