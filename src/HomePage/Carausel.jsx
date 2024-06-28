import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function Carausel() {
  return (
    <MDBContainer className="my-5">
      <MDBCarousel showControls showIndicators interval={3000} dark>
        <MDBCarouselItem className="active text-center">
          <img
            src=
            "data:image/jpeg;base64,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"

            alt="avatar"
            className="rounded-circle shadow-1-strong mb-4"
            style={{ width: "150px" }}
          />
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="8">
              <h5 className="mb-3">Maria Kate</h5>
              <p>Photographer</p>
              <p className="text-muted">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                quibusdam illo, beatae quia fugit consequatur laudantium velit
                magnam error. Consectetur distinctio fugit doloremque.
              </p>
            </MDBCol>
          </MDBRow>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon far icon="star" size="sm" />
            </li>
          </ul>
        </MDBCarouselItem>

        <MDBCarouselItem className="text-center">
          <img
            src=
            "data:image/jpeg;base64,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"

            alt="avatar"
            className="rounded-circle shadow-1-strong mb-4"
            style={{ width: "150px" }}
          />
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="8">
              <h5 className="mb-3">John Doe</h5>
              <p>Web Developer</p>
              <p className="text-muted">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis.
              </p>
            </MDBCol>
          </MDBRow>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon far icon="star" size="sm" />
            </li>
          </ul>
        </MDBCarouselItem>

        <MDBCarouselItem className="text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDjYnTtwJZ4FoNwsPjzUqEntyESjuHyg0w9Q&s"
            alt="avatar"
            className="rounded-circle shadow-1-strong mb-4"
            style={{ width: "150px" }}
          />
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="8">
              <h5 className="mb-3">Anna Deynah</h5>
              <p>Web Developer</p>
              <p className="text-muted">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                quibusdam illo, beatae quia fugit consequatur laudantium velit
                magnam error. Consectetur distinctio fugit doloremque.
              </p>
            </MDBCol>
          </MDBRow>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon far icon="star" size="sm" />
            </li>
          </ul>
        </MDBCarouselItem>
      </MDBCarousel>
    </MDBContainer>
  );
}
export default  Carausel;