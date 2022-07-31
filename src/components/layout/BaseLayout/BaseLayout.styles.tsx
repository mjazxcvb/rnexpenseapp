import {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const componentStyles = ({}: {colors: ReactNativePaper.ThemeColors}) =>
  StyleSheet.create({
    main: {
      display: 'flex',
      flex: 1,
    },
    container: {
      margin: 16,
    },
  });

function useComponentStyles() {
  const {colors} = useTheme();
  const styles = useMemo(() => componentStyles({colors}), [colors]);

  return styles;
}

export default useComponentStyles;
