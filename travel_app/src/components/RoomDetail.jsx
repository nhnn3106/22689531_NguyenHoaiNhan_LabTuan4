import React from 'react'

const RoomDetail = (props) => {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.type}</p>
        <p>{props.price}</p>
        <ul>
            {props.amenities.map((item) => (
                <li key={item}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default RoomDetail