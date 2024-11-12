import RootRouter from '@screens/RootRouter'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@api/queryClient'

const Root = () => {
  return (
    <>
      <RootRouter />
    </>
  )
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle={'dark-content'}
        />
        <GestureHandlerRootView>
          <NavigationContainer>
            <Root />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}

export default App
