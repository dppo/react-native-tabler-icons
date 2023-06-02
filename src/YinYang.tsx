import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';
const SvgYinYang = (props: SvgProps) => (
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
    <Path d="M12 3a4.5 4.5 0 0 0 0 9a4.5 4.5 0 0 1 0 9" />
    <Circle cx={12} cy={7.5} r={0.5} fill="currentColor" />
    <Circle cx={12} cy={16.5} r={0.5} fill="currentColor" />
  </Svg>
);
export default SvgYinYang;
