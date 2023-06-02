import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHexagons = (props: SvgProps) => (
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
    <Path d="M4 18v-5l4 -2l4 2v5l-4 2z" />
    <Path d="M8 11v-5l4 -2l4 2v5" />
    <Path d="M12 13l4 -2l4 2v5l-4 2l-4 -2" />
  </Svg>
);
export default SvgHexagons;
