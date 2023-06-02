import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgEmphasis = (props: SvgProps) => (
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
    <Path d="M16 5h-8v10h8m-1 -5h-7" />
    <Path d="M6 20l0 .01" />
    <Path d="M10 20l0 .01" />
    <Path d="M14 20l0 .01" />
    <Path d="M18 20l0 .01" />
  </Svg>
);
export default SvgEmphasis;
