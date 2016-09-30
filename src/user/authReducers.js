import { fromJS } from 'immutable';

import {
  ACCOUNT_ADD_SUCCEEDED,
  LOGIN_SUCCEEDED,
} from './userActions';

const initialState = fromJS({
  email: '',
  apiKey: '',
  realm: '',
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_ADD_SUCCEEDED: {
      return state.merge({
        realm: action.realm,
      });
    }
    case LOGIN_SUCCEEDED:
      return state.merge({
        email: action.email,
        apiKey: action.apiKey,
      });
    default:
      return state;
  }
};

export default reducer;