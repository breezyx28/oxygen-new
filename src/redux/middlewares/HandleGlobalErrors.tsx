import { isRejectedWithValue } from "@reduxjs/toolkit";
// import Toast from 'src/components/alerts/Toasts';

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger =
  (api: any) => (next: any) => (action: any) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
      console.log(action);

      const error = action.payload; // Assuming the error object is stored in the payload

      // // @ts-ignore
      // if (error?.status === 'FETCH_ERROR') {
      //   // alert("Internet Issue ... couldn't fetch results due to internet weakness");
      //   Toast({ openModal: true, message: error?.errors, type: 'error' });
      // }

      console.log("global-error: ", error);
    }

    return next(action);
  };
