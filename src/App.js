//import logo from './logo.svg';
import './App.css';
import Greet from './greet'

function App() {
  const name ='Bridget'
  const school = 'Madera'
  const address ='soroti'
  const age = '15'

  const secondName ='Jenavive'
  const secondSchool = 'St.marys'
  const secondAddress ='kampala'
  const secondAge = '18'

 const thirdName = 'Ritah'
 const thirdSchool = 'Jeresa'
 const thirdAddress = 'soroti'
 const thirdAge = '21'

  return (
    <div className='App'> 
    <h1>Greetings card</h1>
    <Greet name = {name}school={school}address={address} age={age}/>
    <Greet name ={secondName}school={secondSchool}address={secondAddress} secondAge={secondAge}/>
    <Greet name ={thirdName}school={thirdSchool}address={thirdAddress}thirdAge={thirdAge}/>
    </div>
  );
}
      

export default App;
