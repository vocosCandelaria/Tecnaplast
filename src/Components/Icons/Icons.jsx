import React from 'react'

const Icons = ({Icon, color, size}) => {
  return (
    <div>{<Icon style={{color: color, fontSize: size}}/>}</div>
  )
}

export default Icons