import './App.css';
import Header from './Header';
import SideBar from './SideBar'
import RecommendedVideos from './RecommendedVideos'
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path = "/search/:SearchTerm">
            <div className = 'app__page'>
              <SideBar className = "app__sticky" />       
              <SearchPage />       
            </div>
          </Route>
          <Route path = "/">
            <div className = 'app__page'>
              <SideBar className = "app__sticky" />       
              <RecommendedVideos/>       
            </div>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
