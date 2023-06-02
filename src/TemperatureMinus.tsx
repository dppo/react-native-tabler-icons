import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTemperatureMinus = (props: SvgProps) => (
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
    <Path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
    <Path d="M8 9l4 0" />
    <Path d="M16 9l6 0" />
  </Svg>
);
export default SvgTemperatureMinus;
