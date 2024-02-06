import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import { FirstComponent as FC , SecondComponent as SC } from './components/MyComponent';
import MC from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <Greeting name="Shabbir" />
      <Welcome name="Usman"/>
      <h1>Hello World</h1>
      <FC />
      <SC />
      <MC />
      
    </div>
  );
}

export default App;
