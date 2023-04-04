import { View, Text } from "react-native";
import React, { useState } from "react";
import Index from "../../app";

const AppState = () => {
  const indieIDs = ["user-1", "user-2", "user-3", "user-4"];
  const [chosenIndieID, setChosenIndieID] = useState("");
  const [followers, setFollowers] = useState([]);
  const [followerCount, setFollowerCount] = useState(0);
  const [following, setfollowing] = useState([]);

  const AppState = {
    indieIDs,
    chosenIndieID,
    setChosenIndieID,
    followers,
    setFollowers,
    followerCount,
    setFollowerCount,
    following,
    setfollowing,
  };
  return (
    <View>
      <Index AppState={AppState} />
    </View>
  );
};

export default AppState;
