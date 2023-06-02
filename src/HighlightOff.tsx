import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHighlightOff = (props: SvgProps) => (
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
    <Path d="M9 9l-6 6v4h4l6 -6m2 -2l2.503 -2.503a2.828 2.828 0 1 0 -4 -4l-2.497 2.497" />
    <Path d="M12.5 5.5l4 4" />
    <Path d="M4.5 13.5l4 4" />
    <Path d="M19 15h2v2m-2 2h-6l3 -3" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgHighlightOff;
