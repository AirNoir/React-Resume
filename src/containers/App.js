import React, {Component} from 'react'
import Menu from 'components/Menu'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Timeline from 'components/Timeline'
import Education from 'components/Education'
import Skills from 'components/Skills'

class App extends Component {

    render() {

        var menuList = this
            .props
            .menus
            .map(item => {
                return <Menu key={item.id} path={item.path} title={item.name}/>
            })

        return (
            <Router>
                <div className='container'>
                    <div className="myPhoto"></div>
                    <div className="content1">
                        <div className="c1" id="info"></div>
                        <h3>PERSONAL PROFILE</h3>
                        <hr/>
                        <ul className="profile">
                            <li>
                                <span>name:</span>
                                <span className="text">AirNoir Lai</span>
                            </li>
                            <li>
                                <span>b-day:</span>
                                <span className="text">May 4, 1982</span>
                            </li>
                            <li>
                                <span>e-mail:
                                </span>
                                <span className="text">williams710504@gmail.com</span>
                            </li>
                        </ul>
                        <ul className="menus">
                            {menuList}
                        </ul>
                       
                    </div>
                    <div className="content2">
                             <div className="c2" id="banner">
                                <h1>AirNoir</h1>
                                <h2>Front-End Developer</h2>
                                <div className="diamond"></div>
                             </div>
                             <Route path="/skills" component={Skills}></Route>                             
                             <Route path="/timeline" component={Timeline}></Route>
                             <Route path="/education" component={Education}></Route>
                             

                        </div>
                   
                </div>
            </Router>
        )
    }

}

function mapPropsToStates(state) {
    return {menus: state.menus}
}

export default connect(mapPropsToStates)(App);