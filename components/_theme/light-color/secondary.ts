import Base from "./base";

enum Secondary {
    COLOR_SECONDARY = Base.LIGHT_BLUE_5, // 次要颜色。强调作用次于主要颜色，但仍然具有强调作用。
    COLOR_SECONDARY_HOVER = Base.LIGHT_BLUE_6, // 次要颜色悬浮态
    COLOR_SECONDARY_ACTIVE = Base.LIGHT_BLUE_7, // 次要颜色激活态
    COLOR_SECONDARY_DISABLED = Base.LIGHT_BLUE_2, // 次要颜色禁用态
    COLOR_SECONDARY_LIGHT_DEFAULT = Base.LIGHT_BLUE_0, // 浅版次要颜色（多用于背景）。强调作用次于主要颜色，但仍然具有强调作用。
    COLOR_SECONDARY_LIGHT_HOVER = Base.LIGHT_BLUE_1, // 浅版次要颜色悬浮态
    COLOR_SECONDARY_LIGHT_ACTIVE = Base.LIGHT_BLUE_2, // 浅版次要颜色激活态
}

export default Secondary;
