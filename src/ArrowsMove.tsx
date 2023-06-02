import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsMove = (props: SvgProps) => (
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
    <Path d="M18 9l3 3l-3 3" />
    <Path d="M15 12h6" />
    <Path d="M6 9l-3 3l3 3" />
    <Path d="M3 12h6" />
    <Path d="M9 18l3 3l3 -3" />
    <Path d="M12 15v6" />
    <Path d="M15 6l-3 -3l-3 3" />
    <Path d="M12 3v6" />
  </Svg>
);
export default SvgArrowsMove;
