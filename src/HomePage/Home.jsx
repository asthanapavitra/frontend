import React from 'react'

import HeroSection from './HeroSection';
import FeaturedClass from './FeaturedClass';
import Testimonials from './Testimonials';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Footer from './Footer';
function Home() {
    
  return (
    <div>
         <HeroSection/>
         <div className='featured-container' >
           <div className='heading'><h2 >Featured Courses</h2>
           <Button className='button' component={Link}to="/courses" variant='contained'>Explore All Courses</Button></div>
  
            <div className='featured-classes'>
            <FeaturedClass src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktfYLlMHDlklh4MUrOxinGEogbAYz1bWSAy7oL38yp8qeXYEE" title="Web Development" content=" Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services."/>
            <FeaturedClass src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQAIuMIIgbSOi4qxEWeLhGCU3OsqS0DTO3T-V0dYWtyaCbMKyU6xT_FIZjL5gSm3jf3"
                title="Communication" content="Communication is commonly defined as the transmission of information. Its precise definition is disputed and there are disagreements about whether unintentional or failed transmissions are included and whether communication not only transmits meaning but also creates it"
            />
             <FeaturedClass src="https://cdn.britannica.com/79/213479-138-CA2C079A/Life-on-the-Plains-Illinois-Frank-Sadorus-photography.jpg?w=800&h=450&c=crop"
                title="Photography" content="Photography skills allow you to enhance a company's website or social media content. These skills are also invaluable for companies that sell products, as high-quality photography can have a big impact on sales."
             />
             <FeaturedClass src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/02/spot-healing.jpg"
                title="Adobe Photoshop Skills" content="Adobe Photoshop is a software application that was designed for image editing as well as photo retouching. With Photoshop, users can create or edit images, illustrations and artwork. Understanding how to edit images can make it easier for you to create graphics for websites or new marketing materials"
             />
             </div>
         </div>
         <Testimonials/> 
         <Footer/>
    </div>
  )
}

export default Home
