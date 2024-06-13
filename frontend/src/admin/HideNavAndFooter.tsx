import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


//@ts-ignore
function HideNavAndFooter({children}) {
    const location = useLocation();
    const [showNav, setShowNav] = useState(false)
    useEffect(() => { 
      if (location.pathname === '/main') {
        setShowNav(false)
      } else {
        setShowNav(true)
      }
    }, [location])

  return (
    <div>
      {showNav && children}
    </div>
  )
}

export default HideNavAndFooter
