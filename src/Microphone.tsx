import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMicrophone = (props: SvgProps) => (
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
    <Path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" />
    <Path d="M5 10a7 7 0 0 0 14 0" />
    <Path d="M8 21l8 0" />
    <Path d="M12 17l0 4" />
  </Svg>
);
export default SvgMicrophone;
