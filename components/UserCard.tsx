import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const UserCard = () => {
  return (
    <View style={styles.box}>
      <View style={styles.textContainer}>
        <Text style={styles.description}>Category</Text>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </View>
      <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={{ blurhash }}
        transition={1000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: "black",
    fontSize: 20,
    fontWeight: 600,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#f0f0f0",
    paddingLeft: 10,
    paddingVertical: 20,
    paddingRight: 20,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2,
  },
  textContainer: {
    flex: 1,
    gap: 5,
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "black",
  },
});

export default UserCard;
