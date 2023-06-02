import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircleKey = (props: SvgProps) => (
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
    <Path d="M14 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" />
    <Path d="M12.5 11.5l-4 4l1.5 1.5" />
    <Path d="M12 15l-1.5 -1.5" />
  </Svg>
);
export default SvgCircleKey;
