import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgExposure = (props: SvgProps) => (
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
    <Path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <Path d="M4.6 19.4l14.8 -14.8" />
    <Path d="M7 9h4m-2 -2v4" />
    <Path d="M13 16l4 0" />
  </Svg>
);
export default SvgExposure;
