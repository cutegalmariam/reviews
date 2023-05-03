import React from "react";
import Profile from "./Profile";

const Profiles = ({ profiles, displayNewProfile }) => {
  return (
    <section>
      <div>
        {profiles.map((profile) => {
          return (
            <Profile
              key={profile.profile}
              {...profile}
              displayNewProfile={displayNewProfile}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Profiles;
