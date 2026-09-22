// App.jsx

import './App.css';
import './main.jsx'
import  Greet  from './Greet.jsx';

import Cbox from './tableCheckbox.jsx';

const people =[
    { id:1,name:'anil',age:25,skill:'React'},
{ id:1,name:'anil',age:25,skill:'React'},
{ id:1,name:'anil',age:25,skill:'React'},
{ id:1,name:'anil',age:25,skill:'React'},
{ id:1,name:'anil',age:25,skill:'React'}]

const App = () => (

<div className="App">
    {/* <Greet name={'anil rasani'} /> */}
    <Greet name='anil rasani' people={people} />

    {/*<Greet name = 'Anil Rasani 2' />
    <Greet name = 'Anil Rasani 3' />
    <Cbox name = 'check box'/> */}


  </div>
);

export default App;