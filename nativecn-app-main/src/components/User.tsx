import { Text, View } from "react-native"
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar"

export function User() {
  return (
    <View className="items-center">
      <Avatar className="w-32 h-32 border-4 border-gray-600">
        <AvatarImage source={{ uri: "https://github.com/Mauricio2025.png" }} />
        <AvatarFallback>RG</AvatarFallback>
      </Avatar>

      <Text className="text-white font-bold text-2xl mt-4">
        Mauricio Souza
      </Text>

      <Text className="text-gray-400 text-lg">@Mauricio2025</Text>
    </View>
  )
}
