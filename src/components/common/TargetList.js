import React from 'react';
import PositionMarker from './PositionMarker';

const TargetList = (targets) => {
  {
    console.log(targets);
    targets.map((target, index) => (
      <PositionMarker key={index} lat={target.lat} lng={target.lng} />
    ));
  }
};

export default TargetList;
