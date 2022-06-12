import React from 'react';

import {TouchableOpacity, View, Text} from 'react-native';
import {appColors} from '../colors/colors';
import {styles} from '../styles/searchStyle';

const CustomFilterItem = props => {
  const {item, onPress, selected} = props;
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View
        style={[
          styles.viewFilterContainer,
          {
            backgroundColor:
              selected == item.id ? appColors.black : appColors.transparent,
          },
        ]}>
        <Text
          style={[
            styles.txtFilter,
            {
              color: selected == item.id ? appColors.white : appColors.black,
            },
          ]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomFilterItem;
