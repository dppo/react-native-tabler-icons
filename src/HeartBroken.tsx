import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHeartBroken = (props: SvgProps) => (
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
    <Path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    <Path d="M12 6l-2 4l4 3l-2 4v3" />
  </Svg>
);
export default SvgHeartBroken;
