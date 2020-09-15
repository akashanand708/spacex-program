
import {isEmpty} from 'lodash';

const BASE_API = 'https://api.spacexdata.com/v3';

const computeParams = (params) =>{
  let paramStrings = "";
  if(typeof params === 'object' && !isEmpty(params)){
    const {launchYear:launch_year,successfulLaunch:launch_success, successfulLanding:land_success} = params;
    if(launch_success !== '') paramStrings += `&launch_success=${launch_success}`;
    if(land_success !== '') paramStrings += `&land_success=${land_success}`;
    if(launch_year !== '') paramStrings += `&launch_year=${launch_year}`;
  }
  return paramStrings;
}
export const fetchSpaceProgram = function (params) {
  const computedParams = computeParams(params);
  return fetch(BASE_API + `/launches?limit=100${computedParams}`,
    {
      method: 'GET'
    }).then((response) => {
      return response.json();
    }).catch((error) => {
      return error;
    })
};