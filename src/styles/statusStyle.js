import React from 'react';
import {Platform, Dimensions, StyleSheet} from 'react-native';
import {appColors} from '../colors/colors';
var screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  statusContainer: {
    marginRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth / 4.4,
  },
  imgContainer: {
    height: 75,
    width: 75,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: appColors.blue,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
});
