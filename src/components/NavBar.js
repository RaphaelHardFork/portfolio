import contact from '../contactData'


const NavBar = () => {
  return (
    <div className="barnav">
      <ul className="navig">
        {contact.map((elem) => {
          return <li key={elem.text} className="navig-item">
            <a aria-label={elem.label} href={elem.link} target="_blank" rel="noopener noreferrer" className="nav-link">
              {elem.svg}
              <span className="link-text">{elem.text}</span>
            </a>
          </li>
        })
        }
      </ul>
    </div>
  )
}

export default NavBar