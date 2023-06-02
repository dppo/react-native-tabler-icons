import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHeartMinus = (props: SvgProps) => (
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
    <Path d="M13 19l-1 1l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8 6" />
    <Path d="M14 16h6" />
  </Svg>
);
export default SvgHeartMinus;
