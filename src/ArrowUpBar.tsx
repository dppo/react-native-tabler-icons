import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowUpBar = (props: SvgProps) => (
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
    <Path d="M12 21l0 -18" />
    <Path d="M15 6l-3 -3l-3 3" />
    <Path d="M9 21l6 0" />
  </Svg>
);
export default SvgArrowUpBar;
