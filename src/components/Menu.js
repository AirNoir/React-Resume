import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from 'actions/index'
import {Link} from 'react-router-dom'




class Menu extends Component{


    render(){
        return (
            
                <li><Link to={this.props.path}>{this.props.title}</Link></li>
                
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch)
}


export default connect(null,mapDispatchToProps)(Menu);




