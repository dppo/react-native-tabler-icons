import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTopologyStar = (props: SvgProps) => (
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
    <Path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M7.5 7.5l3 3" />
    <Path d="M7.5 16.5l3 -3" />
    <Path d="M13.5 13.5l3 3" />
    <Path d="M16.5 7.5l-3 3" />
  </Svg>
);
export default SvgTopologyStar;
