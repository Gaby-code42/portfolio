import { useLocation , Link} from "react-router-dom";
import Modal from '../../components/Modal';
import FormulaireContact from "../FormContact";
import React, { useState } from 'react';
import './style.scss'

function Header (){
    const location = useLocation();

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };

    return(
        <div className="NavContainer">
            <div>
                <Link className='Logo' to="/"> 
                Raphael Bonacina
                </Link>
            </div>
            <div>
                <Link to='/' className={`NavContainer__Link ${location.pathname === '/' ? 'active__link' : ''}`}>
                    Accueil
                </Link>
                <Link to='/realisation' className={`NavContainer__Link ${location.pathname === '/work' ? 'active__link' : ''}`}>
                    Travaux
                </Link>

                <button className="Contact__Modal" onClick={handleOpenModal}>Contact</button>  
                <Modal show={showModal} handleClose={handleCloseModal}>
                    <FormulaireContact/>                            
                </Modal>
            </div>
        </div>
    )
}

export default Header