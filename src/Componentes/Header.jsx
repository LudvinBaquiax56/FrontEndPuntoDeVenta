import { Tab } from 'bootstrap'
import { useState } from 'react'
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
        <BsFillHouseFill className='icon' />
        <BsPersonCircle className='icon' />
        <BsFillArrowRightSquareFill className='icon' />
        <BsQuestionCircle className='icon' />
      </div>
    </header>
  )
}

export default Header