import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgIceSkating = (props: SvgProps) => (
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
    <Path d="M5.905 5h3.418a1 1 0 0 1 .928 .629l1.143 2.856a3 3 0 0 0 2.207 1.83l4.717 .926a2.084 2.084 0 0 1 1.682 2.045v.714a1 1 0 0 1 -1 1h-13.895a1 1 0 0 1 -1 -1.1l.8 -8a1 1 0 0 1 1 -.9z" />
    <Path d="M3 19h17a1 1 0 0 0 1 -1" />
    <Path d="M9 15v4" />
    <Path d="M15 15v4" />
  </Svg>
);
export default SvgIceSkating;
