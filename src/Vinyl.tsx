import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgVinyl = (props: SvgProps) => (
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
    <Path d="M16 3.937a9 9 0 1 0 5 8.063" />
    <Path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M20 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M20 4l-3.5 10l-2.5 2" />
  </Svg>
);
export default SvgVinyl;
