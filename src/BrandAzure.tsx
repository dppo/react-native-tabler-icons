import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandAzure = (props: SvgProps) => (
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
    <Path d="M6 7.5l-4 9.5h4l6 -15z" />
    <Path d="M22 20l-7 -15l-3 7l4 5l-8 3z" />
  </Svg>
);
export default SvgBrandAzure;
