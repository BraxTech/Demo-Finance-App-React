import React from 'react'

interface NavLinkProps {
    name: string;
    active: boolean;
    link: string
}

const NavLink = ({ name, active, link }: NavLinkProps) => {
  return (
    <a className='text-slate-400' href={link}>
      {name}
    </a>
  )
}

export default NavLink
