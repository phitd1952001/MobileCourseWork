import React, { useContext } from "react";
import { View, Alert } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

import {
  HikingCard,
  HikingCardCover,
  Info,
  Rating,
  Section,
  HikingTitle,
  HikingDifficultLevel,
  HikingDate,
  DeleteBtn,
} from "./hiking-info-card.styles";

import { HikingContext } from "../../../services/hikings/hiking.context";

const images = [
  "https://images.pexels.com/photos/532803/pexels-photo-532803.jpeg?cs=srgb&dl=pexels-pixabay-532803.jpg&fm=jpg",
  "https://watermark.lovepik.com/photo/20211202/large/lovepik-mountaineering-girl-playing-with-mobile-phone-picture_501394352.jpg",
  "https://image.shutterstock.com/image-photo/two-mountaineers-male-female-trekking-260nw-2230380303.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6bndpFPlmdq7cN2kzmn_x-6u2SMDougiE4mUxLlmVCKyQeB9D37MaGfIoi8axNJgfYs&usqp=CAU",
  "https://nguoivietnam.vn/wp-content/uploads/2023/03/jft.jpeg",
];

export const HikingInfoCard = ({ hiking = {} }) => {
  const ratingArray = Array.from(new Array(Math.floor(5)));
  let randomNumber = Math.floor(Math.random() * 4);

  const { deleteHiking } = useContext(HikingContext);

  const onDelete = () =>{
    Alert.alert('Confirm', 'Do You Want To Delete This?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => deleteHiking(hiking.id)},
    ]);
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return month + "-" + day + "-" + year;
  };

  return (
    <HikingCard elevation={5}>
      <View>
        <HikingCardCover source={{ uri: images[randomNumber] }} />
      </View>
      <Info>
        <HikingTitle varient="label">{hiking.name}</HikingTitle>
        <Rating>
          {ratingArray.map((_, i) => (
            <SvgXml key={i} xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Section>
          <HikingDate varient="body">
            Packing Available: {hiking.parkingAvailable ? "YES" : "NO"}
          </HikingDate>
        </Section>
        <Section>
          <HikingDate varient="body">
            Date: {formatDate(hiking.date)}
          </HikingDate>
          <HikingDifficultLevel varient="hint">
            Difficult Level: {hiking.difficultLevel}
          </HikingDifficultLevel>
        </Section>
        <Section>
          <HikingDate varient="body">
            Length Of Hike: {hiking.lengthOfHike}
          </HikingDate>
          <HikingDifficultLevel varient="hint">
            Location: {hiking.location}
          </HikingDifficultLevel>
        </Section>
        <Section>
          <HikingDate varient="body">
            Description: {hiking.description}
          </HikingDate>
        </Section>
        <DeleteBtn
          onPress={onDelete}
          title="Delete"
          color="#fc0303"
        ></DeleteBtn>
      </Info>
    </HikingCard>
  );
};
