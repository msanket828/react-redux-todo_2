import './App.css';
import Header from './components/Header';
import AddTodoContainer from './containers/AddTodoContainer';
import ViewTodosContainer from './containers/ViewTodosContainer';

function App() {
  return (
    <div>
      <Header />
      <AddTodoContainer/>      
      <ViewTodosContainer/>
    </div>
  );
}

export default App;
