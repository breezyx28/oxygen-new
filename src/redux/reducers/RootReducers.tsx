import { contactsApi } from "../endpoints/contacts";
import { footerApi } from "../endpoints/footer";
import { mainApi } from "../endpoints/main";

import { usersMessagesApi } from "../endpoints/usersMessages";
import { formApi } from "../endpoints/form";

export const Reducers = {
  // Add the generated reducer as a specific top-level slice
  [mainApi.reducerPath]: mainApi.reducer,
  [formApi.reducerPath]: formApi.reducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
  [footerApi.reducerPath]: footerApi.reducer,
  [usersMessagesApi.reducerPath]: usersMessagesApi.reducer,
};
