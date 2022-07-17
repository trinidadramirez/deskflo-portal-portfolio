import { userAwaiting, userSuccess, userFail } from "../slices/UserSlice";
import { getUser } from "../api/userApi";

export const getUserAccount = () => async (dispatch) => {
  try {
    dispatch(userAwaiting());
    const result = await getUser();
    
    if (result.user && result.user._id) {
      return dispatch(userSuccess(result.user));
    }
  } catch (error) {
    dispatch(userFail(error));
  }
};
