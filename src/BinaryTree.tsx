import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBinaryTree = (props: SvgProps) => (
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
    <Path d="M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M5.058 18.306l2.88 -4.606" />
    <Path d="M10.061 10.303l2.877 -4.604" />
    <Path d="M10.065 13.705l2.876 4.6" />
    <Path d="M15.063 5.7l2.881 4.61" />
  </Svg>
);
export default SvgBinaryTree;
