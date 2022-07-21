import React from "react";

export const MyStopwatch = ({ startTime, endTime }) => {
  if (!startTime || !endTime) {
    return null;
  }

  const duration = Date.parse(endTime) - Date.parse(startTime);

  const result = new Date(duration).toISOString().slice(11, 19);

    return (
    <div  >
        <p>Terminado en : </p>
        <p data-testid="resultCount"> {result} </p>
    </div>
    );
  };

