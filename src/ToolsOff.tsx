import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgToolsOff = (props: SvgProps) => (
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
    <Path d="M16 12l4 -4a2.828 2.828 0 1 0 -4 -4l-4 4m-2 2l-7 7v4h4l7 -7" />
    <Path d="M14.5 5.5l4 4" />
    <Path d="M12 8l-5 -5m-2 2l-2 2l5 5" />
    <Path d="M7 8l-1.5 1.5" />
    <Path d="M16 12l5 5m-2 2l-2 2l-5 -5" />
    <Path d="M16 17l-1.5 1.5" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgToolsOff;
