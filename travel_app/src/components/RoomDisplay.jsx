import React from 'react'
import RoomDetail from './RoomDetail';

const RoomDisplay = () => {

    const rooms = [
        {
          "id": 1,
          "name": "Deluxe Room",
          "image": "https://www.google.com/imgres?q=anh%20room&imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-photo%2Finterior-stylish-living-room-cozy-260nw-2568374681.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fvi%2Fsearch%2Froom&docid=T28trizAylWFVM&tbnid=hxXLagzPw-aCVM&vet=12ahUKEwj0pZXQmfCLAxWRzjgGHZ3rNBUQM3oECGoQAA..i&w=398&h=280&hcb=2&ved=2ahUKEwj0pZXQmfCLAxWRzjgGHZ3rNBUQM3oECGoQAA",
          "type": "Deluxe",
          "price": 120,
          "amenities": ["WiFi", "Air Conditioning", "Breakfast Included", "Mini Bar"],
          "availability": true,
          "description": "A spacious room with a king-sized bed, modern amenities, and a beautiful city view."
        },
        {
          "id": 2,
          "name": "Standard Room",
          "image": "https://www.google.com/imgres?q=anh%20room&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1458854866%2Fvi%2Fanh%2Fn%25E1%25BB%2599i-th%25E1%25BA%25A5t-ph%25C3%25B2ng-kh%25C3%25A1ch-hi%25E1%25BB%2587n-%25C4%2591%25E1%25BA%25A1i-v%25E1%25BB%259Bi-tivi-gh%25E1%25BA%25BF-sofa-gh%25E1%25BA%25BF-b%25C3%25A0nh-%25C4%2591%25C3%25A8n-s%25C3%25A0n-v%25C3%25A0-b%25C3%25A0n-c%25C3%25A0-ph%25C3%25AA.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3D8tjRYFyx0W7k1m0wSpvKN9pxbpudHFhhPgmV0rupuT0%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fvi%2Fb%25E1%25BB%25A9c-%25E1%25BA%25A3nh%2Fliving-room&docid=c8QKPPnQ_j9_FM&tbnid=tIMfW46bzRDpUM&vet=12ahUKEwj0pZXQmfCLAxWRzjgGHZ3rNBUQM3oECBcQAA..i&w=612&h=408&hcb=2&ved=2ahUKEwj0pZXQmfCLAxWRzjgGHZ3rNBUQM3oECBcQAA",
          
          "type": "Standard",
          "price": 80,
          "amenities": ["WiFi", "Air Conditioning", "Breakfast Included"],
          "availability": false,
          "description": "A comfortable room with a queen-sized bed and essential amenities."
        },
        {
          "id": 3,
          "name": "Suite",
          "type": "Suite",
          "price": 200,
          "amenities": ["WiFi", "Air Conditioning", "Breakfast Included", "Mini Bar", "Living Area"],
          "availability": true,
          "description": "An elegant suite with a separate living area, luxurious amenities, and a stunning view."
        }
      ];

  return (
    <div>
        <h1>RoomDisplay</h1>
        <ul>
            {rooms.map((room) => (
                <RoomDetail key={room.id}
                            name={room.name}
                            type={room.type}
                            amenities={room.amenities}
                            availability={room.availability}
                            description={room.description}/>
            ))}
        </ul>
    </div>
  )
}

export default RoomDisplay