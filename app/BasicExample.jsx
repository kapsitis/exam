import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Login from './login.jsx'


const Home = () => (
    <div className="container">
        <h2>Sākums</h2>
        <p><a href="http://www.dudajevagatve.lv/mathexam/index.html">Statiskā mājaslapa</a></p>
    </div>
)



const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components123`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

const BasicExample = () => (
    <Router>
        <div className="container">
            <Link to="/exam/">Uz sākumu</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/exam/login">Uz testiem</Link>
            <hr/>
            <Route exact path="/exam/" component={Home}/>
            <Route path="/exam/login" component={Login}/>
        </div>
    </Router>
)


module.exports= BasicExample
