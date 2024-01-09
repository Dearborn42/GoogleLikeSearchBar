import './App.css';
import GoogleSearchBar from './Components/GoogleSearchBar';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="mx-auto w-25 h-50 d-flex flex-column p-3">
          <GoogleSearchBar />
        </div>
      </header>
    </div>
  );
}