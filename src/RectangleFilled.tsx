import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRectangleFilled = (props: SvgProps) => (
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
      d="M19 4h-14a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z"
      strokeWidth={0}
      fill="currentColor"
    />
  </Svg>
);
export default SvgRectangleFilled;
