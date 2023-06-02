import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTextSize = (props: SvgProps) => (
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
    <Path d="M3 7v-2h13v2" />
    <Path d="M10 5v14" />
    <Path d="M12 19h-4" />
    <Path d="M15 13v-1h6v1" />
    <Path d="M18 12v7" />
    <Path d="M17 19h2" />
  </Svg>
);
export default SvgTextSize;
