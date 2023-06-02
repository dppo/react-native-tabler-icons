import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandLoom = (props: SvgProps) => (
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
    <Path d="M17.464 6.518a6 6 0 1 0 -3.023 7.965" />
    <Path d="M17.482 17.464a6 6 0 1 0 -7.965 -3.023" />
    <Path d="M6.54 17.482a6 6 0 1 0 3.024 -7.965" />
    <Path d="M6.518 6.54a6 6 0 1 0 7.965 3.024" />
  </Svg>
);
export default SvgBrandLoom;
