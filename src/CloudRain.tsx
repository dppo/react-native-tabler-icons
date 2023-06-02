import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCloudRain = (props: SvgProps) => (
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
    <Path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
    <Path d="M11 13v2m0 3v2m4 -5v2m0 3v2" />
  </Svg>
);
export default SvgCloudRain;
