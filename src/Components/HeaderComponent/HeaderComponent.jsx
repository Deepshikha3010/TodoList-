import React from "react";
import "./Header.styles.css";

const HeaderComponent = () => {
    return(

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container">
        <a className="navbar-brand" href="/">TodoProject</a>
        <button className="navbar-toggler"
         type="button" 
         data-toggle="collapse" 
         data-target="#navbarNavAltMarkup" 
         aria-controls="navbarNavAltMarkup" 
         aria-expanded="false" 
         aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" 
        id="navbarNavAltMarkup">
          <div className="navbar-nav float-right">
            <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
            <a className="nav-link" href="/">Features</a>
            <a className="nav-link" href="/">Pricing</a>
            <a className="nav-link disabled" href="/" tabIndex={-1} aria-disabled="true">Disabled</a>
          </div>
          </div>
        </div>
      </nav>
        </div>

    )
}

export default HeaderComponent;