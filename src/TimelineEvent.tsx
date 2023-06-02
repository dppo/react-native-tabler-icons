import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTimelineEvent = (props: SvgProps) => (
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
    <Path d="M12 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M10 20h-6" />
    <Path d="M14 20h6" />
    <Path d="M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2z" />
  </Svg>
);
export default SvgTimelineEvent;
