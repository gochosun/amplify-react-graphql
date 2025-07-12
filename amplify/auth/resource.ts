import { auth } from "@aws-amplify/backend";

export const myAuth = auth.defineAuth({
  loginWith: {
    email: true,
  },
});