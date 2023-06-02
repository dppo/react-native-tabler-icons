import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWorldLatitude = (props: SvgProps) => (
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
    <Path d="M4.6 7l14.8 0" />
    <Path d="M3 12l18 0" />
    <Path d="M4.6 17l14.8 0" />
  </Svg>
);
export default SvgWorldLatitude;
