import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLayoutBoardSplit = (props: SvgProps) => (
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
    <Path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <Path d="M4 12h8" />
    <Path d="M12 15h8" />
    <Path d="M12 9h8" />
    <Path d="M12 4v16" />
  </Svg>
);
export default SvgLayoutBoardSplit;
