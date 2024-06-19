

import './App.css'

function App() {

  return (
    <div className="container">
      <div className="box">
        <div className="image-section">
          <img src="./images/bg-main-desktop.png" alt="Sample" />
        </div>
        <div className="color-section">
          <div className='form'>
            <h4>CARDHOLDER NAME</h4>
            <input type="text" placeholder='e.g. James Jill'  />

            <h4>CARD NUMBER</h4>
            <input type="text" placeholder='e.g. 1234 5678 9123 0000'  />

            <h4>EXP. DATE (MM/YY)</h4>
            <input type="Number" placeholder='MM' style={{ width: '60px' }} />
            <input type="Number" placeholder='YY' style={{ width: '60px' }} />

            <h4>CVV</h4>
            <input type="Number" placeholder='e.g. 123' style={{ width: '60px' }} />
            <button>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App
