import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPentagon = (props: SvgProps) => (
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
    <Path d="M13.2 3.394l7.033 5.237a2 2 0 0 1 .7 2.247l-2.973 8.764a2 2 0 0 1 -1.894 1.358h-8.12a2 2 0 0 1 -1.9 -1.373l-2.896 -8.765a2 2 0 0 1 .696 -2.225l6.958 -5.237a2 2 0 0 1 2.397 0z" />
  </Svg>
);
export default SvgPentagon;
