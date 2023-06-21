import {useState} from 'react'
import person from './images/person.png'
import Linked from './images/Linked.png'
import Insta from './images/Insta.png'
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim() === '') {
      return; // Don't allow submission if no email address is entered
    }
    setIsRegistered(true);
  };

  return (
    <div className="App">
      <div className="banner">
      <div className="right-section">
        <h1 className="right-section">An inspiring design delivered to your inbox every morning</h1>
        <p className="right-section">Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox</p>
        {isRegistered ? <h1 class="right-section">Thank you!</h1> :<> <h3 class="right-section">Show me how it looks</h3>
        <form className="right-section" onSubmit={handleSubmit}>
            <input type="email" placeholder="Your e-mail address"  id="email" onChange={handleEmailChange}/>
          <button id="register">Register Now</button>
          </form></>}

          
     
        <div className="right-section"id="no-spam">Free - No Spam - No Data Sharing</div>
      
      </div>
        <div className="left-section">
        <img src = {person}/>
      
        </div>
       
      </div>
     
      <div className="bottom">
          <div className="bottom-right-section">
              <ul className="buttom-right-section">
                <li>Prompt Generator</li>
                <li>Dweep Daily</li>
                <li>All Contributors</li>
                <li>Your data on Dweep.io</li>
                <li>Contribute to Dweep</li>
              </ul>
          </div>
          <div className="bottom-left-section">
            <ul className="bottom-left-section">
              <li>Dweep.io</li>
              <li>Made with love in India</li>
              <li className="logos">
                <img src={Linked} />
                 <img src={Insta} />
              </li>
              <li>hello@dweep.io</li>
              </ul>

          </div>
          </div>
    </div>
  );
}

export default App;
