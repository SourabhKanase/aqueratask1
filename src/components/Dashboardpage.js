import React from 'react'
import Lottie from 'react-lottie';
import data from '../data.json';
import {  useNavigate } from 'react-router-dom';
const Dashboardpage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  let navigate=useNavigate();
  function newpage(){
    navigate('/card');  
  }
  return (
    <div>
      <div className="full-screen-container">
      <Lottie className='lottie' options={defaultOptions}  height="100%" width="100%"/>
      <div className='contanier'>
        <h1 className='Welcome'>WELCOME TO</h1>
        <marquee behavior="scroll" direction="left"><h2 className='title'>Star Wars Planets Directory</h2></marquee>
        <button onClick={newpage} style={{marginLeft: '25px',marginTop: '0px',padding: '10px', paddingInline: '25px', borderRadius: '10px', backgroundColor:'skyblue', color: 'gray',opacity: '1',border:'none',fontSize:'20px'}}>Explore</button>
      </div>
    </div>
    <div>
    <div className='contaniertwo' style={{display:'flex',justifyContent:'center',alignItems:'center' ,flexDirection:'column'}}>
        <div className='shadow'></div>
        <h1 className='Welcome'>WELCOME TO</h1>
        <marquee behavior="scroll" direction="left" style={{zIndex:'-1'}}><h2 className='title'>Star Wars Planets Directory</h2></marquee>
        <button onClick={newpage} style={{marginLeft: '25px',marginTop: '0px',padding: '10px', paddingInline: '25px', borderRadius: '10px', backgroundColor:'skyblue', color: 'gray',opacity: '1',border:'none',fontSize:'20px'}}>Explore</button>
      </div>
    </div>
    </div>
  )
}

export default Dashboardpage;