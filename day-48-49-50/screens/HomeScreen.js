import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MagnifyingGlassIcon, XMarkIcon } from 'react-native-heroicons/outline'
import { CalendarDaysIcon, MapPinIcon } from 'react-native-heroicons/solid'
import { debounce } from "lodash";
import { theme } from '../theme';
import { fetchLocations, fetchWeatherForecast } from '../api/weather';
import * as Progress from 'react-native-progress';
import { StatusBar } from 'expo-status-bar';
import { weatherImages } from '../constants';
import { getData, storeData } from '../utils/asyncStorage';

export default function HomeScreen() {
  return (
    <View className="flex-1 flex-col" >
      <StatusBar style="light" />
      <ImageBackground blurRadius={5} resizeMode='cover' source={require('../assets/images/bgImg.png')}
        className="flex-1 justify-center"
        style={{ height: '100%' }}
      >
        <SafeAreaView className="flex flex-1">
          <View style={{ height: '30%', marginLeft:'10px'}}  className="mx-4 relative z-50">
            <View className="flex-row justify-end items-center rounded-full"
              style={{ backgroundColor: theme.bgWhite(0.2) }}>
              <TextInput
                placeholder='Search City'
                placeholderTextColor={'lightgray'}
                className="pt-6 h-10 flex-1 text-base text-white"
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
