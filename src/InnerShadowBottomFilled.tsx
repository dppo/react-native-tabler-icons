import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgInnerShadowBottomFilled = (props: SvgProps) => (
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
      d="M5.144 4.72c3.92 -3.695 10.093 -3.625 13.927 .209c3.905 3.905 3.905 10.237 0 14.142c-3.905 3.905 -10.237 3.905 -14.142 0c-3.905 -3.905 -3.905 -10.237 0 -14.142zm3.32 10.816a1 1 0 1 0 -1.414 1.414a7 7 0 0 0 9.9 0a1 1 0 0 0 -1.414 -1.414a5 5 0 0 1 -7.072 0z"
      strokeWidth={0}
      fill="currentColor"
    />
  </Svg>
);
export default SvgInnerShadowBottomFilled;
