import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTooltip = (props: SvgProps) => (
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
    <Path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M12 13l-1.707 -1.707a1 1 0 0 0 -.707 -.293h-2.586a2 2 0 0 1 -2 -2v-3a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2.586a1 1 0 0 0 -.707 .293l-1.707 1.707z" />
  </Svg>
);
export default SvgTooltip;
