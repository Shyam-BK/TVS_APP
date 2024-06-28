import { View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import Navigator from "./navigation";

export default function App() {
  return (
     <View style={{flex: 1}}>
      <Navigator/>
     </View>
      
    
  );
}
