import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandAppstore = (props: SvgProps) => (
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
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <Path d="M8 16l1.106 -1.99m1.4 -2.522l2.494 -4.488" />
    <Path d="M7 14h5m2.9 0h2.1" />
    <Path d="M16 16l-2.51 -4.518m-1.487 -2.677l-1 -1.805" />
  </Svg>
);
export default SvgBrandAppstore;
