import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  Ionicons,
  Octicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "../../configs/colors";

export default function MyTabBar({ state, descriptors, navigation }) {

  const myBars = state?.routes.filter(
    (route) =>
      route.name.toLowerCase() === "home" ||
      route.name.toLowerCase() === "notification" ||
      route.name.toLowerCase() === "logistics" ||
      route.name.toLowerCase() === "profile"
  );

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions?.tabBarStyle?.display === "none") {
    return null;
  }

  
  return (
    <View style={{ flexDirection: "row" }}>
      {myBars.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

       

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.key}
            style={styles.tabContainer}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View>
                    {
                    route.name === 'Home' && <Ionicons name={isFocused  ? 'home' : 'home-outline'} color={ isFocused ? colors.primary : colors.gray} size={20}  /> ||
                    route.name === 'Notification' && <FontAwesome name={isFocused ? 'bell' : 'bell-o'} color={ isFocused ? colors.primary : colors.gray} size={20}  /> ||
                    route.name === 'Logistics' && <MaterialCommunityIcons name={isFocused ? 'truck' : 'truck-outline'} color={ isFocused ? colors.primary : colors.gray} size={20} /> ||
                    route.name === 'Profile' && <MaterialCommunityIcons name={isFocused ? 'account' : 'account-outline'} color={ isFocused ? colors.primary : colors.gray} size={20} />
                    }
                </View>
              <Text
                style={{
                  color: isFocused ? colors.primary : colors.gray,
                  fontSize: 11,
                }}
              >
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    height: 90,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingTop: 23,
  },
});
