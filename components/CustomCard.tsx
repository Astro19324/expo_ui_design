import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export type TCustomCard = {
  name: string;
  description: string;
};

const CustomCard = ({ name, description }: TCustomCard) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source="https://picsum.photos/seed/696/3000/2000"
          placeholder={{ blurhash }}
          transition={1000}
        />
        <Text style={styles.name}>{name}</Text>
      </View>

      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    color: "black",
    fontSize: 20,
    fontWeight: 600,
  },

  description: {
    fontSize: 16,
    color: "black",
    paddingLeft: 70,
  },
});

export default CustomCard;
