import React, { useState } from 'react';
import Button from '../../components/button/Button';

function App() {
  const [text, setText] = useState('按钮');
  return (
    <>
      <Button onClick={() => { setText(new Date().toLocaleTimeString()); }} >{text}</Button>
    </>
  );
}


export default App;
