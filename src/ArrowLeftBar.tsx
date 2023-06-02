import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowLeftBar = (props: SvgProps) => (
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
    <Path d="M21 12h-18" />
    <Path d="M6 9l-3 3l3 3" />
    <Path d="M21 9v6" />
  </Svg>
);
export default SvgArrowLeftBar;
