import React, {Component} from 'react'

export default class Timeline extends Component {

    render() {
        return ( 
        <div className = "c3" id = "history" > 
            <h3>PROFESSIONAL EXPERIENCE</h3> 
            <div className = "timeline" > 
                <ul className="prof_exp">
                    <li className="prof-exp-first">
                        <ul>
                            <li>GAMEFORTUNE@TAIPEI</li>
                            <li>Lottery System</li>
                            <li>Lottery Mobile</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>GSIT@TAIPEI</li>
                            <li>Lottery System</li>
                            <li>Black Widow (Web Crawler)</li>
                            <li>WorkHour System</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>China Airlines＠TAOYUAN</li>
                            <li>Flight Operation System</li>
                            <li>Emergency Management System</li>
                            <li>Crew Route Report System</li>
                        </ul>
                    </li>
                </ul> 
           
            </div> 
        </div>);
    }

}