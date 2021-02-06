import React from 'react';
import Link from 'next/link';
import Nav from './Nav';

const Header = () => (
  <header>
    <div className='sub-bar'>
      <div className='bar'>
        <Link href='/'>Sick fits</Link>
      </div>
      <p>Search</p>
    </div>
    <Nav />
  </header>
);

export default Header;
