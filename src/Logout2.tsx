import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLogout2 = (props: SvgProps) => (
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
    <Path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
    <Path d="M15 12h-12l3 -3" />
    <Path d="M6 15l-3 -3" />
  </Svg>
);
export default SvgLogout2;
