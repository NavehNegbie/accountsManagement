import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { connect } from "react-redux";

const propTypes = {
    // Redux
    managers: PropTypes.object.isRequired,
    accountsData: PropTypes.object.isRequired
}

const Accounts2 = ({ managers, accountsData }) => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Account Manager</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(accountsData).map(([id, data]) => {
                        return (
                            <tr key={id} className={classNames({'disabled' : !data.isActive})}>
                                <td className={classNames({'highlight' : data.isHighlight})}>{id}</td>
                                <td>{data.name}</td>
                                <td>{managers[data.managerId].name}</td>
                                <td>{data.isActive ? 'active' : 'closed'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        managers: state.managers,
        accountsData: state.accountsData
    };
};

Accounts2.propTypes = propTypes;
export default memo(connect(mapStateToProps)(Accounts2));
