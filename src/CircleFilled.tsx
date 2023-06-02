import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircleFilled = (props: SvgProps) => (
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
      d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
      strokeWidth={0}
      fill="currentColor"
    />
  </Svg>
);
export default SvgCircleFilled;
