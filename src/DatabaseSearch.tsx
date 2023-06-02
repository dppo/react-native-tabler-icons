import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDatabaseSearch = (props: SvgProps) => (
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
    <Path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
    <Path d="M4 6v6c0 1.657 3.582 3 8 3m8 -3.5v-5.5" />
    <Path d="M4 12v6c0 1.657 3.582 3 8 3" />
    <Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M20.2 20.2l1.8 1.8" />
  </Svg>
);
export default SvgDatabaseSearch;
