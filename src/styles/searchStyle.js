import React from 'react';
import {Platform, Dimensions, StyleSheet} from 'react-native';
import {appColors} from '../colors/colors';
var screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  imgSearch: {
    height: 22,
    width: 22,
    position: 'absolute',
    top: 10,
    left: 10,
    tintColor: appColors.searchGray,
    zIndex: 10,
    opacity: 0.5,
  },
  container: {
    flex: 1,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: appColors.white,
    textShadowOffset: {height: 0.5, width: 2},
    shadowColor: appColors.black,
    shadowRadius: 5,
    shadowOpacity: 0.4,
    elevation: 10,
  },

  imgContainer: {
    height: 140,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  txtTitle: {
    fontSize: 15,
    fontWeight: '700',
  },

  imgProFile: {
    height: 22,
    width: 22,
    borderRadius: 22,
  },
  textInput: {
    textAlign: 'left',
    height: 42,
    borderRadius: 30,
    paddingLeft: 40,
    backgroundColor: '#F7F7F7',
  },
  viewFilterContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    marginRight: 10,
  },
  txtFilter: {
    color: appColors.white,
    fontWeight: 'bold',
  },
  imgPro: {
    height: 30,
    width: 30,
    borderRadius: 30,
    position: 'absolute',
    bottom: 30,
    left: 10,
    backgroundColor: appColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
