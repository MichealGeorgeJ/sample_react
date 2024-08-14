import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    
    return (
        <div>
         
             <div className="navbar">
        <div className="ul">
<Link className='li' to='/'>
Cube
</Link>
<Link className='li' to='/heartBeat'>
HeartBeat
</Link>
<Link className='li' to='/sphere'>
Sphere
</Link>
<Link className='li' to='/buttons'>
Buttons
</Link>
{/* <div className="li">Cube</div>
<div className="li">HeartBeat</div>
<div className="li">Sphere</div>
<div className="li">Buttons</div> */}
        </div>
         
      </div>
        </div>
    )
}

export default Navbar
