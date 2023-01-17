import { AppDispatch } from '../../store';
import { SET_THEME } from '../../reducers/config/app/app.slice';

const TRIGGER_DARK_MODE = (payload: boolean) => {
  return (dispatch: AppDispatch) => dispatch(SET_THEME(payload));
};

export { TRIGGER_DARK_MODE };
