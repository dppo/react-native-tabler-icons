import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDragDrop2 = (props: SvgProps) => (
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
    <Path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
    <Path d="M4 4l0 .01" />
    <Path d="M8 4l0 .01" />
    <Path d="M12 4l0 .01" />
    <Path d="M16 4l0 .01" />
    <Path d="M4 8l0 .01" />
    <Path d="M4 12l0 .01" />
    <Path d="M4 16l0 .01" />
  </Svg>
);
export default SvgDragDrop2;
