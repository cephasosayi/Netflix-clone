import React, {useState, useEffect} from 'react'
import './Navbar.css';



const Navbar = () => {
    const [show, setShow] = useState(false);

    function getScroll(){
        window.addEventListener('scroll', ()=>{
                    if(window.scrollY > 100){
                        setShow(true);
                    }else{
                        setShow(false);
                    }
                });
                return ()=>{
                    window.removeEventListener('scroll')
                }
    }
    useEffect(()=>{
        getScroll();
    }, []);
  return (
    <div className={`nav ${show && 'show-black'}`}>
        <img 
        src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png'
        alt='Netflix Logo'
        className='nav-icon'

        />
        
    </div>
  )
}

export default Navbar