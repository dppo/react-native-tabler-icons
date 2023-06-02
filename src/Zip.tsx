import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgZip = (props: SvgProps) => (
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
    <Path d="M16 16v-8h2a2 2 0 1 1 0 4h-2" />
    <Path d="M12 8v8" />
    <Path d="M4 8h4l-4 8h4" />
  </Svg>
);
export default SvgZip;
