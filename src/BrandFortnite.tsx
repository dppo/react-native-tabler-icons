import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandFortnite = (props: SvgProps) => (
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
    <Path d="M8 3h7.5l-.5 4h-3v3h3v3.5h-3v6.5l-4 1z" />
  </Svg>
);
export default SvgBrandFortnite;
