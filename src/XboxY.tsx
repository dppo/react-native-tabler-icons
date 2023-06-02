import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgXboxY = (props: SvgProps) => (
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
    <Path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
    <Path d="M9 8l3 4" />
    <Path d="M15 8l-2.988 3.984l-.012 4.016" />
  </Svg>
);
export default SvgXboxY;
