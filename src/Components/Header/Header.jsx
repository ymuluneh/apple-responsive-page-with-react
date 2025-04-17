import React from "react";
import logo from "../../commonResource/images/icons/logo-sm.png";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";
import $ from "jquery"


function Header() {

 $(document).ready(function () {
   $(".navbar-toggler").on("click", function () {
     $(".navbar-collapse").slideToggle();
   });
 });

  return (
    <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="https://www.apple.com/">
              {" "}
              <img src={logo} alt="apple logo" />
            </a>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    href="https://www.apple.com/mac/"
                  >
                    Mac
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    href="https://www.apple.com/iphone/"
                  >
                    iphone
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    href="https://www.apple.com/ipad/"
                  >
                    ipad
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    href="https://www.apple.com/watch/"
                  >
                    watch
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    tv
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    Music
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    href="https://support.apple.com/?cid=gn-ols-home-hp-tab"
                  >
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/search/">
                    <img src={search} alt="search icon" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/cart/">
                    <img src={cart} alt="cart icon" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
