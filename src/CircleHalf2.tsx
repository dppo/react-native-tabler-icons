import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircleHalf2 = (props: SvgProps) => (
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
    <Path d="M12 3v18" />
    <Path d="M12 14l7 -7" />
    <Path d="M12 19l8.5 -8.5" />
    <Path d="M12 9l4.5 -4.5" />
  </Svg>
);
export default SvgCircleHalf2;
