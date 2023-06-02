import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSubtask = (props: SvgProps) => (
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
    <Path d="M6 9l6 0" />
    <Path d="M4 5l4 0" />
    <Path d="M6 5v11a1 1 0 0 0 1 1h5" />
    <Path d="M12 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
    <Path d="M12 15m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
  </Svg>
);
export default SvgSubtask;
