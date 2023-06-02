import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBuildingSkyscraper = (props: SvgProps) => (
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
    <Path d="M3 21l18 0" />
    <Path d="M5 21v-14l8 -4v18" />
    <Path d="M19 21v-10l-6 -4" />
    <Path d="M9 9l0 .01" />
    <Path d="M9 12l0 .01" />
    <Path d="M9 15l0 .01" />
    <Path d="M9 18l0 .01" />
  </Svg>
);
export default SvgBuildingSkyscraper;
