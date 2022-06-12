import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {setSelectedLog} from 'react-native/Libraries/LogBox/Data/LogBoxData';
import {appColors} from '../colors/colors';
import CustomFilterItem from '../components/CustomFilterItem';
import CustomSearchCard from '../components/CustomSearchCard';
import {appImages} from '../images/images';
import {styles} from '../styles/searchStyle';

var screenWidth = Dimensions.get('window').width;

const Search = ({navigation}) => {
  useEffect(() => {}, []);

  const [search, setsearch] = useState('');
  const [selected, setselected] = useState(1);
  const [filters, setfilter] = useState([
    {id: 1, title: 'Best of Behnace'},
    {id: 2, title: 'Graphic Design'},
    {id: 3, title: 'Photography'},
    {id: 4, title: 'Illustractor'},
    {id: 5, title: 'UI/UX'},
  ]);
  const [data, setData] = useState([
    {
      id: 1,
      title: 'apple',
      desc: 'desc',
      img_url:
        'https://www.wallpaperbetter.com/wallpaper/359/932/939/tiger-fractal-face-eyes-pattern-stripes-grass-art-high-resolution-pictures-1080P-wallpaper.jpg',
    },
    {
      id: 2,
      title: 'ball',
      desc: 'desc',
      img_url:
        'https://www.wallpaperbetter.com/wallpaper/359/932/939/tiger-fractal-face-eyes-pattern-stripes-grass-art-high-resolution-pictures-1080P-wallpaper.jpg',
    },
    {
      id: 3,
      title: 'cat',
      desc: 'desc',
      img_url:
        'https://www.wallpaperbetter.com/wallpaper/359/932/939/tiger-fractal-face-eyes-pattern-stripes-grass-art-high-resolution-pictures-1080P-wallpaper.jpg',
    },
    {
      id: 4,
      title: 'dog',
      desc: 'desc',
      img_url:
        'https://www.wallpaperbetter.com/wallpaper/359/932/939/tiger-fractal-face-eyes-pattern-stripes-grass-art-high-resolution-pictures-1080P-wallpaper.jpg',
    },
  ]);

  const searchData = text => {
    let dataList = [...data];
    const newData = dataList.filter(item => {
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setData(newData);
    setsearch(text);
  };

  const onPressFilterItem = item => {
    setselected(item.id);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: appColors.white}}>
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <Image
          source={appImages.search}
          style={styles.imgSearch}
          resizeMode={'contain'}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={text => searchData(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder=""
        />
      </View>
      <View style={{height: 40, marginTop: 15, marginHorizontal: 15}}>
        <FlatList
          contentContainerStyle={{marginHorizontal: 10}}
          data={filters}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginRight: 5}}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CustomFilterItem
              item={item}
              selected={selected}
              onPress={item => onPressFilterItem(item)}
            />
          )}
        />
      </View>
      <FlatList
        data={data}
        numColumns={2}
        contentContainerStyle={{marginHorizontal: 20, paddingVertical: 20}}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View
            style={{
              width: data.length != index ? '49%' : '100%',
              marginRight: index % 2 == 0 ? 10 : 0,
            }}>
            <CustomSearchCard item={item} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Search;
