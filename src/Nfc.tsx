import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgNfc = (props: SvgProps) => (
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
    <Path d="M11 20a3 3 0 0 1 -3 -3v-11l5 5" />
    <Path d="M13 4a3 3 0 0 1 3 3v11l-5 -5" />
    <Path d="M4 4m0 3a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3z" />
  </Svg>
);
export default SvgNfc;
