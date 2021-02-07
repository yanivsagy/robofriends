import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        searchfield: state.searchRobots.searchfield,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

const App = (props) => {

    useEffect(() => {
        props.onRequestRobots();
    }, [])

    const filteredRobots = props.robots.filter(robot => {
        return robot.name.toLowerCase().includes(props.searchfield.toLowerCase());
    });

    return props.isPending ?   //if robots.length is 0, this will evaluate to !0 which is true
    <h1 className="ma3">Loading...</h1> :
    (
        <div className="tc">
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={props.onSearchChange} />
            <h2 className='f2'>{filteredRobots.length} Friends Found...</h2>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);