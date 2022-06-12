import React from 'react';
import {View, Text, Image} from 'react-native';
import {appColors} from '../colors/colors';
import {styles} from '../styles/searchStyle';

const CustomSearchCard = props => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{uri: item.img_url}}
          style={styles.imgContainer}
          resizeMode={'cover'}
        />
      </View>

      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <View style={styles.imgPro}>
          <Image
            source={{uri: item.img_url}}
            style={styles.imgProFile}
            resizeMode={'cover'}
          />
        </View>
        <Text style={styles.txtTitle}>{item.title}</Text>
      </View>
    </View>
  );
};

export default CustomSearchCard;
