import React from "react";

function Home() {
  return (
    <View style={styles.container}>
      <Text>This is Home</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
