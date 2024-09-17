import { TextInput } from '@/components/ui/text-input';
import './App.css';
import reactLogo from './assets/react.svg';
import { Button } from './components/ui/button';
import viteLogo from '/vite.svg';

function App() {
  return (
    <>
      <div className="flex items-center justify-center w-full py-8">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo w-48 h-48" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="logo react w-48 h-48"
            alt="React logo"
          />
        </a>
      </div>
      <h2>Vite + React18.3 base</h2>
      <div className="card">
        <div className="flex items-center justify-center p-4">
          <TextInput />
        </div>
        <Button>Click</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
