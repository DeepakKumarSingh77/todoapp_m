import './App.css';
import Header from './components/Header';
import Todoform from './components/Todoform';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
        <Header/>
        <Todoform/>
        <Todo/>
    </div>
  );
}

export default App;
