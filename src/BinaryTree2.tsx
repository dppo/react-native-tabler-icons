import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBinaryTree2 = (props: SvgProps) => (
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
    <Path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M7 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M21 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M14 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M12 8v8" />
    <Path d="M6.316 12.496l4.368 -4.992" />
    <Path d="M17.684 12.496l-4.366 -4.99" />
  </Svg>
);
export default SvgBinaryTree2;
