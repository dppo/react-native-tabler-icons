import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgVariablePlus = (props: SvgProps) => (
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
    <Path d="M5 4c-2.5 5 -2.5 10 0 16m14 -16c1.38 2.76 2 5.52 1.855 8.448m-11.855 -3.448h1c1 0 1 1 2.016 3.527c.785 1.972 .944 3.008 1.483 3.346" />
    <Path d="M8 16c1.5 0 3 -2 4 -3.5s2.5 -3.5 4 -3.5" />
    <Path d="M16 19h6" />
    <Path d="M19 16v6" />
  </Svg>
);
export default SvgVariablePlus;
