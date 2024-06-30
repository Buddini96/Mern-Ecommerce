import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

//@ts-ignore
function HideNavAndFooter({ children }) {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    if (['/main', '/addProduct', '/listProduct', '/dashboard', '/listUsers'].includes(location.pathname)) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location]);

  return (
    <div>
      {showNav && children}
    </div>
  );
}

export default HideNavAndFooter;
