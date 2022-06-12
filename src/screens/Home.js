import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
  LogBox,
  Image,
} from 'react-native';
import CustomStatus from '../components/CustomStatus';
import CustomCard from '../components/CustomCard';
import {appColors} from '../colors/colors';

const Home = ({navigation}) => {
  useEffect(() => {}, []);

  const [statusList, setstatusList] = useState([
    {
      id: 0,
      is_live: 0,
      title: '+ add',
      img_url:
        'https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-512.png',
    },
    {
      id: 1,
      is_live: 1,
      title: 'Kwaku Amprako',
      img_url:
        'https://mir-s3-cdn-cf.behance.net/projects/max_808/e289ab144301567.Y3JvcCwyNTE1LDE5NjcsMjQyLDQwNA.png',
    },
    {
      id: 2,
      is_live: 0,
      title: 'Videos',
      img_url:
        'https://mir-s3-cdn-cf.behance.net/projects/max_808/2cfa54144489473.Y3JvcCw1NDAwLDQyMjMsMCwxNDgz.jpg',
    },
    {
      id: 3,
      is_live: 0,
      title: '#photographer',
      img_url:
        'https://mir-s3-cdn-cf.behance.net/projects/max_808/810205143888983.Y3JvcCw0NDA0LDM0NDQsMCwzODE.jpg',
    },
    {
      id: 4,
      is_live: 0,
      title: '#motion',
      img_url:
        'https://mir-s3-cdn-cf.behance.net/projects/max_808/2cfa54144489473.Y3JvcCw1NDAwLDQyMjMsMCwxNDgz.jpg',
    },
  ]);
  const [posts, setposts] = useState([
    {
      id: 1,
      title: 'CUBOZOA',
      desc: 'Ekaterina belinskaya',
      tag: 'Ph',
      img_url:
        'https://www.wallpaperbetter.com/wallpaper/359/932/939/tiger-fractal-face-eyes-pattern-stripes-grass-art-high-resolution-pictures-1080P-wallpaper.jpg',
    },
    {
      id: 2,
      title: 'Coney Island',
      desc: 'Ludwing Favre',
      tag: 'Ph',
      img_url:
        'https://www.wallpaperbetter.com/wallpaper/359/932/939/tiger-fractal-face-eyes-pattern-stripes-grass-art-high-resolution-pictures-1080P-wallpaper.jpg',
    },
    {
      id: 3,
      title: 'Alkhathlan Holding Co - Brand',
      desc: 'Lana Services',
      tag: 'Ph',
      img_url:
        'https://www.wallpaperbetter.com/wallpaper/359/932/939/tiger-fractal-face-eyes-pattern-stripes-grass-art-high-resolution-pictures-1080P-wallpaper.jpg',
    },
    {
      id: 4,
      title: 'Monochrom Tokyo',
      desc: 'Shu',
      tag: 'Gr',
      img_url:
        'https://www.wallpaperbetter.com/wallpaper/359/932/939/tiger-fractal-face-eyes-pattern-stripes-grass-art-high-resolution-pictures-1080P-wallpaper.jpg',
    },
  ]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: appColors.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{height: 115}}>
          <FlatList
            contentContainerStyle={{marginHorizontal: 10}}
            data={statusList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginRight: 1}}
            keyExtractor={item => item.id}
            renderItem={({item}) => <CustomStatus item={item} />}
          />
        </View>
        <>
          <FlatList
            data={posts}
            contentContainerStyle={{marginHorizontal: 20, paddingVertical: 25}}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <CustomCard item={item} />}
          />
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
