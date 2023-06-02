import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowBearRight = (props: SvgProps) => (
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
    <Path d="M12 3h5v5" />
    <Path d="M17 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" />
  </Svg>
);
export default SvgArrowBearRight;
