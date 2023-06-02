import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFileZip = (props: SvgProps) => (
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
    <Path d="M6 20.735a2 2 0 0 1 -1 -1.735v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1" />
    <Path d="M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2z" />
    <Path d="M11 5l-1 0" />
    <Path d="M13 7l-1 0" />
    <Path d="M11 9l-1 0" />
    <Path d="M13 11l-1 0" />
    <Path d="M11 13l-1 0" />
    <Path d="M13 15l-1 0" />
  </Svg>
);
export default SvgFileZip;
