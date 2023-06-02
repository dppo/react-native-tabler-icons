import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgIceCream = (props: SvgProps) => (
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
    <Path d="M12 21.5v-4.5" />
    <Path d="M8 17h8v-10a4 4 0 1 0 -8 0v10z" />
    <Path d="M8 10.5l8 -3.5" />
    <Path d="M8 14.5l8 -3.5" />
  </Svg>
);
export default SvgIceCream;
