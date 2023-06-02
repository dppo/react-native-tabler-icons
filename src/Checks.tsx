import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChecks = (props: SvgProps) => (
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
    <Path d="M7 12l5 5l10 -10" />
    <Path d="M2 12l5 5m5 -5l5 -5" />
  </Svg>
);
export default SvgChecks;
