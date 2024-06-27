import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
function Navbar() {
  return (
    <div className='navbar'>
        {/* <div>
        <SchoolIcon className='navbar-icon'/>
            <b className='brand-name'>SkillSpire</b>
           
        </div>
         <div>
             <a href="/">Home</a>
             <a href="/">About Us</a>
             <a href="/">Contact Us</a>
             <a href="/">FAQs</a>
             <a href="/">Login</a>
             <a href="/">Register</a>
         </div> */}
         <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark" >
      <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
