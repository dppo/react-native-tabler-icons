import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMicrophone2 = (props: SvgProps) => (
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
    <Path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
    <Path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
  </Svg>
);
export default SvgMicrophone2;
