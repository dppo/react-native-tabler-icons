import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTemperatureCelsius = (props: SvgProps) => (
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
    <Path d="M6 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M20 9a3 3 0 0 0 -3 -3h-1a3 3 0 0 0 -3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3 -3" />
  </Svg>
);
export default SvgTemperatureCelsius;
