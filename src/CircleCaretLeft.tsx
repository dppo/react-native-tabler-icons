import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircleCaretLeft = (props: SvgProps) => (
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
    <Path d="M9 12l4 -4v8z" />
    <Path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
  </Svg>
);
export default SvgCircleCaretLeft;
