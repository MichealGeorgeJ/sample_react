import React, { useState } from 'react'
import './Buttons.scss'
const Buttons = () => {
const [show,setShow]=useState(false)
const [deleted,setDeleted]=useState('Delete')
const [send,setSend]=useState('Send')
const [sendAnimaton,setSendAnimation]=useState(false)

  const applyDeleteAnimation=()=>{
setShow(true)
setTimeout(()=>{
  setDeleted('Deleted')
},3000)
setTimeout(()=>{
  setShow(false)
  setDeleted('Delete')
},6000)
  }

  const applySendAnimation=()=>{
    setSendAnimation(true)
    setTimeout(()=>{
      
      setSend('Sent')
    },8000)
    setTimeout(()=>{
      setSendAnimation(false)
      setSend('Send')
    },17000)

  }
    return (
        <>
            <section className="buttonContainer">
                <div className="buttons">
                    <div className="button">
                        <button onClick={applyDeleteAnimation} className="delete">
                        <svg
   
    version="1.1"
    id="_x32_"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-400 -2000 2000 5000"
    xmlSpace="preserve"
    className={`${show? `` :``}`}
    
  >
    <style type="text/css">
      {`
        .st0 { fill: #0bceb2; }
      `}
    </style>
    <g className={`delete-icon ${show && `animation`}`}>
      <path
        className="st0"
        d="M88.594,464.731C90.958,491.486,113.368,512,140.234,512h231.523c26.858,0,49.276-20.514,51.641-47.269
        l25.642-335.928H62.952L88.594,464.731z M420.847,154.93l-23.474,307.496c-1.182,13.37-12.195,23.448-25.616,23.448H140.234
        c-13.42,0-24.434-10.078-25.591-23.132L91.145,154.93H420.847z"
      />
      <path
        className="st0"
        d="M182.954,435.339c5.877-0.349,10.35-5.4,9.992-11.269l-10.137-202.234c-0.358-5.876-5.401-10.349-11.278-9.992
        c-5.877,0.357-10.35,5.409-9.993,11.277l10.137,202.234C172.033,431.231,177.085,435.696,182.954,435.339z"
      />
      <path
        className="st0"
        d="M256,435.364c5.885,0,10.656-4.763,10.656-10.648V222.474c0-5.885-4.771-10.648-10.656-10.648
        c-5.885,0-10.657,4.763-10.657,10.648v202.242C245.344,430.601,250.115,435.364,256,435.364z"
      />
      <path
        className="st0"
        d="M329.046,435.339c5.878,0.357,10.921-4.108,11.278-9.984l10.129-202.234c0.348-5.868-4.116-10.92-9.993-11.277
        c-5.877-0.357-10.92,4.116-11.277,9.992L319.054,424.07C318.697,429.938,323.17,434.99,329.046,435.339z"
      />
      <path
        className={`st0 cap ${show && `animation2`}`}
        d="M439.115,64.517c0,0-34.078-5.664-43.34-8.479c-8.301-2.526-80.795-13.566-80.795-13.566l-2.722-19.297
        C310.388,9.857,299.484,0,286.642,0h-30.651H225.34c-12.825,0-23.728,9.857-25.616,23.175l-2.721,19.297
        c0,0-72.469,11.039-80.778,13.566c-9.261,2.815-43.357,8.479-43.357,8.479C62.544,67.365,55.332,77.172,55.332,88.38v21.926h200.66
        h200.676V88.38C456.668,77.172,449.456,67.365,439.115,64.517z M276.318,38.824h-40.636c-3.606,0-6.532-2.925-6.532-6.532
        s2.926-6.532,6.532-6.532h40.636c3.606,0,6.532,2.925,6.532,6.532S279.924,38.824,276.318,38.824z"
      />
    </g>
  </svg>
  <div className={`word ${ show && `animation3`}`}>
    
  {deleted}
  </div>
                        </button>
                    </div>
                    <div className="button">
                        <button onClick={applySendAnimation} className="delete">
                        <svg viewBox="-130 -150 330 330" fill="none" xmlns="http://www.w3.org/2000/svg" className={`rocket ${sendAnimaton && `rocketAnimation`}`}>
        <defs>
            <linearGradient id="paint0_linear_103_1561" x1="18.4338" y1="4.80151" x2="18.4338" y2="26.9454" gradientUnits="userSpaceOnUse">
                <stop stopColor="#897f61" />
                <stop offset="1" stopColor="#e50af5" />
            </linearGradient>
            <linearGradient id="paint1_linear_103_1561" x1="20.1537" y1="12.4874" x2="20.1537" y2="26.9454" gradientUnits="userSpaceOnUse">
                <stop stopColor="#d520c6" />
                <stop offset="1" stopColor="#6164b8" />
            </linearGradient>
            <linearGradient id="paint2_linear_103_1561" x1="16.9443" y1="0.561035" x2="16.9443" y2="28.0821" gradientUnits="userSpaceOnUse">
                <stop stopColor="#078df2" />
                <stop offset="1" stopColor="#af5eb0" />
            </linearGradient>
        </defs>
        <path d="M8.78271 16.6242L12.2227 26.9454L28.0848 6.67813V4.80151L17.8604 9.58687L8.78271 16.6242Z" fill="url(#paint0_linear_103_1561)" />
        <path d="M12.2227 26.9454L28.0848 12.0734V4.80151L22.3515 12.6833L13.3693 18.5008L12.2227 26.9454Z" fill="url(#paint1_linear_103_1561)" />
        <path d="M1.9044 11.45C0.611678 11.9303 0.628604 13.7646 1.92996 14.221L8.78229 16.6241L28.0844 4.80145L13.369 18.5008L25.6405 27.7826C26.5064 28.4375 27.7593 27.9626 27.9734 26.8981L32.9143 2.32681C33.1417 1.19533 32.0388 0.253539 30.9569 0.655507L1.9044 11.45Z" fill="url(#paint2_linear_103_1561)" />
    </svg>
                            <div  className={`word2  ${sendAnimaton && `word2Animation`}`}>
                            {send}
                            </div>
                        </button>
                    </div>
                    {/* <div className="button">
                        <button className="edit">
                          <div className="word3">
                          Edit
                          </div>
                           <span className='span'></span>
                           <span className='span'></span>
                           <span className='span'></span>
                           <span className='span'></span>
                           <span className='span'></span>
                           <span className='span'></span>
                        </button>
                    </div>
                    <div className="button">
                        <button className="delete">
                            Delete
                        </button>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Buttons
