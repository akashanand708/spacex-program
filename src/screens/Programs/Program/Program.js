import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import './program.scss';

class Program extends React.PureComponent {

    render() {
        let {
            program: {
                flight_number,
                mission_name,
                mission_id,
                launch_year,
                launch_success,
                launch_landing,
                links
            }
        } = this.props;
        //TODO const missionPatch = get(links, 'mission_patch', '');
        console.log("Program", flight_number, launch_landing);
        return (
            <div className="cardContainer">
                <div className="header">
                    <img src={"https://www.nasa.gov/specials/ccp-press-kit/img/dm2patch.png"} alt={mission_name} />
                </div>
                <div className="footer">
                    <div className="nameNumber">
                        {mission_name} # {flight_number}
                    </div>
                    <div className="missionIds">
                        <div className="title">Mission Ids:</div>
                        <ul>
                            {
                                mission_id.map((missionId) => {
                                    return (
                                        <li key={missionId} className="titleValue">
                                            {missionId}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="title">Launch Year: <span className="titleValue">{launch_year}</span></div>
                    <div className="title">Successful Launch: <span className="titleValue">{launch_success ? launch_success.toString() : ""}</span></div>
                    <div className="title">Successful Landing: <span className="titleValue">{launch_landing ? launch_landing.toString() : ""}</span></div>
                </div>
            </div>
        )
    }
}
Program.propTypes = {
    program: PropTypes.object
}
export default Program;