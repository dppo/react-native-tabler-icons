import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBuildingFortress = (props: SvgProps) => (
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
    <Path d="M7 21h1a1 1 0 0 0 1 -1v-1h0a3 3 0 0 1 6 0m3 2h1a1 1 0 0 0 1 -1v-15l-3 -2l-3 2v6h-4v-6l-3 -2l-3 2v15a1 1 0 0 0 1 1h2m8 -2v1a1 1 0 0 0 1 1h2" />
    <Path d="M7 7h0v.01" />
    <Path d="M7 10h0v.01" />
    <Path d="M7 13h0v.01" />
    <Path d="M17 7h0v.01" />
    <Path d="M17 10h0v.01" />
    <Path d="M17 13h0v.01" />
  </Svg>
);
export default SvgBuildingFortress;
