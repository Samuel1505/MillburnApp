import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class index extends Component {
  render() {
    return (
      <View className="bg-orange-500 flex-1 justify-center items-center">
        <Text className='text-white text-3xl font-semibold'> textInComponent </Text>
      </View>
    )
  }
}

export default index
