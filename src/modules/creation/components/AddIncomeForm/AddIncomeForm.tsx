import {useTheme} from 'react-native-paper';
import Stack from 'components/atoms/Stack';
import CustomTypography from 'components/atoms/CustomTypography';
import React, {FC, useState} from 'react';
import {TIndex} from 'interfaces/KeyValue.type';
import ButtonGroup from 'components/molecules/ButtonGroup';
import {INCOME_TYPES} from 'src/constants/types.const';
import CustomNumberInput from 'components/atoms/CustomNumberInput';
import CustomButton from 'components/atoms/CustomButton';
import {View} from 'react-native';
import DateInputPicker from 'components/molecules/DateInputPicker';
import {useAppContext} from 'context/AppContext';
import {ADD_INCOME} from 'store/actions';
import {useNavigation} from '@react-navigation/native';

const AddIncomeForm: FC = () => {
  const navigation = useNavigation();
  const {dispatch} = useAppContext();
  const {colors} = useTheme();
  const [date, setDate] = useState<Date | null>(null);
  const [amount, setAmount] = useState<string | undefined>(undefined);
  const [category, setCategory] = useState<TIndex>('');

  const handleSubmit = () => {
    const income = {
      date,
      amount,
      category,
    };

    dispatch({type: ADD_INCOME, payload: income});
    navigation.goBack();
  };

  return (
    <View>
      <Stack>
        <CustomTypography variant="h4" color={colors.text}>
          Add Income
        </CustomTypography>
      </Stack>
      <Stack spacing={1}>
        <DateInputPicker onChange={(dt: Date) => setDate(dt)} />
      </Stack>
      <Stack spacing={1}>
        <CustomNumberInput
          label={'Amount'}
          value={amount}
          onChangeText={value => setAmount(value)}
        />
      </Stack>
      <Stack>
        <CustomTypography variant="label" color={colors.text}>
          Category *
        </CustomTypography>
      </Stack>
      <Stack>
        <ButtonGroup
          options={INCOME_TYPES}
          onPress={(value: TIndex) => setCategory(value)}
          selectedIndex={category}
        />
      </Stack>
      <Stack spacing={10}>
        <CustomButton onPress={handleSubmit}>Submit</CustomButton>
      </Stack>
    </View>
  );
};

export default AddIncomeForm;
