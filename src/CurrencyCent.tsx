import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyCent = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <Path d="M16.007 7.54a5.965 5.965 0 0 0 -4.008 -1.54a6 6 0 0 0 -5.992 6c0 3.314 2.682 6 5.992 6a5.965 5.965 0 0 0 4 -1.536" />
    <Path d="M12 20v-2" />
    <Path d="M12 6v-2" />
  </Svg>
);
export default SvgCurrencyCent;
