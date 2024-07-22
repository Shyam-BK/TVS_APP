import { View } from "react-native";
import store from "./redux/store";
import Navigator from "./navigation";
import { Provider as ReduxProvider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <ReduxProvider store={store}>
      <Navigator />
    </ReduxProvider>
  );
}
