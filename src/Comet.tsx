import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgComet = (props: SvgProps) => (
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
    <Path d="M15.5 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
    <Path d="M4 4l7 7" />
    <Path d="M9 4l3.5 3.5" />
    <Path d="M4 9l3.5 3.5" />
  </Svg>
);
export default SvgComet;
