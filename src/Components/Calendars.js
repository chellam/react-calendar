import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as calActions from '../actions/CalActions';
import Cal from './Cal'; 

class Calendars extends Component{
    constructor(props){
        super(props);
        //this.state = {year:''};
    }
    
    submitHandler = (e) =>{
       let input = eval(this.refs.textID.value);
       this.props.actions.showCals(input, this.refs.year.value);
    }
    /*shouldComponentUpdate(nextProps, nextState){
        return false;
    }*/
    render(){
        debugger;
        return(
          <div>  
            <textarea ref="textID"></textarea>
            <input ref="year" />
            <button onClick={this.submitHandler}>Submit</button>
            <div className="calendarrow">
                 {this.props.calendars.map((cal, day)=>{
                     let colClass = ['bdaypersons'];
                     if(cal.length >= 4 || cal.length == 0){
                        colClass.push('fourcolumn');
                     }else if(cal.length == 3){
                        colClass.push('threecolumn');
                     }else if(cal.length == 2){
                        colClass.push('twocolumn');
                     }else if(cal.length == 1){
                        colClass.push('onecolumn');
                     }
                     return <Cal dates={cal} day={day} key={day} colClass={colClass.join(' ')} />
                 })}
            </div>
          </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    
    return {
      calendars: state.calendars
    };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(calActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendars);