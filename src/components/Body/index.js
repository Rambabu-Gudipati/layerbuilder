import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-container">
              <h1 className="left-navbar">Left Navbar Menu</h1>
              <ul className="list-items">
                <li className="item">Item1</li>
                <li className="item">Item2</li>
                <li className="item">Item3</li>
                <li className="item">Item4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="middle-container">
              <h1 className="content-heading">Content</h1>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="right-container">
              <h1 className="right-navbar">Right Navbar</h1>
              <div className="ad-box-container">
                <p className="ad-box">Ad 1</p>
                <p className="ad-box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
