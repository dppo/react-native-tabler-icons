import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandSpotify = (props: SvgProps) => (
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
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <Path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
    <Path d="M9 15c1.5 -1 4 -1 5 .5" />
    <Path d="M7 9c2 -1 6 -2 10 .5" />
  </Svg>
);
export default SvgBrandSpotify;
