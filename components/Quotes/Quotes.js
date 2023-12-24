import React from 'react';
import './Quotes.css';

function App() {
  return (
    <div className="quotes-container">
     <div className='quotes-left'></div>
     <div className='quotes-middle'>
        <div className='quotes-text'>
            <p className='text-quotes'>Get Inspired to 
                <br></br>
                Achieve
                <br></br>
                Enhanced Outcomes.
                 </p>
        <div className='text-bar'></div>
        <div className='text-quotes-text'>
          <p>“As I hurtled through space, one thought kept crossing my mind – every part of this rocket was supplied by the lowest bidder.”</p>
          <p>John Glenn</p>
        </div>
        </div>
     </div>
     <div className='quotes-right'></div>
    </div>
  );
}

export default App;