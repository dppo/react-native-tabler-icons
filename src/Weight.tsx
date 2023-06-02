import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWeight = (props: SvgProps) => (
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
    <Path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M6.835 9h10.33a1 1 0 0 1 .984 .821l1.637 9a1 1 0 0 1 -.984 1.179h-13.604a1 1 0 0 1 -.984 -1.179l1.637 -9a1 1 0 0 1 .984 -.821z" />
  </Svg>
);
export default SvgWeight;
