import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgZodiacCancer = (props: SvgProps) => (
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
    <Path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M18 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M3 12a10 6.5 0 0 1 14 -6.5" />
    <Path d="M21 12a10 6.5 0 0 1 -14 6.5" />
  </Svg>
);
export default SvgZodiacCancer;
