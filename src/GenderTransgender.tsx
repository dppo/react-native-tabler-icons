import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGenderTransgender = (props: SvgProps) => (
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
    <Path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <Path d="M15 9l6 -6" />
    <Path d="M21 7v-4h-4" />
    <Path d="M9 9l-6 -6" />
    <Path d="M3 7v-4h4" />
    <Path d="M5.5 8.5l3 -3" />
    <Path d="M12 16v5" />
    <Path d="M9.5 19h5" />
  </Svg>
);
export default SvgGenderTransgender;
