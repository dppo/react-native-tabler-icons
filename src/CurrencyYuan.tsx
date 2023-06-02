import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrencyYuan = (props: SvgProps) => (
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
    <Path d="M12 19v-7l-5 -7" />
    <Path d="M17 5l-5 7" />
    <Path d="M8 13h8" />
  </Svg>
);
export default SvgCurrencyYuan;
