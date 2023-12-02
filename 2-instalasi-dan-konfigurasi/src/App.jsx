import { useState } from 'react'
import Header from './components/header';

function App() {
  const hobbys = ['reading', 'coding', 'sleeping'];
  const [likes, setLike] = useState(0);

  function handleClickPlus() {
    setLike(likes + 1);
  }

  function handleClickMin() {
    setLike(likes - 1);
  }
  function handleClickReset() {
    setLike(likes - likes);
  }

  return(
    <div>
      <Header />
      <Header name="dion"/>
      <h2>My hobby is:</h2>
      <ul>
        {hobbys.map((hobby) => (<li key={hobby}>{hobby}</li>))}
      </ul>
      <h2>Skor : {likes}</h2>
      <button onClick={handleClickPlus}>+</button>
      <button onClick={handleClickMin}>-</button>
      <br />
      <button onClick={handleClickReset}>Reset!</button>
    </div>
  );
}

export default App
