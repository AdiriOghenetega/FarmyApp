import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import colors from "../../../configs/colors";
import ListCard from "../ListCard";

const Notifications = [
  {
    id: 1,
    title: "Logistics Notification",
    type: "logistics",
    CompText: "Damilare Afolabi mentioned you in a comment",
  },

  {
    id: 2,
    title: "Logistics Notification",
    type: "logistics",
    CompText: "Confirm your Email Address to complete your profile",
  },

  {
    id: 3,
    title: "Logistics Notification",
    type: "logistics",
    CompText: "Damilare Afolabi mentioned you in a comment",
  },
];

const VirtualizedList = ({ children }) => {
  return (
    <FlatList
      data={[]}
      keyExtractor={() => "key"}
      renderItem={null}
      ListHeaderComponent={<>{children}</>}
    />
  );
};

const LogisticsNotification = () => {
  return (
    <VirtualizedList style={styles.container}>
      <FlatList
        data={Notifications}
        keyExtractor={(Notification) => Notification.id.toString()}
        renderItem={({ item }) => (
          <ListCard
            title={item.title}
            compText={item.CompText}
            type={item.type}
          />
        )}
      />
    </VirtualizedList>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 10,
    height: 100,
  },
});
export default LogisticsNotification;
