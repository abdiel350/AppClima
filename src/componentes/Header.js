import React from "react";
import PropTypes from "prop-types";


const Header = ({titulo}) => {
return (
<div>
    <nav>
        <div className="nav-wrapper light-blue darken-2">      
          <p className="brand-logo"> {titulo} </p>
        </div>
     </nav>
</div>

);
}

Header.propTypes={
  titulo:PropTypes.string.isRequired
}

export default Header;
