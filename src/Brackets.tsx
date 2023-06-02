import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrackets = (props: SvgProps) => (
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
    <Path d="M8 4h-3v16h3" />
    <Path d="M16 4h3v16h-3" />
  </Svg>
);
export default SvgBrackets;
