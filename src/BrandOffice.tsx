import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandOffice = (props: SvgProps) => (
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
    <Path d="M4 18h9v-12l-5 2v5l-4 2v-8l9 -4l7 2v13l-7 3z" />
  </Svg>
);
export default SvgBrandOffice;
