import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import CustomSearchCard from './CustomSearchCard';

// class TabItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <FlatList
//         data={[
//           {
//             id: 1,
//             title: 'apple',
//             desc: 'desc',
//             img_url:
//               'https://www.wallpaperbetter.com/wallpaper/359/932/939/tiger-fractal-face-eyes-pattern-stripes-grass-art-high-resolution-pictures-1080P-wallpaper.jpg',
//           },
//           {
//             id: 2,
//             title: 'ball',
//             desc: 'desc',
//             img_url:
//               'https://www.wallpaperbetter.com/wallpaper/359/932/939/tiger-fractal-face-eyes-pattern-stripes-grass-art-high-resolution-pictures-1080P-wallpaper.jpg',
//           },
//           {
//             id: 3,
//             title: 'cat',
//             desc: 'desc',
//             img_url:
//               'https://www.wallpaperbetter.com/wallpaper/359/932/939/tiger-fractal-face-eyes-pattern-stripes-grass-art-high-resolution-pictures-1080P-wallpaper.jpg',
//           },
//           {
//             id: 4,
//             title: 'dog',
//             desc: 'desc',
//             img_url:
//               'https://www.wallpaperbetter.com/wallpaper/359/932/939/tiger-fractal-face-eyes-pattern-stripes-grass-art-high-resolution-pictures-1080P-wallpaper.jpg',
//           },
//         ]}
//         numColumns={2}
//         contentContainerStyle={{marginHorizontal: 20, paddingVertical: 20}}
//         keyExtractor={item => item.id}
//         showsVerticalScrollIndicator={false}
//         renderItem={({item, index}) => (
//           <View
//             style={{
//               width: data.length != index ? '49%' : '100%',
//               marginRight: index % 2 == 0 ? 10 : 0,
//             }}>
//             <CustomSearchCard item={item} />
//           </View>
//         )}
//       />
//     );
//   }
// }

const TabItem = () => (
  <View>
    <Text>Tab 1</Text>
  </View>
);

export default TabItem;
