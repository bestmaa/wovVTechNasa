import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ReactJson from "react-json-view";

function Details() {
  let location = useLocation();

  return (
    <div>
      <pre>
        <ReactJson src={location?.state} />
      </pre>
    </div>
  );
}

export default Details;
