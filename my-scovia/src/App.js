// import logo from './logo.svg';
import './App.css';
import Greet from './Greet'


function App() {
   const name = 'Bridget'
   const school = 'Madera'
   const address = 'soroti'

   const secondName = 'Jenavive'
   const secondSchool = 'St.marys'
   const secondAddress = 'Kampala'

   const thirdName ='Ritah'
   const thirdSchool ='Jeressa'
   const thirdAddress = 'Mobile'
  return (
    <div className='App'> 
    <h1>Greeting card</h1>
    <Greet name ={name}age={20}school={school}address={address}/>
    <Greet name ={secondName}age={22}school={secondSchool}address={secondAddress}/>
    <Greet name ={thirdName}age={24}school={thirdSchool}address={thirdAddress}/>
    </div>
  );
}

export default App;
