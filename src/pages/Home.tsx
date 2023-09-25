import React from "react";
import { ProfileTypes } from "../types";
import Profile from "../components/Profile";
import "./Home.css";

const Home: React.FC = () => {
  const [profile, setProfile] = React.useState<ProfileTypes | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const json: ProfileTypes = await res.json();
        setProfile(json);
      } catch (e: unknown) {
        setError((e as Error).message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-container">
      <Profile
        name={profile.name}
        profession={profile.profession}
        score={profile.score}
        email={profile.email}
      />
    </div>
  );
};

export default Home;
