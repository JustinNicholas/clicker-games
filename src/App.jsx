import './App.css';

function App() {

  const startGame = (bubble) => {
    const element = document.getElementById('game-box')
    for ( const child of element.children ){
      console.log(child);
      if (child.classList.contains('start')) {
        element.removeChild(child)
        console.log('removed');
        createBubble();
      }
    }
  }

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  const createBubble = () => {
    console.log('created');
    const node = document.createElement("div");
    node.style.marginTop = getRandomNumber(0, 450);
    node.style.marginLeft = getRandomNumber(0, 750);
    node.classList.add("target-bubble");
    document.getElementById('game-box').appendChild(node)
  }

  return (
    <div className="App">
      <header className="App-header">
        Aim Trainer
      </header>
      <body>
        <div id='game-box' className='game-box'>
          <div className='start-bubble start'>
            <p className='zero-margin' onClick={() => startGame()}>Start</p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
