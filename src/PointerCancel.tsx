import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPointerCancel = (props: SvgProps) => (
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
    <Path d="M15.526 12.97l-.748 -.748l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l.714 .714" />
    <Path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M17 21l4 -4" />
  </Svg>
);
export default SvgPointerCancel;
