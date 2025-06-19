import React from 'react'
import './greet.css'
function Greet({name,age,school,address}){ 
   console.log (name,'name')
   console.log (age,'age')
   console.log (school,'school')
   console.log (address,'address')
  return (
    <div className="greeting_card"> 
    <h1>hi!{name}</h1>
    <p> I am {age}</p>
    <p> I study from {school}</p>
    <p> I am from {address}</p>
    </div>
  );
}
      

export default Greet;