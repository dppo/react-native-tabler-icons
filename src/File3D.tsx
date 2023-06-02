import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFile3D = (props: SvgProps) => (
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
    <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <Path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
    <Path d="M12 13.5l4 -1.5" />
    <Path d="M8 11.846l4 1.654v4.5l4 -1.846v-4.308l-4 -1.846z" />
    <Path d="M8 12v4.2l4 1.8" />
  </Svg>
);
export default SvgFile3D;
