import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPencilMinus = (props: SvgProps) => (
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
    <Path d="M8 20l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4h4z" />
    <Path d="M13.5 6.5l4 4" />
    <Path d="M16 18h4" />
  </Svg>
);
export default SvgPencilMinus;
