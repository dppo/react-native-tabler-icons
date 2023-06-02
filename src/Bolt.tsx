import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBolt = (props: SvgProps) => (
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
    <Path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
  </Svg>
);
export default SvgBolt;
