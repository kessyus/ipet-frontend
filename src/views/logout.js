import { logoutAction } from "../store/actions/auth";
import { useDispatch } from 'react-redux';

const Logout = () => {
  const dispatch = useDispatch();
  dispatch(logoutAction());
  return 0;
}

export default Logout;