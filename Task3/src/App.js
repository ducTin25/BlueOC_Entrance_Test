import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-Redux Posts App</h1>
      </header>
      <main className="App-main">
        <PostForm />
        <PostList />
      </main>
    </div>
  );
};

export default App;
