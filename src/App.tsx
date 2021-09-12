import React, { KeyboardEvent, useCallback, useRef, useState, VFC } from 'react';
import './App.scss';
import CommandList from './components/CommandList';

const App: VFC = () => {
  const [command, setCommand] = useState<string>('');
  const inputVal = useRef<HTMLInputElement>(null);
  const KeyUpHandler = useCallback((key) => {
    if (key === 'Enter') {
      const input = inputVal.current?.value;
      setCommand(input ? input : '');
    }
  }, [inputVal]);

  return (
    <div className="App">
      <div className="container">
        <h1>Search Books CLI</h1>
        <div className="output">
          {command && <CommandList command={command} />}
        </div>
        <input
          className="input"
          ref={inputVal}
          type='text'
          placeholder="type any command"
          onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => KeyUpHandler(e.key)}
        />
      </div>
    </div>
  );
};

export default App;
