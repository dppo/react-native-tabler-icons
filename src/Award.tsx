import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAward = (props: SvgProps) => (
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
    <Path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
    <Path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
    <Path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
  </Svg>
);
export default SvgAward;
