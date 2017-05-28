const VERIFY = 'VERIFY';
const verify = { type: VERIFY };

export const verifyAge = () => dispatch => {
  dispatch(verify);
}

export default (state = false, action) => {
  switch (action.type) {
    case VERIFY:
      return true;

    default:
      return state;
  }
}