import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandBandcamp = (props: SvgProps) => (
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
    <Path d="M8.5 6h13.5l-7 12h-13z" />
  </Svg>
);
export default SvgBrandBandcamp;
