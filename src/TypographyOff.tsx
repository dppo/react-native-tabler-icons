import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTypographyOff = (props: SvgProps) => (
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
    <Path d="M4 20h3" />
    <Path d="M14 20h6" />
    <Path d="M6.9 15h6.9" />
    <Path d="M13 13l3 7" />
    <Path d="M5 20l4.09 -10.906" />
    <Path d="M10.181 6.183l.819 -2.183h2l3.904 8.924" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgTypographyOff;
