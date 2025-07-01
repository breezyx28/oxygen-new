import { contactsApi } from "../endpoints/contacts";
import { footerApi } from "../endpoints/footer";
import { mainApi } from "../endpoints/main";

import { usersMessagesApi } from "../endpoints/usersMessages";
import { rtkQueryErrorLogger } from "./HandleGlobalErrors";
import { formApi } from "../endpoints/form";
import { bannerApi } from "../endpoints/banner";

export const Middlewares = [
  rtkQueryErrorLogger,
  mainApi.middleware,
  bannerApi.middleware,
  formApi.middleware,
  contactsApi.middleware,
  footerApi.middleware,
  usersMessagesApi.middleware,
];
