import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPlayerRecordFilled = (props: SvgProps) => (
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
    <Path
      d="M8 5.072a8 8 0 1 1 -3.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 3.995 -6.643z"
      strokeWidth={0}
      fill="currentColor"
    />
  </Svg>
);
export default SvgPlayerRecordFilled;
