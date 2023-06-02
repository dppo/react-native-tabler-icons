import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandNytimes = (props: SvgProps) => (
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
    <Path d="M11.036 5.058a8 8 0 1 0 8.706 9.965" />
    <Path d="M12 21v-11l-7.5 4" />
    <Path d="M17.5 3a2.5 2.5 0 1 1 0 5l-11 -5a2.5 2.5 0 0 0 -.67 4.91" />
    <Path d="M9 12v8" />
    <Path d="M16 13h-.01" />
  </Svg>
);
export default SvgBrandNytimes;
