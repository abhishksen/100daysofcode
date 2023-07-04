import { StatusBar } from 'expo-status-bar';
import { Image, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image source={require('../assets/bgImg.jpg')}
      className="absolute w-full h-full"
      />
    </View>
  );
}
