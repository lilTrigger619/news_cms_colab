// Navbar.js

import React from 'react';
import Stack from 'react-bootstrap/Stack';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className='nav-left'></div>
      <div className='nav-middle'>
      <Stack direction="horizontal" gap={3} style={{ width: '100%', justifyContent: 'center' }}>
          <div className="p-2" style={{ width: '15%' }}>
            <p>AVIATION logo</p>
          </div>
          <div className="p-2" style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
            <InputGroup style={{ width: '400px' }}>
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search for filename..." />
            </InputGroup>
          </div>
          <div className="p-2" style={{ width: '15%' }}>
            <Stack direction="horizontal" gap={3}>
              <div className="p-2">Home</div>
              <div className="p-2">Contact</div>
            </Stack>
          </div>
        </Stack>
      </div>
      <div className='nav-right'></div>
      </div>
  );
}

export default Navbar;
