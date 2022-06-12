import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import {appImages} from '../images/images';
import {styles} from '../styles/cardStyles';

const CustomCard = props => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={appImages.bookmark}
          style={styles.imgRibbon}
          resizeMode={'contain'}>
          <Text style={styles.txtRibbon}>{item.tag}</Text>
        </ImageBackground>
        <Image
          source={{uri: item.img_url}}
          style={styles.imgContainer}
          resizeMode={'contain'}
        />
      </View>

      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <Text style={styles.txtTitle}>{item.title}</Text>
        <View style={styles.flexRow}>
          <Image
            source={{uri: item.img_url}}
            style={styles.imgProFile}
            resizeMode={'cover'}
          />
          <Text style={styles.txtDesc}>{item.desc}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomCard;
