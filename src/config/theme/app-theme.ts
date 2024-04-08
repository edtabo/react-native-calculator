import { StyleSheet } from 'react-native';

export const colors = {
  darkGray: '#2d2d2d',
  lightGray: '#9b9b9b',
  orange: '#ff9427',

  textPrimary: 'white',
  textSecondary: '#666',
  background: 'black',
};

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background,
    flex: 1,
  },
  calculatorContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  calculatorContainerTop: {
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  mainResult: {
    color: colors.textPrimary,
    fontSize: 70,
    fontWeight: '400',
    textAlign: 'right',
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    fontWeight: '300',
    textAlign: 'right',
  },
  calculatorContainerBtns: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    backgroundColor: colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: colors.textPrimary,
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center',
  },
  buttonO: {
    flex: 2,
  }
});
