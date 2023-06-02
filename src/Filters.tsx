import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFilters = (props: SvgProps) => (
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
    <Path d="M12 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <Path d="M8 11a5 5 0 1 0 3.998 1.997" />
    <Path d="M12.002 19.003a5 5 0 1 0 3.998 -8.003" />
  </Svg>
);
export default SvgFilters;
