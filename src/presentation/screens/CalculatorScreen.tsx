import {Text, View} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';
import {Btns} from '../components/Btns';
import {useCalculator} from '../hooks/useCalculator';
const btns = [
  [
    {label: 'C', color: colors.lightGray},
    {label: '+/-', color: colors.lightGray},
    {label: 'del', color: colors.lightGray},
    {label: '÷', color: colors.orange, action: 'divide'},
  ],
  [
    {label: '7', action: 'number'},
    {label: '8', action: 'number'},
    {label: '9', action: 'number'},
    {label: 'x', color: colors.orange, action: 'multiply'},
  ],
  [
    {label: '4', action: 'number'},
    {label: '5', action: 'number'},
    {label: '6', action: 'number'},
    {label: '-', color: colors.orange, action: 'subtract'},
  ],
  [
    {label: '1', action: 'number'},
    {label: '2', action: 'number'},
    {label: '3', action: 'number'},
    {label: '+', color: colors.orange, action: 'add'},
  ],
  [
    {label: '0', action: 'number'},
    {label: '.', action: 'number'},
    {label: '=', color: colors.orange},
  ],
];

export const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    formula,
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.calculatorContainerTop}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {formula}
        </Text>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
          {prevNumber === '0' ? '' : prevNumber}
        </Text>
      </View>
      {btns.map((item, index) => (
        <View key={index} style={styles.calculatorContainerBtns}>
          {item.map((element, indexInner) => (
            <Btns
              key={indexInner}
              label={element.label}
              color={element.color}
              onPress={() => {
                if (element.label === 'C') clean();
                else if (element.label === 'del') deleteOperation();
                else if (element.label === '+/-') toggleSign();
                else if (element.label === '=') calculateResult();
                else if (element.action === 'number') {
                  buildNumber(element.label);
                } else if (element.action === 'divide') divideOperation();
                else if (element.action === 'multiply') multiplyOperation();
                else if (element.action === 'subtract') subtractOperation();
                else if (element.action === 'add') addOperation();
              }}
            />
          ))}
        </View>
      ))}
    </View>
  );
};
