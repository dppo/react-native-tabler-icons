import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBluetoothX = (props: SvgProps) => (
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
    <Path d="M7 8l10 8l-5 4v-16l1 .802m0 6.396l-6 4.802" />
    <Path d="M16 6l4 4" />
    <Path d="M20 6l-4 4" />
  </Svg>
);
export default SvgBluetoothX;
