import React, { Component } from 'react'
import { Link } from 'react-router'
import Dashboard from './components/Dashboard'
import Stringify from 'react-stringify'
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'



// UI Components
import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from './user/ui/logoutbutton/LogoutButtonContainer'

// Styles
// import './css/oswald.css'
// import './css/open-sans.css'
// import './css/pure-min.css'
// import './App.css'

class App extends Component {
  render() {
    

    //on app load, req accounts for specific meta mask account, then only load those cryptocurrency prices and dates
    
    return (
      <div className="App">

        {/* <Stringify value={{ foo: 'foo', bar: 'bar' }} space="💩" /> */}
 
        <Dashboard />


        {/* <nav className="navbar pure-menu pure-menu-horizontal">
          <Link to="/" className="pure-menu-heading pure-menu-link">Truffle Box</Link>
          <ul className="pure-menu-list navbar-right">
            <OnlyGuestLinks />
          </ul>
        </nav> */}

        {/* {this.props.children} */}



      </div>
    );
  }
}


// const mapStateToProps=(state) => {
//   const { btc_price, eth_price, interval } = state
//   return { btc_price, eth_price, interval }
// };


userAccount, userPortfolioContracts,
confirmations: 0,
openAllocation: [],
closeAllocation: [],
newAccountState: null,
interval: 60,
btc_price: 0,
eth_price: 0


// export default connect (mapStateToProps, actionCreators)(App);

export default App




// const OnlyGuestLinks = HiddenOnlyAuth(() =>
// <span>
//     <LoginButtonContainer />
//   </span>
// )







// {/* <OnlyAuthLinks /> */}
// const OnlyAuthLinks = VisibleOnlyAuth(() =>
//   <span>
//     <li className="pure-menu-item">
//       <Link to="/dashboard" className="pure-menu-link">Dashboard</Link>
//     </li>
//     <li className="pure-menu-item">
//       <Link to="/profile" className="pure-menu-link">Profile</Link>
//     </li>
//     <LogoutButtonContainer />
//   </span>
// )