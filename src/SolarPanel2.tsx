import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSolarPanel2 = (props: SvgProps) => (
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
    <Path d="M8 2a4 4 0 1 0 8 0" />
    <Path d="M4 3h1" />
    <Path d="M19 3h1" />
    <Path d="M12 9v1" />
    <Path d="M17.2 7.2l.707 .707" />
    <Path d="M6.8 7.2l-.7 .7" />
    <Path d="M4.28 21h15.44a1 1 0 0 0 .97 -1.243l-1.5 -6a1 1 0 0 0 -.97 -.757h-12.44a1 1 0 0 0 -.97 .757l-1.5 6a1 1 0 0 0 .97 1.243z" />
    <Path d="M4 17h16" />
    <Path d="M10 13l-1 8" />
    <Path d="M14 13l1 8" />
  </Svg>
);
export default SvgSolarPanel2;
