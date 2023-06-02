import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgOlympics = (props: SvgProps) => (
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
    <Path d="M6 9m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M18 9m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M12 9m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M9 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  </Svg>
);
export default SvgOlympics;
