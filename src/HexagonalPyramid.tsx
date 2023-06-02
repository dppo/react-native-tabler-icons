import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHexagonalPyramid = (props: SvgProps) => (
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
    <Path d="M11.162 2.457l-7.846 12.954a1.988 1.988 0 0 0 .267 2.483l2.527 2.523c.374 .373 .88 .583 1.408 .583h8.964c.528 0 1.034 -.21 1.408 -.583l2.527 -2.523a1.988 1.988 0 0 0 .267 -2.483l-7.846 -12.954a.996 .996 0 0 0 -1.676 0z" />
    <Path d="M12 2l-5 18.9" />
    <Path d="M12 2l5 18.9" />
  </Svg>
);
export default SvgHexagonalPyramid;
