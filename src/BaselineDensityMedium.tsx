import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBaselineDensityMedium = (props: SvgProps) => (
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
    <Path d="M4 20h16" />
    <Path d="M4 12h16" />
    <Path d="M4 4h16" />
  </Svg>
);
export default SvgBaselineDensityMedium;
