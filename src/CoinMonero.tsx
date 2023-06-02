import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCoinMonero = (props: SvgProps) => (
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
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <Path d="M4 16h4v-7l4 4l4 -4v7h4" />
  </Svg>
);
export default SvgCoinMonero;
