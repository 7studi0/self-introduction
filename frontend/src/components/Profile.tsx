import React from "react";
import { ProfileTypes } from "../types";

const Profile: React.FC<ProfileTypes> = ({
  name,
  profession,
  score,
  email,
}) => {
  return (
    <>
      <h2>About Me</h2>
      <p>
        Hello! My name is {name}. I am a {profession}.
      </p>
      <p>My TOEIC score is {score}.</p>
      <h2>Contact</h2>
      <p>Email: {email}</p>
    </>
  );
};

export default Profile;
