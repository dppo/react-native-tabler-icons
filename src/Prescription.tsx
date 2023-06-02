import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPrescription = (props: SvgProps) => (
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
    <Path d="M6 19v-16h4.5a4.5 4.5 0 1 1 0 9h-4.5" />
    <Path d="M19 21l-9 -9" />
    <Path d="M13 21l6 -6" />
  </Svg>
);
export default SvgPrescription;
