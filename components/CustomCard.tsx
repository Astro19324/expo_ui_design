import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

interface CustomCardProps {
  name: string;
  description: string;
}

const CustomCard = ({ name, description }: CustomCardProps) => {
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
        <Text style={styles.time}>10 m ago</Text>
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

  time: {
    paddingLeft: 100,
    color: "#A0A0A0",
  },
});

export default CustomCard;
