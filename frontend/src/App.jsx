// App.jsx
import './App.css';
import { Greet } from './Greet.jsx';
import Cbox from './tableCheckbox.jsx';

const App = () => (
  <div className="App">
    <Greet name = 'Anil Rasani 1' />
    <Greet name = 'Anil Rasani 2' />
    <Greet name = 'Anil Rasani 3' />
    <Cbox name = 'check box'/>
  </div>
);

export default App;