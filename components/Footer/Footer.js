import Stack from 'react-bootstrap/Stack';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className='footer-left-panel'></div>
      <div className='footer-middle-panel' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='footer-logo'>aviation logo</div>
        <div className='footer-privacy'>
        <Stack direction="horizontal" gap={5}>
      <div className="quick-link">
        <ul>
            <p>Quick Link</p>
            <li>Advertise with us</li>
            <li>About us</li>
            <li>Contact us</li>
        </ul>
      </div>
      <div className="quick-link">
      <ul>
            <p>Legal Stuff</p>
            <li>Privacy Notice</li>
            <li>Cookie Policy</li>
            <li>Terms Of Use</li>
        </ul>
      </div>
      <div className="quick-link">
      <ul>
            <p>Social Media</p>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>X</li>
        </ul>
      </div>
    </Stack>

        </div>
      </div>
      <div className='footer-right-panel'></div>
    </div>
  );
}

export default Footer;

