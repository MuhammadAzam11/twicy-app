import React from 'react'
import { aa, bb } from './images'
import './Styles.css'
import { useNavigate } from 'react-router-dom'
import AllComponents from './AllComponents'
import ChatModule from './ChatModule'

const HomePage = () => {
    const histry=useNavigate();
    const secendPage=()=>{
        return(
            histry('/secendPage')
            )
        }

  return (
    <>
    <div style={{borderBottom:'1px solid gray'}}>
      
         <div className='arrow'>
        <h2 className='heading'>👉 Try Our AI Powered Instagram Comments Service</h2>
        </div>
        <header className='hader'>
        <img className='logo' src={bb}></img>
        <div style={{display:'flex',justifyContent:'center'}}>
     <div class="dropdown" className='inst'>
     
  <a 
   class="btn  dropdown-toggle azam"  role="button"
   data-bs-toggle="dropdown" aria-expanded="false">
 Buy Instagram Services
  </a>
  
   
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="http://localhost:3000/secendPage">Buy Instagram Likes</a></li>
    <li><a class="dropdown-item" href="http://localhost:3000/secendPage">Buy Instagram Follower</a></li>
    <li><a class="dropdown-item" href="http://localhost:3000/secendPage">Buy Instagram Comments</a></li>
    <li><a class="dropdown-item" href="http://localhost:3000/secendPage">Buy Instagram Views</a></li>
  </ul>
  
</div>
<div class="dropdown" >
<a  
style={{hover: "gray" ,border:'2px',backgroundColor:'white', color:'gray', textAlign:'center', width:'150px', fontSize:'12px'}} 
   
   className='drop' class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Buy TikTok Services
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="http://localhost:3000/secendPage">Buy TikTok Likes</a></li>
    <li><a class="dropdown-item" href="http://localhost:3000/secendPage">Buy TikTok Follower</a></li>
    <li><a class="dropdown-item" href="http://localhost:3000/secendPage">Buy TikTok Views</a></li>
  </ul>
</div>
<div class="dropdown">
  <a 
style={{hover: "gray" ,border:'2px',backgroundColor:'white', color:'gray', textAlign:'center', width:'150px', fontSize:'12px'}} 

   className='drop' class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Buy Threads Services
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="http://localhost:3000/secendPage">Buy Threads Followers</a></li>
    <li><a class="dropdown-item" href="http://localhost:3000/secendPage">Buy Threads Likes</a></li>
    <li><a class="dropdown-item" href="http://localhost:3000/secendPage">Buy Threads Reposts</a></li>

  </ul>

</div>
</div>

{/* <button className='stc' onClick={secendPage}>Nextpage</button> */}
<div class="dropdown">
  <a className='drop' role="button"
   data-bs-toggle="dropdown" aria-expanded="false"><img className='menu' src={aa}></img>

  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="http://localhost:3000/secendPage">Action</a></li>
    <li><a class="dropdown-item" href="http://localhost:3000/secendPage">About</a></li>
    <li><a class="dropdown-item" href="http://localhost:3000/secendPage">FAQ</a></li>
  </ul>
</div>

</header>
<AllComponents/>


</div>

    </>
   
  )
}

export default HomePage
