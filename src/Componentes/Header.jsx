import { NavLink } from "react-router-dom"
import { BsQuestionCircle, BsFillArrowRightSquareFill, BsPersonCircle, BsFillHouseFill, BsJustify }
  from 'react-icons/bs'

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-right'>
      </div>
      <div className='header-right'>
        <NavLink to='/'><BsFillHouseFill className='icon' /></NavLink>
        <BsPersonCircle className='icon' />
        <BsFillArrowRightSquareFill className='icon' />
        <BsQuestionCircle className='icon' />
      </div>
    </header>
  )
}

export default Header