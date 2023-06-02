import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandUnsplash = (props: SvgProps) => (
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
    <Path d="M4 11h5v4h6v-4h5v9h-16zm5 -7h6v4h-6z" />
  </Svg>
);
export default SvgBrandUnsplash;
