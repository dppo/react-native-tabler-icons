import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMacro = (props: SvgProps) => (
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
    <Path d="M6 15a6 6 0 1 0 12 0" />
    <Path d="M18 15a6 6 0 0 0 -6 6" />
    <Path d="M12 21a6 6 0 0 0 -6 -6" />
    <Path d="M12 21v-10" />
    <Path d="M12 11a5 5 0 0 1 -5 -5v-3l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -5 5z" />
  </Svg>
);
export default SvgMacro;
