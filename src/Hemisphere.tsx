import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHemisphere = (props: SvgProps) => (
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
    <Path d="M12 9m-9 0a9 3 0 1 0 18 0a9 3 0 1 0 -18 0" />
    <Path d="M3 9a9 9 0 0 0 18 0" />
  </Svg>
);
export default SvgHemisphere;
