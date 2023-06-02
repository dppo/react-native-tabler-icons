import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBracketsContain = (props: SvgProps) => (
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
    <Path d="M7 4h-4v16h4" />
    <Path d="M17 4h4v16h-4" />
    <Path d="M8 16h.01" />
    <Path d="M12 16h.01" />
    <Path d="M16 16h.01" />
  </Svg>
);
export default SvgBracketsContain;
