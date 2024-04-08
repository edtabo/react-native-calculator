import {Pressable, Text} from 'react-native';
import {styles, colors} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  onPress: () => void;
}

export const Btns = ({label, color = colors.darkGray, onPress}: Props) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({pressed}) => ({
        ...styles.button,
        width: label === '0' ? 180 : 80,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
      })}>
      <Text
        style={{
          ...styles.buttonText,
          color:
            label !== 'C' && label !== '+/-' && label !== 'del'
              ? colors.textPrimary
              : colors.background,
        }}>
        {label}
      </Text>
    </Pressable>
  );
};
