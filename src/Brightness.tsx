import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrightness = (props: SvgProps) => (
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
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <Path d="M12 3l0 18" />
    <Path d="M12 9l4.65 -4.65" />
    <Path d="M12 14.3l7.37 -7.37" />
    <Path d="M12 19.6l8.85 -8.85" />
  </Svg>
);
export default SvgBrightness;
