import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {getPosts} from '../../state-management/reducers/moviesReducer/moviesSlice';
import categoriesIcons from './categoriesIconHome';
import Loading from '../../components/GlobalComponents/Loading/loading';
import {getSearchResult} from '../../state-management/reducers/searchReducer/searchSlice';
import {styles} from './style';
import colors from './../../assets/colors/colors';
const profile = require('./../../assets/images/ProfileImage.jpg');
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownSearch from '../../components/DropDownSearch/dropDownSEarch';
import FlatListMovies from '../../components/GlobalComponents/FlatList/flatList';
import {DarkModeContext} from '../../components/Context/context';
import {darkModeStyles} from '../../components/GlobalComponents/DarkModeStyle/style';
import {Categories} from './../../types/items';

import {useAppSelector, useAppDispatch} from '../../state-management/hooks';

const Home = ({navigation}) => {
  const mode = useContext(DarkModeContext);
  const searchResults = useAppSelector(
    state => state.searchSlice.searchResult.results,
  );
  const loading = useAppSelector(state => state.moviesSlice.loading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const [searchResult] = useState<string[]>([]);
  const [searching, setSearching] = useState<boolean>(false);

  const renderCategoriesItem = ({item}: {item: Categories}) => {
    return (
      <TouchableOpacity>
        <View
          style={[styles.categoriesItem, {marginLeft: item.id === 1 ? 20 : 0}]}>
          <MaterialCommunityIcons
            name={item.iconName}
            size={40}
            color={colors.black}
          />
          <Text style={styles.categoriesItemText}>{item.categoria}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleChangeInput = (text: string | number) => {
    setSearching(true);
    if (text) {
      dispatch(getSearchResult());
    } else {
      setSearching(false);
      dispatch(getSearchResult());
    }
  };

  return (
    <View style={mode ? styles.container : darkModeStyles.container}>
      {loading ? (
        <Loading size={100} />
      ) : (
        <ScrollView>
          {/* Header */}
          <SafeAreaView>
            <View style={styles.menuMovies}>
              <View>
                <Text style={[styles.ProfilUserName, {color: colors.black}]}>
                  Hello Heghine
                </Text>
                <Text style={styles.ProfilUserText}>Let's watch today </Text>
              </View>
              <TouchableOpacity>
                <Image source={profile} style={styles.profileImage} />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
          {/* Search */}
          <View style={styles.searchMovie}>
            <View style={styles.searchMovieInput}>
              <AntDesign name="search1" size={28} color={colors.black} />
              <TextInput
                style={styles.textInput}
                placeholder="Search Movies"
                onChangeText={handleChangeInput}
                defaultValue={''}
              />
            </View>
            {searchResult && searching && (
              <DropDownSearch
                searchResult={searchResults}
                navigation={navigation}
              />
            )}
          </View>

          {/* Categories */}
          <View style={styles.moviesCategories}>
            <View style={styles.moviesCategoriesTitle}>
              <Text
                style={[
                  styles.moviesCategoriesTitleText,
                  {color: mode ? colors.black : colors.white},
                ]}>
                Categories
              </Text>
              <Text style={{color: mode ? colors.black : colors.white}}>
                See All
              </Text>
            </View>
            <View style={styles.moviesCategoriesItem}>
              <FlatList
                data={categoriesIcons}
                renderItem={renderCategoriesItem}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          {/* New Moview */}
          <FlatListMovies navigation={navigation} screenName="Home" />
        </ScrollView>
      )}
    </View>
  );
};
export default Home;
