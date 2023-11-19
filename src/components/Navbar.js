import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import exit from './Section';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  function reload() {
    window.location.reload();
  }
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={exit}>
                  
                  <p><i class="fa-solid fa-code"></i>&nbsp;
                        Sorting Visualizer   &nbsp;
                        <i class="fa-solid fa-code"></i>
                  </p>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/selection' className='nav-links' onClick={exit}>
                      Selection Sort
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/insertion' className='nav-links' onClick={exit}>
                      Insertion Sort
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/merge' className='nav-links' onClick={exit}>
                      Merge Sort
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={exit}>
                      Contact Me
                    </Link>
                    </li>
                  </ul>
                  {button && <Button buttonStyle='btn--outline'>CONTACTS</Button>}
            </div>
        </nav>
    </>
  );
}

export default Navbar