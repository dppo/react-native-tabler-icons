import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyYen = (props: SvgProps) => (
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
    <Path d="M12 19v-7l-5 -7m10 0l-5 7" />
    <Path d="M8 17l8 0" />
    <Path d="M8 13l8 0" />
  </Svg>
);
export default SvgCurrencyYen;
