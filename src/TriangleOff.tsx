import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTriangleOff = (props: SvgProps) => (
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
    <Path d="M5 19h14m1.986 -2.014a2 2 0 0 0 -.146 -.736l-7.1 -12.25a2 2 0 0 0 -3.5 0l-.825 1.424m-1.467 2.53l-4.808 8.296a2 2 0 0 0 1.75 2.75" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgTriangleOff;
