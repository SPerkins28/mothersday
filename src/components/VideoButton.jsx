import React, { useState } from "react";
import { Button, Modal } from "reactstrap";
import "./VideoButton.css";
import "bootstrap/dist/css/bootstrap.min.css";

const VideoButton = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button id="clickMe" onClick={toggle}>
        <strong>Click Me!</strong>
      </Button>
      <Modal isOpen={modal} toggle={toggle} id="videoModal">
        <p id="happyDay">
          <strong>We Love You!</strong>
        </p>
        <iframe
          id="charliVideo"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dnpCPzIhHVs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Button id="closeButton" onClick={toggle}>
          Close
        </Button>
      </Modal>
    </div>
  );
};

export default VideoButton;
