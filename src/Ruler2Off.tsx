import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRuler2Off = (props: SvgProps) => (
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
    <Path d="M12.03 7.97l4.97 -4.97l4 4l-5 5m-2 2l-7 7l-4 -4l7 -7" />
    <Path d="M16 7l-1.5 -1.5" />
    <Path d="M10 13l-1.5 -1.5" />
    <Path d="M7 16l-1.5 -1.5" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgRuler2Off;
