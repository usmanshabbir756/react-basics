import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import { FirstComponent as FC , SecondComponent as SC } from './components/MyComponent';
import MC from './components/MyComponent';
import Student from './components/Student';
import Employee from './components/Employee';

function App() {

const student={
  firstName:"Usman",
  lastName:"Shabbir"
}

const skills=['HTML','CSS'];

  return (
    <div className="App">
      {/* <Greeting name="Shabbir" />
      <Welcome name="Usman"/>
      <h1>Hello World</h1>
      <FC />
      <SC />
      <MC /> */}
      {/* <Student firstName="Usman" lastName="Shabbir"/> */}
      {/* <Student data={skills}/> */}
      <Employee />
    </div>
  );
}

export default App;
