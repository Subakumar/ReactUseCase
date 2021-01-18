import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import ContactUs from './ContactUs'

class Index extends Component{
    render(){
        return(
            <Router>
                <h1></h1>
                <ul>
                    <li> <Link to="/"> Home</Link></li>
                    <li> <Link to="/about"> About</Link></li>
                    <li> <Link to="/Contact"> ContactUs</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path ="/about" component={About}/>
                    <Route path="/contact" component={ContactUs}></Route>
                </Switch>
            </Router>
        )
    }
}
export default Index