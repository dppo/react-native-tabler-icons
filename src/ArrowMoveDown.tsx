import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowMoveDown = (props: SvgProps) => (
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
    <Path d="M12 11v10" />
    <Path d="M9 18l3 3l3 -3" />
    <Path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </Svg>
);
export default SvgArrowMoveDown;
