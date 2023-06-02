import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircuitResistor = (props: SvgProps) => (
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
    <Path d="M2 12h2l2 -5l3 10l3 -10l3 10l3 -10l1.5 5h2.5" />
  </Svg>
);
export default SvgCircuitResistor;
