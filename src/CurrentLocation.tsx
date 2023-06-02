import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurrentLocation = (props: SvgProps) => (
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
    <Path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
    <Path d="M12 2l0 2" />
    <Path d="M12 20l0 2" />
    <Path d="M20 12l2 0" />
    <Path d="M2 12l2 0" />
  </Svg>
);
export default SvgCurrentLocation;
