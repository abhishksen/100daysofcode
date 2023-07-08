import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
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
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image blurRadius={30} source={require('../assets/images/bgImg.png')}
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex flex-1">
        <View style={{ height: '7%' }} className="mx-4 relative z-50">
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
    </View>
  );
}
