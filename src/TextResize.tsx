import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTextResize = (props: SvgProps) => (
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
    <Path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M5 7v10" />
    <Path d="M7 5h10" />
    <Path d="M7 19h10" />
    <Path d="M19 7v10" />
    <Path d="M10 10h4" />
    <Path d="M12 14v-4" />
  </Svg>
);
export default SvgTextResize;
