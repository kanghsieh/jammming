// import { useState, useEffect } from 'react';
import React from 'react';
import './Track.css';

function Track(props) {
  // const [isRemoval, setIsRemoval] = useState(props.isRemoval);
  // useEffect(() => {

  // })

  const addTrack = (track) => props.onAdd(track);

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-action" >-</button>
      );
    } else {
      // console.log(this.props.track);
      return (
        // <button className="Track-action" onClick={addTrack(props.track)} >+</button>
        <button className="Track-action" >+</button>
      );
    }
  };
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
      {renderAction()}
    </div>
  );
}

// class Track extends React.Component {
//   constructor(props) {
//     super(props);
//     this.addTrack = this.addTrack.bind(this);
//     this.renderAction = this.renderAction.bind(this);
//   }

//   addTrack(track) {
//     this.props.onAdd(track);
//   }

//   renderAction() {
//     if (this.props.isRemoval) {
//       return (
//         <button className="Track-action" >-</button>
//       );
//     } else {
//       // console.log(this.props.track);
//       return (
//         <button className="Track-action" onClick={this.addTrack(this.props.track)} >+</button>
//       );
//     }
//   }

//   render() {
//     return (
//       <div className="Track">
//         <div className="Track-information">
//           <h3>{this.props.track.name}</h3>
//           <p>{this.props.track.artist} | {this.props.track.album}</p>
//         </div>
//         {this.renderAction()}
//       </div>
//     );
//   }
// }

export default Track;
