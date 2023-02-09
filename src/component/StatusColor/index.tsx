import React, { FC } from 'react'

interface Props {
    color: string;
    percentage: Number;
}

const StatusColor: React.FC<Props> = ({ color, percentage }) => {  
     
  const backgroungDiv = {
      height: 4,
      width: 184,
      backgroundColor: 'hsla(0, 0%, 89%, 1)',
      borderRadius: 8,
    }
          
    const coloredDiv = {
      height: '100%',
      width: `${percentage}%`,
      backgroundColor: color,
      borderRadius:8,
    }

        
    return (
      <div style={backgroungDiv}>
        <div style={coloredDiv}></div>
      </div>
    )
      
}

export default StatusColor