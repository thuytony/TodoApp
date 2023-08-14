//TODO add library to check is Tablet
const isTablet = false;

type iconType = {
  tiny: number,
  small: number,
  normal: number,
  big: number,
};

type textType = {
  tiny: number,
  small: number,
  big: number,
  body: number,
  title: number,
};

type marginType = {
  tiny: number,
  small: number,
  base: number,
  large: number,
};

type radiusType = {
  small: number,
  base: number,
  large: number,
};


export interface DimensionType {
  icon: iconType,
  text: textType,
  margin: marginType,
  radius: radiusType,
};


export const Dimension: DimensionType = {
  icon: {
    tiny: isTablet ? 22 : 16,
    small: isTablet ? 29 : 23,
    normal: isTablet ? 36 : 30,
    big: isTablet ? 46 : 40,
  },

  text: {
    tiny: isTablet ? 12 : 8,
    small: isTablet ? 16 : 12,
    big: isTablet ? 36 : 32,
    body: isTablet ? 18 : 14,
    title: isTablet ? 20 : 16,
  },

  margin: {
    tiny: isTablet ? 8 : 4,
    small: isTablet ? 14 : 8,
    base: isTablet ? 22 : 16,
    large: isTablet ? 30 : 24,
  },

  radius: {
    small: isTablet ? 12 : 6,
    base: isTablet ? 16 : 10,
    large: isTablet ? 22 : 16,
  },

};
