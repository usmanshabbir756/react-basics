import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Greeting name="Shabbir" />
      <Welcome name="Usman"/>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
