import './App.css';

function App() {

  const startGame = (bubble) => {
    const element = document.getElementById('game-box')
    for ( const child of element.children ){
      console.log(child);
      if (child.classList.contains('start')) {
        element.removeChild(child)
        console.log('removed');
      }
    }
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
