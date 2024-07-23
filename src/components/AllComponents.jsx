import React from 'react'
import { cc } from './images';
import ChatModule from './ChatModule';

const AllComponents = () => {
  return (
    <>
    <div>
    <div style={{border:'10px soild red'}} className='tub'>
  <a> <iframe width="560" height="315" src="https://www.youtube.com/embed/uyapjoCkVbQ?si=BeV4oDhc6oV3rkF7" title="YouTube video player" frameborder="0"
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
   referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{width:"400px", height:'225px', borderRadius:'20px'}}></iframe></a>
</div>
<div className='boost'>
  <h1 className='mainheading'>Boost Your Instagram<br></br>
     Presence in Minutes!
     </h1>
     <p>
     Hundreds of Instagram <span className='pred'>Followers</span>,<span className='pred'> Likes</span>,and <span className='pred'> Views</span><br></br>
     – Real Users, Real Accounts, and Quick Delivery!
     </p> 
     <div  style={{float:"left"}}>
      <button className='start'>Get Started</button>
     </div>
     <div  style={{float:"right"}}>
     <p className='at'>Starting at $1.47</p>
     </div>
     <div >
      <p style={{ marginLeft:'40px'}}>
        <img style={{height:'30px',marginTop:'10px', marginLeft:'30px'}} src={cc}></img>
        1000+ Verified Customer Reviews<br></br>
      1.5 million individual users and counting</p>
      

     </div>
     <ChatModule/>
</div>

    </div>
    </>
  )
}

export default AllComponents;
