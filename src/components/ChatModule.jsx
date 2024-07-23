import React from 'react'
import { aa, bb, dd } from './images';

const ChatModule = () => {
  return (
    <div>
    
<button style={{backgroundColor:'white',border:'none', float:'right'}} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
<div className='chatsection'>
    <img className='mesgeicon' src={dd}></img>
    </div>
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div  class="modal-dialog">
    <div  style={{ width:'350px',height:'450px', float:'right',position:'relative',left:'300px'}} class="modal-content">
      <div style={{marginLeft:'310px',marginTop:'10px'}}>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div>
        <img style={{marginLeft: '50px',marginTop:'20px' ,width:'230px'}} src={bb}></img>
        </div>
      <div style={{marginLeft:'50px',width:'50px'}}>
      <img style={{width:'50px',borderRadius:'50px',marginTop:'10px'}} src="https://cdn.chatbot.com/widget/66350931dc482b000701f36a/jDm_U4IN.png"
       ></img>
       </div>
       <div>
       <h4 style={{fontSize:'25px',marginTop:'3px',marginLeft:'50px' }}>Twicsy Support</h4>
       <p style={{marginLeft:'50px', color:'gray'}}>Online</p>
       
        </div>
        <div className='chatbtn'>
          <p>Need help right away? Click below and <br></br>   let's chat. Trust us, it's worth it! 😊</p>
          <button>Start Chat</button>
        </div>

      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
</div>
    
  )
}

export default ChatModule;
