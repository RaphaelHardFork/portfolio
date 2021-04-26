import React from 'react'
import "bootstrap/dist/css/bootstrap.css"

const Header = () => {
  return (
    <header className="header row justify-content-between text-center ">
      <div className="infos col-lg-6 text-lg-start">
        <h1>Raphaël Pellet</h1>
        <p>26 ans</p>
      </div>
      <div className="image col-lg-6 text-lg-end">
        <img src="https://avatars.githubusercontent.com/u/78814928?s=460&u=f69a7ffbfdacfea51d4e7254b908d0ce5ba1fc29&v=4" alt="Un singe allongé" />
      </div>
    </header>
  )
}

export default Header