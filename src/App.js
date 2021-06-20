import './App.css';
import Header from './components/Header/Header.js'
import Sidebar from './components/Sidebar/Sidebar.js'
import Feed from './components/Feed/Main/Feed.js'
import RightBar from './components/RightBar/Main/RightBar.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <div className="app_body">
      <Feed/>
      <RightBar/>
      {/* Sidebar */}
      {/* Feed */}
      {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
