import React from 'react'

// Components
import Nav from '../components/nav'
import Footer from '../components/footer'

// Pages

import Account from './account'
import Cart from './cart'
import Menu from './menu'
import Orders from './orders'

const App: React.FunctionComponent = () => (
  <div>
    <Nav/>

    <Menu />
    <Account />
    <Orders />
    <Cart />

    <Footer />

  </div>
)

export default App
