import './App.css';
import Clock from './components/Clock/Clock';
import Today from './components/Today/Today';
import ClockOrToday from './containers/ClockOrToday/ClockOrToday';
import GuestApp from './containers/GuestApp/GuestApp';
import Header from './containers/Header/Header';

function App() {

  return (
    <>
      <Header />
      <h1>Cycle de vie</h1>
      <GuestApp />
      <h2>Exo</h2>
      <ClockOrToday/>
    </>
  );
}

export default App;
