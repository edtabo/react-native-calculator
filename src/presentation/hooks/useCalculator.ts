import { useEffect, useRef, useState } from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '/',
}

export const useCalculator = () => {
  const [number, setNumber] = useState<string>('0');
  const [prevNumber, setPrevNumber] = useState<string>('0');
  const [formula, setFormula] = useState<string>('');

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number} `);
    } else setFormula(number);
  }, [number]);

  useEffect(() => {
    const subResult: number = calculateSubResult();
    setPrevNumber(subResult.toString());
  }, [formula]);

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
    setFormula('');
    lastOperation.current = undefined;
  };

  // delete last number
  const deleteOperation = () => {
    let currentSign: string = '';
    let temporalNumber: string = number;
    if (number.includes('-')) {
      currentSign = '-';
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(`${currentSign}${temporalNumber.slice(0, -1)}`);
    }
    clean();
  };

  const toggleSign = () => {
    setNumber(number.includes('-') ? number.replace('-', '') : `-${number}`);
  };

  const setLastNumber = () => {
    calculateResult();
    number.endsWith('.')
      ? setPrevNumber(number.slice(0, -1))
      : setPrevNumber(number);

    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // decimal point
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      // Check if it's another 0 and there's no point
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      // Check if it's different to 0, there's no period, and it's the first number
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      if (numberString === '0' && !number.includes('.')) return;

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(result.toString());
    lastOperation.current = undefined;
    setPrevNumber('0');
  };

  const calculateSubResult = (): number => {
    const [firstValue, operation, secondValud] = formula.split(' ');
    const num1 = Number(firstValue);
    const num2 = Number(secondValud);

    if (isNaN(num2)) return num1;
    switch (operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num1 / num2;
      default:
        throw new Error('Operation not implement');
    }
  };

  return {
    // properties
    number,
    prevNumber,
    formula,

    // methods
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  };
};
