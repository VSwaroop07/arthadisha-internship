import './App.css';

function App() {
  const date = new Date();
  return (
    <div className="App" style={{backgroundColor:'lightslategray', borderRadius:'20px'}}>
      <div style={{ textAlign:'center' }}>
      <h1>Swaroop Vyawahare</h1>
      <h2>Current Date and Time: {date.toLocaleString()}</h2>
      <p><b>"Don't Give Up Great Things Take Time."</b><br/>
        This is a motivational quote, The quote tells us that if your doing something 'BIG', <br/>
        It will take time to complete so don't lose hope if the thing is taking more time then expected just keep doing the work.
      </p>
      <img src='logo512.png' alt='React Logo' height={200} width={200}></img>
      </div>
    </div>
  );
}

export default App;
