import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHomeSearch = (props: SvgProps) => (
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
    <Path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4.7" />
    <Path d="M9 21v-6a2 2 0 0 1 2 -2h2" />
    <Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M20.2 20.2l1.8 1.8" />
  </Svg>
);
export default SvgHomeSearch;
