import React from 'react'

import {View, ActivityIndicator} from 'react-native'

import commonStyles from '../../commonStyles'

export default function Loading() {

  return (
    <View style={{backgroundColor: "#fff", flex: 1, justifyContent: "center", alignItems: "center"}}>
      <ActivityIndicator
        size="large"
        color={commonStyles.colors.primary}
      />
    </View>
  )
  
}