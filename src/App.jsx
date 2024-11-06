
import './App.css'
import CounterButton from './containers/Counter/CounterButton';
import CounterDisplay from './containers/Counter/CounterDisplay';

function App() {
  
  return (
    <>
      <h1>Demo Jotai</h1>
      <CounterDisplay />
      <CounterButton />
      <CounterButton step={5} />
    </>
  )
}

export default App
