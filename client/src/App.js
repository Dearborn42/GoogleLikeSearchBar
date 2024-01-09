import './App.css';
import GoogleSearchBar from './Components/GoogleSearchBar';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="w-50 h-50 d-flex" style={{marginLeft:"auto", marginRight:"auto"}}>
          <GoogleSearchBar />
        </div>
      </header>
    </div>
  );
}