import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

type SvgComponentType = React.FC<SvgProps>;

interface SVGIconProps {
  source: SvgComponentType;
  width: number;
  height: number;
  fill?: string;
  style?: StyleProp<ViewStyle>;
}

const SVGIcon = ({ source: IconComponent, width, height, style, ...rest }: SVGIconProps) => {
  if (!IconComponent) {
    console.warn('SVGIcon: source prop is required');
    return null;
  }

  return (
    <View style={[{ width, height }, style]}>
      <IconComponent width={width} height={height} {...rest} />
    </View>
  );
};

export default SVGIcon;