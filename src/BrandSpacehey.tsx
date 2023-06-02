import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandSpacehey = (props: SvgProps) => (
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
    <Path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M14 20h6v-6a3 3 0 0 0 -6 0v6z" />
    <Path d="M11 8v2.5a3.5 3.5 0 0 1 -3.5 3.5h-.5a3 3 0 0 1 0 -6h4z" />
  </Svg>
);
export default SvgBrandSpacehey;
