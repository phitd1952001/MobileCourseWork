import React, { useContext, useState } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FlatList } from "react-native";
import { HikingContext } from "../../../services/hikings/hiking.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "../components/search.component";
import { HikingInfoCard } from "../components/hiking-info-card.component";
import styled from "styled-components";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Modal } from "react-native-paper";
import { UpSert } from "../components/upSert.component";

const HikingScreen = () => {
  const { hikings, errors } = useContext(HikingContext);
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20, width: 300 };
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
      <TouchableOpacity onPress={showModal} style={styles.createButton}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <UpSert onClose= {()=>setVisible(false)}/>
      </Modal>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  createButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "green",
    borderRadius: 50,
    width: 65,
    height: 65,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default HikingScreen;
