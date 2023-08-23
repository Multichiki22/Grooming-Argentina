import React from "react";
import Button from "react-bootstrap/Button";


const DownloadPDFButton = ({ documentType }) => {
  return (
    <Button>
      Descargar documento adjunto {documentType === "CV" ? "CV" : "AdjDocument"}
    </Button>
  );
};

export default DownloadPDFButton;
