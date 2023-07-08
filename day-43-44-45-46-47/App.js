import { StatusBar } from 'expo-status-bar';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white pt-4">
      <StatusBar style="auto" />
      <ScrollView className="flex-1 w-full p-4 mt-4">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-4xl text-blue-600 font-bold">Logo</Text>
          <TouchableOpacity className="flex justify-center items-center px-6 py-2 bg-blue-600 rounded-sm">
            <Text className="text-xl text-white font-bold">Sign In</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text className="text-4xl font-normal mt-6">Welcome to native</Text>
          <Text className="text-4xl font-bold text-blue-600">Image Gallery.</Text>
          <Image
            source={require('./assets/images/main.jpg')}
            className="w-full object-fill h-80 mt-4 rounded"
          />
          <Text className="text-xl font-normal mt-6 pb-2">Explore a wild collection of arts. From oil painting to AI generated digital arts, here's a huge collection you would love scrolling.</Text>
          <View className="mt-4">
            <Button
              title='Explore'
              color={'#3B82F6'}
              onPress={() => alert('Button Clicked')}
            />
            <View className="flex items-center justify-center py-4">
              <View className="flex flex-row items-center justify-center py-4">
                <TouchableOpacity className="flex justify-center items-center px-6 py-1 bg-sky-600 rounded-sm">
                  <Text className="text-xl text-white font-bold">AI</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex justify-center items-center px-6 py-1 mx-4 bg-orange-600 rounded-sm">
                  <Text className="text-xl text-white font-bold">Digital Art</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex justify-center items-center px-6 py-1 bg-green-600 rounded-sm">
                  <Text className="text-xl text-white font-bold">Oil</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <SafeAreaView>
          <ImgCard img={require('./assets/images/pic1.jpg')} title="Image Title 1" />
          <ImgCard img={require('./assets/images/pic2.jpg')} title="Image Title 2" />
          <ImgCard img={require('./assets/images/pic3.jpg')} title="Image Title 3" />

          <Text className="text-2xl font-normal mb-4">From the card component</Text>
          
          <Card img={require('./assets/images/pic4.jpg')} title="Image Title 4" />
          <Card img={require('./assets/images/pic5.jpg')} title="Image Title 5" />
        </SafeAreaView>

        <View className="pt-2 pb-8 items-center">
          <Text>Made with ❤ by Abhishek Sen</Text>
        </View>

      </ScrollView>
    </View>
  );
}



const ImgCard = ({ img, title }) => {
  return (
    <View className="flex flex-row flex-wrap justify-start my-4  rounded-2xl bg-gray-900">
      <Image
        source={img}
        className="w-full object-fill h-80 overflow-hidden rounded-2xl"
      />
      <View className="pl-3 pb-4">
        <Text className="py-2 font-bold text-xl text-white">{title}</Text>
        <Text className="pb-2 pr-2 font-bold text-xs text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit perspiciatis tempore mollitia laudantium veritatis ipsam aliquam.</Text>
        <View className="flex flex-row  py-2">
          <TouchableOpacity className="flex justify-center items-center px-6 py-1 bg-sky-600 rounded-sm">
            <Text className="text-xl text-white font-bold">AI</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex justify-center items-center px-6 py-1 mx-3 bg-orange-600 rounded-sm">
            <Text className="text-xl text-white font-bold">Digital Art</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex justify-center items-center px-6 py-1 bg-green-600 rounded-sm">
            <Text className="text-xl text-white font-bold">Oil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
