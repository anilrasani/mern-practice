
import  Greet  from './components/Greet.jsx';
// import Form from './components/formHandling.jsx';
import Cbox from './components/tableCheckbox.jsx';
import StateComponent from './components/StateCmponent.jsx';


const people =[
    { id:1,name:'anil',age:25,skill:'React'},
{ id:1,name:'anil',age:25,skill:'React'},
{ id:1,name:'anil',age:25,skill:'React'},
{ id:1,name:'anil',age:25,skill:'React'},
{ id:1,name:'anil',age:25,skill:'React'}]

const App = () => (

<div className="App">
      {/* <Form data ={people}/> */}

    {/* <Greet name={'anil rasani'} /> */}
    {/* <Greet name='anil rasani' people={people} /> */}
    
     {/* <Greet name = 'Anil Rasani 2' />    */}
    {/* <Greet name = 'Anil Rasani 3' /> */}
    {/* <Cbox name = 'check box'/>  */}

    <StateComponent/>
  </div>
);

export default App;