import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandPicsart = (props: SvgProps) => (
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
    <Path d="M12 9m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
    <Path d="M12 9m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M5 9v11a2 2 0 1 0 4 0v-4.5" />
  </Svg>
);
export default SvgBrandPicsart;
