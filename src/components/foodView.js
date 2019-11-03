import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import {fetchAndReturnFoods} from '../actions/index';


import _ from 'lodash';


class ViewFoods extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foodData: null,
        };
    }

    componentDidMount() {
        //this.props.setModalStateSpinner(true);
        this.props.fetchAndReturnFoods();
    }


    componentWillReceiveProps(nextProps) {
        if(nextProps.foodData){
            this.setState({foodData : nextProps.foodData}, () => {
                console.log(this.state.foodData);
            });
        }
    }



    render() {
        return(
            <div>
                hello foods
            </div>
        )
    }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchAndReturnFoods }, dispatch);
}

function mapStateToProps({ foodData }) {
    return { foodData };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewFoods);
