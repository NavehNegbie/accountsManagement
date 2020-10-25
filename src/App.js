import PropTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import Accounts2 from './components/Accounts';
import Managers2 from './components/Managers';
import { accountsData, managers } from './data';
import { initData } from './redux/actions';
import './styles/App.css';

const propTypes = {
  // Redux
  initData: PropTypes.func.isRequired,  
}

const App = ({ initData }) => {

  useEffect(() => {
    initData({
      managers,
      accountsData
    });
  }, []);

  return (
    <div className="App">
      <div className="headlines">Account managers data set:</div>
      <Managers2 />

      <div className="headlines">Accounts data set:</div>
      <Accounts2 />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  initData: data => dispatch(initData(data))
})

App.propTypes = propTypes;
export default memo(connect(null, mapDispatchToProps)(App));
