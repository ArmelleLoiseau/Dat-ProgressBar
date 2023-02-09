import React from 'react';
import StatusColor from './StatusColor';
import StatusName from './StatusName';
import StatusPercentage from './StatusPercentage';
import './status.css'

interface Props {
  allStatus: string[][];
  currentStatus: string;
  colors: string[];
  levels: number[]
}

export const Status: React.FC<Props> = ({ allStatus, currentStatus, colors, levels }) => {

  // Find out which color is the current status based on his position in the allStatus array (0, 1 or 2)
  // TODO: add solution if currentStatus not in the array
  let primaryIndex = 0;
  allStatus.forEach(el => {
    if(el.includes(currentStatus)) primaryIndex = allStatus.indexOf(el)
  })
  const color = colors[primaryIndex]; 


  // find out the percentage of accomplishment based on the current status position in the allStatusArray
  let percentage = 0;
  const step = Math.floor(50 / allStatus[primaryIndex].length);
  const level = levels[primaryIndex];
  const secondaryIndex = allStatus[primaryIndex].indexOf(currentStatus) + 1;
  level === 100 ? percentage = 100 : percentage = level + (step * secondaryIndex);

  return (
      <div className='mainContainer'>
          <StatusName currentStatus={currentStatus}></StatusName>
          <StatusPercentage percentage={percentage}></StatusPercentage>
          <StatusColor color={color} percentage={percentage}></StatusColor>
      </div>
    )
}
  
