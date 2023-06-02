import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandWikipedia = (props: SvgProps) => (
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
    <Path d="M3 4.984h2" />
    <Path d="M8 4.984h2.5" />
    <Path d="M14.5 4.984h2.5" />
    <Path d="M22 4.984h-2" />
    <Path d="M4 4.984l5.455 14.516l6.545 -14.516" />
    <Path d="M9 4.984l6 14.516l6 -14.516" />
  </Svg>
);
export default SvgBrandWikipedia;
