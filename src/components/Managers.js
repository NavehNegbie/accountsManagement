import classNames from 'classnames';
import findIndex from 'lodash/findIndex';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { highlightAccounts, highlightManagers } from '../redux/actions';

const propTypes = {
    // Redux
    managers: PropTypes.object.isRequired,
    accountsData: PropTypes.object.isRequired,
    highlightAccounts: PropTypes.func.isRequired,
    highlightManagers: PropTypes.func.isRequired,
}

const Managers2 = ({ managers, accountsData, highlightAccounts, highlightManagers }) => {

    const checkHasNoAccounts = (id) => {
        const index = findIndex(Object.values(accountsData), { 'managerId': parseInt(id) });
        return (index === -1);
    }

    const handleHighlight = (id) => {
        highlightManagers(id);
        highlightAccounts(id);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Manager</td>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(managers).map(([key, value]) => {
                        return (
                            <tr key={key}
                                onClick={() => handleHighlight(key)}
                                className={"clickCursor"}
                            >
                                <td className={classNames({ 'highlight': value.isHighlight})}>{key}</td>
                                <td className={classNames({'red' : checkHasNoAccounts(key)})}>{value.name}</td>
                                <td>{managers[value.supervisorId]?.name}</td>
                            </tr>
                        )
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

const mapDispatchToProps = dispatch => ({
    highlightAccounts: id => dispatch(highlightAccounts(id)),
    highlightManagers: id => dispatch(highlightManagers(id))
})

Managers2.propTypes = propTypes;
export default memo(connect(mapStateToProps, mapDispatchToProps)(Managers2));
