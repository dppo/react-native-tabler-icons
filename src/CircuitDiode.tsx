import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircuitDiode = (props: SvgProps) => (
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
    <Path d="M22 12h-6" />
    <Path d="M2 12h6" />
    <Path d="M8 7l8 5l-8 5z" />
    <Path d="M16 7v10" />
  </Svg>
);
export default SvgCircuitDiode;
