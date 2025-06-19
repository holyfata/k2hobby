import Base from "./base";

enum Primary {
    COLOR_PRIMARY = Base.BLUE_5, // 主要颜色。仅在需要非常强调的情况下使用。
    COLOR_PRIMARY_HOVER = Base.BLUE_6, // 主要颜色悬浮态
    COLOR_PRIMARY_ACTIVE = Base.BLUE_7, // 主要颜色激活态
    COLOR_PRIMARY_DISABELED = Base.BLUE_2, // 主要颜色禁用态
    COLOR_PRIMARY_LIGHT_DEFAULT = Base.BLUE_0, // 浅版主要颜色（多用于背景）。仅在需要非常强调的情况下使用。
    COLOR_PRIMARY_LIGHT_HOVER = Base.BLUE_1, // 浅版主要颜色悬浮态
    COLOR_PRIMARY_LIGHT_ACTIVE = Base.BLUE_2, // 浅版主要颜色激活态
}

export default Primary;
