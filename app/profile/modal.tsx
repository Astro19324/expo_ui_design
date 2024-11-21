import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Modal from "@/components/Modal";
import TButton from "@/components/TButton";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const ProfileModal = () => {
  return (
    <Modal>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source="https://picsum.photos/seed/696/3000/2000"
            placeholder={{ blurhash }}
            transition={1000}
          />
        </View>
        <Text style={styles.name}>John Smith</Text>
        <Text style={styles.description}>
          lajlkfjdlskjfklsjldfjsdlkjflksdjflsjdlkfjsdkljflsdjdlkfjsdflajlkfjdlskjfklsjldfjsdlkjflksdjflsjdlkfjsdkljflsdjdlkfjsdf
        </Text>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.7 : 1 },
            styles.button,
          ]}
        >
          <Text style={styles.text}>Pair</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.7 : 1 },
            styles.button,
          ]}
        >
          <Text style={styles.text}>Report</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  imgContainer: {
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 999,
    backgroundColor: "#0553",
    objectFit: "cover",
  },
  name: {
    fontSize: 25,
  },
  description: {
    textAlign: "center",
    width: "80%",
    fontSize: 15,
  },
  text: {
    fontSize: 17,
  },

  button: {
    marginTop: 20,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    width: 130,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});

export default ProfileModal;
