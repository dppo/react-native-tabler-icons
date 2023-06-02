import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHighlight = (props: SvgProps) => (
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
    <Path d="M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
    <Path d="M12.5 5.5l4 4" />
    <Path d="M4.5 13.5l4 4" />
    <Path d="M21 15v4h-8l4 -4z" />
  </Svg>
);
export default SvgHighlight;
