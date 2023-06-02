import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTypography = (props: SvgProps) => (
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
    <Path d="M4 20l3 0" />
    <Path d="M14 20l7 0" />
    <Path d="M6.9 15l6.9 0" />
    <Path d="M10.2 6.3l5.8 13.7" />
    <Path d="M5 20l6 -16l2 0l7 16" />
  </Svg>
);
export default SvgTypography;
