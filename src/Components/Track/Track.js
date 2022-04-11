import { useState, useEffect } from 'react';
import './Track.css';

function Track(props) {
  const [isRemoval, setIsRemoval] = useState(false);
  useEffect(() => {

  })

  const renderAction = () => {
    return isRemoval ? "-" : "+";
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.name}</h3>
        <p>{props.artist} | {props.album}</p>
      </div>
      <button className="Track-action">{renderAction}</button>
    </div>
  );
}

export default Track;
