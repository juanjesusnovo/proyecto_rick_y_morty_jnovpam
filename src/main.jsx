import React from 'react'
import ReactDOM from 'react-dom/client'
// import {Router, Route, browserHistory} from "react-router"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import Home from "./pages/Home"
import './main.sass'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    {/* <Router history={browserHistory}>
      <Route path="/" component={Home}></Route>
    </Router> */}
    <Home />
    <Footer />
  </React.StrictMode>,
)
