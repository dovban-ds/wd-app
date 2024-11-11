import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Hello, developer!</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
