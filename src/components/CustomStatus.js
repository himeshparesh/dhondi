import React from 'react';
import {View, Text, Image} from 'react-native';
import {appColors} from '../colors/colors';
import {styles} from '../styles/statusStyle';

const CustomStatus = props => {
  const {item} = props;

  let bgColor = item.id == 0 ? appColors.black : appColors.transparent;
  let borderColor = item.id == 0 ? appColors.transparent : appColors.blue;
  let imgStyle = item.id == 0 ? {height: 30, width: 30} : styles.img;
  return (
    <View style={styles.statusContainer}>
      <View
        style={[
          styles.imgContainer,
          {
            backgroundColor: bgColor,
            borderColor: borderColor,
          },
        ]}>
        <Image
          source={{uri: item.img_url}}
          style={imgStyle}
          resizeMode={item.id == 0 ? 'contain' : 'cover'}
        />
      </View>
      <Text numberOfLines={1}>{item.title}</Text>
    </View>
  );
};

export default CustomStatus;
