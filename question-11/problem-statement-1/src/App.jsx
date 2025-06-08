import React, {useState} from 'react';
import Main from './components/Main';
function App(){
  const [userName, setUserName] = useState('');
   return(
    <div>
      <h1>Props Drilling </h1>

      <input type="text"
        placeholder='Enter your name'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={{padding:'8px', fontSize:'16px'}}
      />
      <Main userName={userName}/>
    </div>
   )
}

export default App;