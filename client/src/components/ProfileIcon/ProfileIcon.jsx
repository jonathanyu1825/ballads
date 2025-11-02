import "./ProfileIcon.css";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export default function ProfileIcon({ user, onClick }) {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const {
  //       data: { user },
  //     } = await supabase.auth.getUser();
  //     setUser(user);
  //   };
  //   fetchUser();

  //   const { data: authListener } = supabase.auth.onAuthStateChange(
  //     (_event, session) => {
  //       setUser(session?.user ?? null);
  //     }
  //   );

  //   return () => {
  //     authListener.subscription.unsubscribe();
  //   };
  // }, []);
  return (
    <div onClick = {onClick}>
      {user ? (
        <img id="profile-pic" src="/pictures/bad.png" />
      ) : (
        <div id="login"> login </div>
      )}
    </div>
  );
}
