import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as programsActions from '../../actions/programs-actions';
import CommonLoader from '../../component/CommonLoader/CommonLoader';
import Program from './Program/Program';
import './programs.scss';
import Filter from './Filter/Filter';

class Programs extends React.PureComponent {
    componentDidMount() {
        this.fetchSpaceXPrograms();
    }

    fetchSpaceXPrograms = (params) => {
        this.props.getSpaceXPrograms(params);
    }
    renderPrograms = () => {
        let { programs } = this.props;
        if (programs.length > 0) {
            return (
                <div className={"programs"}>
                    {
                        programs.map((program) => {
                            return (
                                <Program
                                    key={program.flight_number}
                                    program={program}
                                />
                            )
                        })
                    }
                </div>
            )
        }
        return (
            <div>List is Empty</div>
        )
    }
    render() {
        let { awitingData } = this.props;

        return (
            <>
                <CommonLoader
                    showLoader={awitingData}
                />
                <div className="programContainer">
                    <div className="programHeader">
                        SpaceX Launch Programs
                    </div>
                    <div className="programFilterContent">
                        <div className="filter">
                            <Filter fetchSpaceXPrograms={this.fetchSpaceXPrograms} />
                        </div>
                        <div className="programContent">
                            {
                                this.renderPrograms()
                            }
                        </div>
                    </div>
                    <div className="author">
                        <span className="authorTitle">Developed by:</span><span>Akash Anand (akashanand110390@gmail.com)</span>
                    </div>
                </div>
            </>
        )
    }
}

Programs.propTypes = {
    getSpaceXPrograms: PropTypes.func.isRequired,
    programs: PropTypes.arrayOf(PropTypes.object).isRequired,
    awitingData: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
    programs: _.get(state, 'programReducer.programs', []),
    awitingData: state.programReducer.awitingData
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(programsActions, dispatch);
}

export default (connect(mapStateToProps, mapDispatchToProps)(Programs));
