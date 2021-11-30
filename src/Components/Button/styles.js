import { StyleSheet } from "react-native";

export default StyleSheet.create({
  actions: {
    marginTop: 2,

    flexDirection: "row",
    justifyContent: "space-between",
  },

  action: {
    backgroundColor: "#0facac",
    borderRadius: 8,
    height: 54,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  actionText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});
