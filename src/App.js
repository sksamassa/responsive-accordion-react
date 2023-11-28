import './App.css';
import Accordion from './Accordion';
import { sections } from './sections';

function App() {
  return (
    <div className="App">
    <h1>Responsive Accordion</h1>
      <Accordion sections={sections} />
    </div>
  );
}

export default App;
