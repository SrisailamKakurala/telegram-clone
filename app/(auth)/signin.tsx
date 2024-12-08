import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CustomSafeAreaView from '@/components/ui/CustomSafeAreaView'
import LottieView from 'lottie-react-native'
import { siginStyles } from '@/styles/signinStyles'
import CustomText from '@/components/ui/CustomText'

const sign = () => {

  const hangleSignin = async () => {
    console.log('hangleSignin')
  }

  return (
    <CustomSafeAreaView style={siginStyles.container}>
      <LottieView 
      autoPlay
      loop
      source={require('@/assets/animations/telegram.json')}
      style={siginStyles.animation}
      />

      <CustomText variant='h3' style={siginStyles.title}>Welcome to Telegram</CustomText>
      <CustomText variant='h6'  style={siginStyles.message}>Messages are end-to-end encrypted and can self-destruct.</CustomText>

      <TouchableOpacity activeOpacity={0.8} style={siginStyles.loginBtn} onPress={hangleSignin}>
        <Image source={require('@/assets/icons/google.png')} style={siginStyles.googleIcon} />
        <CustomText variant='h4' style={siginStyles.loginBtnText}>Sign in with Google</CustomText>
      </TouchableOpacity>
    </CustomSafeAreaView>
  )
}

export default sign