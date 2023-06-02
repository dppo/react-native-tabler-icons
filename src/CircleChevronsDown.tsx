import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircleChevronsDown = (props: SvgProps) => (
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
    <Path d="M15 9l-3 3l-3 -3" />
    <Path d="M15 13l-3 3l-3 -3" />
    <Path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z" />
  </Svg>
);
export default SvgCircleChevronsDown;
