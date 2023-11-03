import React from 'react';
export default function Header() {
  const O_LOGIN_URL =
  "https://queen.outseta.com/auth?widgetMode=login#o-anonymous";
const O_SIGNUP_URL =
  "https://queen.outseta.com/auth?widgetMode=register#o-anonymous";
const O_PROFILE_URL = "https://queen.outseta.com/profile#o-authenticated";
const O_LOGOUT_URL = "/#o-logout-link";
  return (
    <div className="">
      <button type="button">Download</button>
      <nav>
            <a href={O_LOGIN_URL}>Login</a>
            <a href={O_SIGNUP_URL}>Signup</a>
            <a href={O_PROFILE_URL}>Profile</a>
            <a href={O_LOGOUT_URL}>Logout</a>
          </nav>
    </div>
  );
}
