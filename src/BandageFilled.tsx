import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBandageFilled = (props: SvgProps) => (
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
      d="M20.207 3.793a5.95 5.95 0 0 1 .179 8.228l-.179 .186l-8 8a5.95 5.95 0 0 1 -8.593 -8.228l.179 -.186l8 -8a5.95 5.95 0 0 1 8.414 0zm-8.207 9.207a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm2 -2a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm-4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm2 -2a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883z"
      strokeWidth={0}
      fill="currentColor"
    />
  </Svg>
);
export default SvgBandageFilled;
