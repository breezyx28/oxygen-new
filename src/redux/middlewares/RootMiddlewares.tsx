import { contactsApi } from "../endpoints/contacts";
import { footerApi } from "../endpoints/footer";
import { mainApi } from "../endpoints/main";

import { usersMessagesApi } from "../endpoints/usersMessages";
import { rtkQueryErrorLogger } from "./HandleGlobalErrors";
import { formApi } from "../endpoints/form";

export const Middlewares = [
  rtkQueryErrorLogger,
  mainApi.middleware,
  formApi.middleware,
  contactsApi.middleware,
  footerApi.middleware,
  usersMessagesApi.middleware,
];
