import {StyleSheet} from 'react-native';
import colors from './../../assets/colors/colors';

export const styles = StyleSheet.create({
  container: {
    color: colors.white,
    flex: 1,
  },
  menuMovies: {
    marginHorizontal: 30,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ProfilUserName: {
    fontFamily: 'Lato-Bold',
    fontSize: 26,
    fontWeight: '700',
    color: colors.black,
  },
  ProfilUserText: {
    fontFamily: 'Lato-Bold',
    fontSize: 15,
    color: colors.darkGray,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },

  // Search

  searchMovie: {
    marginHorizontal: 30,
  },
  ItemView: {
    // height: 50,
    backgroundColor: colors.gray,
    paddingTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  inputItemText: {
    width: 240,
    height: 50,
    backgroundColor: 'white',
    marginHorizontal: 10,
    padding: 5,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },
  searchMovieInput: {
    marginTop: 20,
    paddingLeft: 15,
    paddingVertical: 8,
    backgroundColor: colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
  },
  searchImage: {
    borderRadius: 5,
  },
  textInput: {
    marginLeft: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    fontWeight: '700',
    color: colors.black,
  },
  searchItemImage: {
    width: 40,
    height: 40,
  },
  moviesCategories: {
    marginTop: 20,
  },
  moviesCategoriesTitle: {
    alignItems: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moviesCategoriesTitleText: {
    fontFamily: 'Lato-Bold',
    fontSize: 26,
    fontWeight: '700',
    color: colors.black,
  },
  moviesCategoriesItem: {
    paddingVertical: 20,
  },
  categoriesItem: {
    width: 80,
    height: 90,
    backgroundColor: colors.gray,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
  },
  categoriesItemText: {
    ontFamily: 'Lato-Bold',
    fontSize: 12,
    fontWeight: '700',
    color: colors.darkGray,
  },
});
