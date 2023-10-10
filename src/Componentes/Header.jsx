import { useState } from 'react'
import { BsQuestionCircle, BsFillArrowRightSquareFill, BsPersonCircle, BsSearch, BsJustify }
  from 'react-icons/bs'

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        SALES POINT
      </div>
      <div className='header-right'>
        <BsPersonCircle className='icon' />
        <BsFillArrowRightSquareFill className='icon' />
        <BsQuestionCircle className='icon' />
      </div>
    </header>
  )
}

export default Header