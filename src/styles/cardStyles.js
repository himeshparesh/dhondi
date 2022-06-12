import {StyleSheet, Platform, Dimensions} from 'react-native';
import {appColors} from '../colors/colors';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    height: 280,
    marginBottom: 15,
    borderRadius: 20,
    backgroundColor: appColors.white,
    textShadowOffset: {height: 0.5, width: 2},
    shadowColor: appColors.black,
    shadowRadius: 5,
    shadowOpacity: 0.4,
    elevation: 10,
  },

  imgContainer: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtDesc: {
    fontSize: 15,
    paddingLeft: 5,
  },
  imgProFile: {
    height: 25,
    width: 25,
    borderRadius: 25,
  },
  imgRibbon: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    tintColor: appColors.golden,
  },
  txtRibbon: {
    color: appColors.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
});
