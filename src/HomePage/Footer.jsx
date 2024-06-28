import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Footer() {
    const year=new Date().getFullYear();
  return (
    <MDBFooter className='bg-dark text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-light'>
        <div className='me-5 d-none d-lg-block'>
          <span className="text-white">Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset text-white'>
          <FacebookRoundedIcon />
          </a>
          <a href='' className='me-4 text-reset text-white'>
          <XIcon />
          </a>
         
          <a href='' className='me-4 text-reset text-white'>
            <InstagramIcon />
          </a>
          <a href='' className='me-4 text-reset text-white'>
            <GitHubIcon/>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p className='text-white'>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 text-white' >
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Products</h6>
              <p>
                <a href='#!' className='text-reset text-white'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-white'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-white'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-white'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 text-white'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset text-white'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-white'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-white'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-white'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Contact</h6>
              <p className='text-white'>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p className='text-white'>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p className='text-white'>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p className='text-white'>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <span className='text-reset fw-bold text-white'>
          © 2021 Copyright:
          <a className='text-reset fw-bold text-white' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </span>
      </div>
    </MDBFooter>
  );
}