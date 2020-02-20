import React from 'react'
import { connect } from 'react-redux'

const Team = props => {
    return(
        <div>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        team: state.team,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {}
) (Team);