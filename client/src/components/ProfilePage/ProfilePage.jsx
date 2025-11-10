import "./ProfilePage.css";
import ContentHolder from "../ContentHolder";
import BlackBackground from "../BlackBackground";
import { supabase } from "../../supabaseClient.js";

import { useState, useRef, useEffect } from "react";

export default function ProfilePage() {
  const [hover, setHover] = useState(false);
  const [avatar, setAvatar] = useState("/pictures/profile icon.png");
  const changeProfile = useRef(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      const url = user.user_metadata?.avatar_url;
      if (url) {
        setAvatar(url);
      }
    }
    fetchAvatar();
  }, []);

  const handleProfileChange = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const filePath = crypto.randomUUID();
    if (!file) {
      return;
    }
    const { data, error } = await supabase.storage
      .from("profile-pictures")
      .upload(filePath, file);
    if (error) {
      console.log("error handling image");
    }

    const { data: publicData } = supabase.storage
      .from("profile-pictures")
      .getPublicUrl(filePath);

    const publicUrl = publicData.publicUrl;

    const { error: updateError } = await supabase.auth.updateUser({
      data: { avatar_url: publicUrl },
    });
  };

  return (
    <ContentHolder
      margin="40px auto"
      width="60%"
      height="250px"
      flexCenter={false}
    >
      <BlackBackground layerBlur="7px" borderRadius="2px" />
      <div className="profile-page-holder">
        <div className="profile-page-picture-holder">
          <img
            className="profile-page-picture"
            src={avatar}
          />
          <div
            onClick={() => {
              changeProfile.current.click();
            }}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => setHover(false)}
            className={`profile-page-picture-overlay ${hover ? "show" : ""}`}
          >
            <img width="30px" src="/pictures/edit.png" />
            <input
              ref={changeProfile}
              id="change-profile"
              type="file"
              accept="image/*"
              onChange={handleProfileChange}
            />
          </div>
        </div>
        <div className="profile-information">
          <p className="profile-username"> jj </p>
          <p className="profile-description"> makin music like a g</p>
        </div>
        <div className="profile-statistics">
          <p className="number-albums-reviewed"> 25 albums reviewed </p>
          <p className="number-tracks-reviewed"> 450 tracks listened </p>
        </div>
      </div>
    </ContentHolder>
  );
}
