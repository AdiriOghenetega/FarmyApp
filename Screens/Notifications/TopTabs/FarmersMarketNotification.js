import { StyleSheet, FlatList } from "react-native";
import ListCard from "../ListCard";

const Notifications = [
  {
    id: 1,
    title: "Product Rating Notification",
    type: "rating",
    CompText: "Damilare Afolabi mentioned you in a comment",
  },

  {
    id: 2,
    title: "Order notification",
    type: "orderNotification",
    CompText: "Confirm your Email Address to complete your profile",
  },

  {
    id: 3,
    title: "Order cancelled",
    type: "orderCanceled",
    CompText: "Damilare Afolabi mentioned you in a comment",
  },

  {
    id: 4,
    title: "Product Rating Notification",
    type: "rating",
    CompText: "Check out this new products from FoodCo",
  },

  {
    id: 5,
    title: "Order notification",
    type: "orderNotification",
    CompText: "Check out this new products from FoodCo",
  },

  {
    id: 6,
    title: "Product Rating Notification",
    type: "rating",
    CompText: "Check out this new products from FoodCo",
  },

  {
    id: 7,
    title: "Order notification",
    type: "orderNotification",
    CompText: "Check out this new products from FoodCo",
  },

  {
    id: 8,
    title: "Product Rating Notification",
    type: "rating",
    CompText: "Check out this new products from FoodCo",
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

const FarmersMarketNotification = () => {
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

export default FarmersMarketNotification;

const styles = StyleSheet.create({
  container: {
    borderWidth: 10,
    height: 100,
  },
});
