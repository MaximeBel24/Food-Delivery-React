import React from 'react'
import'./Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Commandez votre nourriture préférée ici</h2>
            <p>Choisissez parmi un menu varié proposant un éventail de plats délectables élaborés à partir des meilleurs ingrédients et de l'expertise culinaire. Notre mission est de satisfaire vos envies et d'améliorer votre expérience culinaire, un délicieux repas à la fois.</p>
            <button>Voir la Carte</button>
        </div>
    </div>
  )
}

export default Header
