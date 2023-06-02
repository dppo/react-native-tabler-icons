import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandNotion = (props: SvgProps) => (
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
    <Path d="M7 7h3l6 6" />
    <Path d="M8 7v10" />
    <Path d="M7 17h2" />
    <Path d="M15 7h2" />
    <Path d="M16 7v10h-1l-7 -7" />
  </Svg>
);
export default SvgBrandNotion;
