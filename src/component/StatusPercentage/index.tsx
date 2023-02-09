import React, { FC } from 'react'

interface Props {
    percentage: Number
}

const StatusPercentage: React.FC<Props> = ({ percentage }) => {
  const styledDiv = {
    fontWeight: 'bold'
  }

  return (
    <div style={styledDiv}>{percentage}%</div>
  )
}

export default StatusPercentage