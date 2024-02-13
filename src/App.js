import logo from './logo.svg';
import './App.css';

function App() {
  const urlParams = new URLSearchParams(window.location.search);

  // 특정 파라미터 값 가져오기
  const name = urlParams.get('name'); // 'John'
  const age = urlParams.get('age'); // '30'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>이름: {name}</div>
        <div>나이: {age}</div>
      </header>
    </div>
  );
}

export default App;
