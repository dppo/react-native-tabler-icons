import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyYenOff = (props: SvgProps) => (
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
    <Path d="M12 19v-7m5 -7l-3.328 4.66" />
    <Path d="M8 17h8" />
    <Path d="M8 13h5" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgCurrencyYenOff;
