import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBookmarkQuestion = (props: SvgProps) => (
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
    <Path d="M15.006 18.804l-3.006 -1.804l-5 3v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v5.5" />
    <Path d="M19 22v.01" />
    <Path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
  </Svg>
);
export default SvgBookmarkQuestion;
