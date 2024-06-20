

import './App.css'

function App() {

  return (
    <div className="container">
      <div className="box">
        <div className="image-section">
          <img src="./images/bg-main-desktop.png" alt="Sample" />
          <div className='card' >
            <img src="./images/bg-card-front.png" alt="Sample" style={{ borderRadius: '10px' }} />
          </div>
          <div className='card-back' >
            <img src="./images/bg-card-back.png" alt="Sample" style={{ borderRadius: '10px' }} />
          </div>
        </div>
        <div className="color-section">
          <div className='form'>
            <h4>CARDHOLDER NAME</h4>
            <input type="text" placeholder='e.g. James Jill'  />

            <h4>CARD NUMBER</h4>
            <input type="Number"   placeholder='e.g. 1234 5678 9123 0000'  />

            <h4>EXP. DATE (MM/YY)</h4>
            <input type="Number" placeholder='MM' style={{ width: '70px' } } />
            <input type="Number" placeholder='YY' style={{ width: '70px' }} />
            <h4>CVV</h4>
            <input type="Number" placeholder='e.g. 123' style={{ width: '80px' }} />
            <br></br>
            <button>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App
