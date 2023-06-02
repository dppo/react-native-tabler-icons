import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircleChevronsUp = (props: SvgProps) => (
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
    <Path d="M9 15l3 -3l3 3" />
    <Path d="M9 11l3 -3l3 3" />
    <Path d="M12 21a9 9 0 1 0 -.265 0l.265 0z" />
  </Svg>
);
export default SvgCircleChevronsUp;
