import { Image, Text, TouchableOpacity, View } from 'react-native';
const Card = ({img,title}) => {
    return (
        <View className="flex flex-row flex-wrap justify-start my-4  rounded-2xl bg-gray-900"
        style={{paddingBottom:5}}
        >
            <Image
                source={img}
                className="w-full h-full overflow-hidden rounded-2xl"
                style={{ width: '100%', height: 300, borderRadius: 20 }}
            />
            <View className="pl-3 pb-4" style={{paddingLeft:5, paddingBottom:5}}>
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

export default Card
