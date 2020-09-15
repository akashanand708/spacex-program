import React from 'react';
import PropTypes from 'prop-types';
import './filter.scss';

const launchYearList = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
const booleanList = ["true","false"];
class Filter extends React.PureComponent {
    constructor(props){
        super(props);
        this.state={
            launchYear:"",
            successfulLaunch:"",
            successfulLanding:""
        }

    }

    setFilterState = (key,value) =>{
        this.setState({[key]:value},()=> this.props.fetchSpaceXPrograms(this.state))
    }
    renderLaunchYearList = () =>{
        const {launchYear} = this.state;
        // <YearList selectedYear={launchYear} setYear={this.setFilterState}/>
        return launchYearList.map((year) =>{
            return (
                <div key={year} className={`launchYear ${launchYear === year ? "selectedYear":""}`} onClick={() => this.setFilterState("launchYear",year)}>{year}</div>
            )
        })
    }

    renderSuccessfulList = (successfulType) =>{
        const successfulStateType = this.state[successfulType];
        // <BooleanList selectedBoolFlag={successfulStateType} successfulType={successfulType} setYear={this.setFilterState}/>
        return booleanList.map((boolFlag) =>{
            return (
                <div key={boolFlag} className={`successful ${successfulStateType === boolFlag ? `selected-${successfulType}`:""}`} onClick={() => this.setFilterState(successfulType,boolFlag)}>{boolFlag}</div>
            )
        })
    }
    render() {
        // let { program } = this.props;
        console.log("This.state...",this.state);
        return (
            <>
            <div className="filterHeader">
                Filters
            </div>
            <div className="filterFooter">
                <div className="launchYearContainer">
                    <div className="header">Launch Year</div>
                    <div className="yearList">
                        {this.renderLaunchYearList()}
                    </div>
                </div>
                <div className="successLaunch">
                    <div className="header">Successful Launch</div>
                    <div className="successLaunchList">
                        {this.renderSuccessfulList("successfulLaunch")}
                    </div>
                </div>
                <div className="successLand">
                    <div className="header">Successful Landing</div>
                    <div className="successLandList">
                        {this.renderSuccessfulList("successfulLanding")}
                    </div>
                </div>
            </div>
            
            </>
        )
    }
}
Filter.propTypes = {
    fetchSpaceXPrograms: PropTypes.func.isRequired
}
export default Filter;