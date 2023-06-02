import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGridDots = (props: SvgProps) => (
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
    <Path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </Svg>
);
export default SvgGridDots;
