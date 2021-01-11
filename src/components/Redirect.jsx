import React, { useEffect } from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/functions';
import {useHistory, useLocation} from 'react-router'

const RedirectPage = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/dashboard');
      }
      const access_token = getParamValues(location.hash);
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
      localStorage.setItem('params', JSON.stringify(access_token));
      localStorage.setItem('expiry_time', expiryTime);
      history.push('/dashboard');
    } catch (error) {
      history.push('/');
    }
  }, [history, location.hash])

  return <div>Redirect Page</div>;
};
export default RedirectPage;