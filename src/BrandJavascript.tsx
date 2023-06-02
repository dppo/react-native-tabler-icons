import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandJavascript = (props: SvgProps) => (
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
    <Path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
    <Path d="M7.5 8h3v8l-2 -1" />
    <Path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
  </Svg>
);
export default SvgBrandJavascript;
