import React, { useEffect, useState, useContext } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FlatList, View, StyleSheet, StatusBar } from "react-native";
import { HikingContext } from "../../../services/hikings/hiking.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "../components/search.component";
import { HikingInfoCard } from "../components/hiking-info-card.component";

const HikingScreen = () => {
  const { hikings, errors } = useContext(HikingContext);
  console.log(hikings);
  console.log(errors);

  return (
    <SafeArea>
      <Search />
      <FlatList
        data={hikings}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="medium">
            <HikingInfoCard hiking={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeArea>
  );
};

export default HikingScreen;
