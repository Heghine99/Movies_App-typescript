import React, {useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from './style';
import colors from '../../assets/colors/colors';
import IMAGE_API from './../../configs/configs';
// import {
//   addAndRemoveLikedListMovies,
//   dislikeListMovies,
//   addSaveList,
//   addRatingList,
//   ratingCount,
// } from '../../state-management/moviesSlice';
// import {Rating} from 'react-native-ratings';
// import BackIcon from '../../components/globalComponents/BackIcon/BackIcon';
// import {DarkModeContext} from '../../components/Context/context';
// import {darkModeStyles} from '../../components/globalComponents/DarkModeStyle/profileDarkModeStyles';

const Details = () => {
  // const {item} = route.params;
  // const likedList = useSelector(state => state.moviesSlice.likedList);
  // const disliked = useSelector(state => state.moviesSlice.disliked);
  // const saveList = useSelector(state => state.moviesSlice.SaveList);
  // const ratingcount = useSelector(state => state.moviesSlice.ratingCount);
  // let ratingX;
  // const dispatch = useDispatch();
  // const {mode} = useContext(DarkModeContext);

  // ratingcount.map(i => {
  //   if (i.id === item.id) {
  //     ratingX = i.count;
  //   }
  // });

  // const ratingCompleted = rating => {
  //   dispatch(ratingCount({id: item.id, count: rating}));

  //   if (rating > 3) {
  //     dispatch(addRatingList(item));
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{uri: IMAGE_API + item.backdrop_path}}
        style={styles.backgroundImage}>
        <View style={styles.backIcon}>
          <BackIcon navigation={navigation} />
          <TouchableOpacity
            onPress={() => {
              dispatch(addAndRemoveLikedListMovies(item));
            }}>
            <AntDesign
              name="heart"
              size={32}
              style={{
                color: likedList.includes(item.id)
                  ? colors.orange
                  : mode
                  ? colors.white
                  : colors.gray,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(dislikeListMovies(item));
            }}>
            <AntDesign
              name="dislike1"
              size={32}
              style={{
                color: disliked.includes(item.id)
                  ? colors.orange
                  : mode
                  ? colors.white
                  : colors.gray,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(addSaveList(item));
            }}>
            <FontAwesome
              name="bookmark"
              size={32}
              style={{
                color: saveList.includes(item.id)
                  ? colors.orange
                  : mode
                  ? colors.white
                  : colors.gray,
              }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View
        style={
          mode ? styles.descriptionWrapper : darkModeStyles.descriptionWrapper
        }>
        <View
          style={[
            styles.heartWrapper,
            {backgroundColor: mode ? colors.white : colors.gray},
          ]}>
          <AntDesign name="caretright" size={32} color={colors.orange} />
        </View>
        <View style={styles.descriptionTextWrapper}>
          <Text
            style={[
              styles.descriptionTitle,
              {color: mode ? colors.black : colors.white},
            ]}>
            {item.original_title}
          </Text>
          <View style={styles.descriptionMoviesDate}>
            <Fontisto name="date" size={20} color={colors.orange} />
            <Text style={styles.descriptionTitleText}>{item.release_date}</Text>
          </View>
          <View style={styles.descriptionVoteAverage}>
            <View style={styles.descriptionItemVoteAverage}>
              <Entypo name="star-outlined" size={20} color={colors.orange} />
              <Text style={styles.descriptionTitleText}>
                {item.vote_average}
              </Text>
            </View>
            <View style={styles.descriptionItemVoteAverage}>
              <AntDesign name="user" size={20} color={colors.orange} />
              <Text style={styles.descriptionTitleText}>{item.vote_count}</Text>
            </View>
            <View style={styles.descriptionItemVoteAverage}>
              <Entypo name="star-outlined" size={20} color={colors.orange} />
              <Text style={styles.descriptionTitleText}>{item.popularity}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.descriptionText}>{item.overview}</Text>
          </View>

          {/* <View style={styles.starCount}>
            <Rating
              tintColor={mode ? 'white' : '#2D3035'}
              type="star"
              startingValue={ratingX}
              ratingCount={5}
              imageSize={30}
              showRating
              onFinishRating={ratingCompleted}
            />
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Details;
