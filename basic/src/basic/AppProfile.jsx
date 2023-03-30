import React from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

export default function AppProfile() {
  return (
    <>
    <Avatar image="https://pbs.twimg.com/media/Etxj0gtWgAEOnJz?format=jpg&name=large" isNew={true} />
      <Profile image="https://pbs.twimg.com/media/Etxj0gtWgAEOnJz?format=jpg&name=large" name="sonny" title="soccer" isNew={true} />
      <Profile image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" name="kane" title="striker" />
      <Profile image="https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2Ro2/image/RTeFj7WWdMgxwHF6CNZncSVaciQ.jpg" name="aimyon" title="singer" />
    </>
  );
}
