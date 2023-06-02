import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgShare = (props: SvgProps) => (
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
    <Path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M8.7 10.7l6.6 -3.4" />
    <Path d="M8.7 13.3l6.6 3.4" />
  </Svg>
);
export default SvgShare;
