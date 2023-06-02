import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLayoutDistributeHorizontal = (props: SvgProps) => (
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
    <Path d="M4 4l16 0" />
    <Path d="M4 20l16 0" />
    <Path d="M6 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
  </Svg>
);
export default SvgLayoutDistributeHorizontal;
