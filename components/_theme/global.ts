import { Dark as darkPalette, Light as lightPalette } from './_palette';

export const Light = {
    FONT_FAMILY: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
    WEBKIT_FONT_SMOOTHING: 'antialiased',

    COLOR_WHITE: `rgba(${lightPalette.WHITE},1)`, // 浅色模式下深色背景内容Inverse
    COLOR_BLACK: `rgba(${lightPalette.BLACK},1)`, // 深色模式下浅色背景内容Inverse

    COLOR_PRIMARY: `rgba(${lightPalette.BLUE_5},1)`, // 主要颜色
    COLOR_PRIMARY_HOVER: `rgba(${lightPalette.BLUE_6},1)`, // 主要颜色悬浮态
    COLOR_PRIMARY_ACTIVE: `rgba(${lightPalette.BLUE_7},1)`, // 主要颜色激活态
    COLOR_PRIMARY_DISABLED: `rgba(${lightPalette.BLUE_2},1)`, // 主要颜色禁用态
    COLOR_PRIMARY_LIGHT_DEFAULT: `rgba(${lightPalette.BLUE_0},1)`, // 浅版主要颜色
    COLOR_PRIMARY_LIGHT_HOVER: `rgba(${lightPalette.BLUE_1},1)`, // 浅版主要颜色悬浮态
    COLOR_PRIMARY_LIGHT_ACTIVE: `rgba(${lightPalette.BLUE_2},1)`, // 浅版主要颜色激活态

    COLOR_SECONDARY: `rgba(${lightPalette.LIGHT_BLUE_5},1)`, // 次要颜色
    COLOR_SECONDARY_HOVER: `rgba(${lightPalette.LIGHT_BLUE_6},1)`, // 次要颜色悬浮态
    COLOR_SECONDARY_ACTIVE: `rgba(${lightPalette.LIGHT_BLUE_7},1)`, // 次要颜色激活态
    COLOR_SECONDARY_DISABLED: `rgba(${lightPalette.LIGHT_BLUE_2},1)`, // 次要颜色禁用态
    COLOR_SECONDARY_LIGHT_DEFAULT: `rgba(${lightPalette.LIGHT_BLUE_0},1)`, // 浅版次要颜色
    COLOR_SECONDARY_LIGHT_HOVER: `rgba(${lightPalette.LIGHT_BLUE_1},1)`, // 浅版次要颜色悬浮态
    COLOR_SECONDARY_LIGHT_ACTIVE: `rgba(${lightPalette.LIGHT_BLUE_2},1)`, // 浅版次要颜色激活态

    COLOR_TERTIARY: `rgba(${lightPalette.GREY_5},1)`, // 第三颜色
    COLOR_TERTIARY_HOVER: `rgba(${lightPalette.GREY_6},1)`, // 第三颜色悬浮态
    COLOR_TERTIARY_ACTIVE: `rgba(${lightPalette.GREY_7},1)`, // 第三颜色激活态
    COLOR_TERTIARY_LIGHT_DEFAULT: `rgba(${lightPalette.GREY_0},1)`, // 浅版第三颜色
    COLOR_TERTIARY_LIGHT_HOVER: `rgba(${lightPalette.GREY_1},1)`, // 浅版第三颜色悬浮态
    COLOR_TERTIARY_LIGHT_ACTIVE: `rgba(${lightPalette.GREY_2},1)`, // 浅版第三颜色激活态

    COLOR_DEFAULT: `rgba(${lightPalette.GREY_0},1)`, // 不建议使用
    COLOR_DEFAULT_HOVER: `rgba(${lightPalette.GREY_1},1)`, // 不建议使用
    COLOR_DEFAULT_ACTIVE: `rgba(${lightPalette.GREY_2},1)`, // 不建议使用

    COLOR_INFO: `rgba(${lightPalette.BLUE_5},1)`, // 信息色
    COLOR_INFO_HOVER: `rgba(${lightPalette.BLUE_6},1)`, // 信息色悬浮态
    COLOR_INFO_ACTIVE: `rgba(${lightPalette.BLUE_7},1)`, // 信息色激活态
    COLOR_INFO_DISABLED: `rgba(${lightPalette.BLUE_2},1)`, // 信息色禁用态
    COLOR_INFO_LIGHT_DEFAULT: `rgba(${lightPalette.BLUE_0},1)`, // 浅版信息色
    COLOR_INFO_LIGHT_HOVER: `rgba(${lightPalette.BLUE_1},1)`, // 浅版信息色悬浮态
    COLOR_INFO_LIGHT_ACTIVE: `rgba(${lightPalette.BLUE_2},1)`, // 浅版信息色激活态

    COLOR_SUCCESS: `rgba(${lightPalette.GREEN_5},1)`, // 成功色
    COLOR_SUCCESS_HOVER: `rgba(${lightPalette.GREEN_6},1)`, // 成功色悬浮态
    COLOR_SUCCESS_ACTIVE: `rgba(${lightPalette.GREEN_7},1)`, // 成功色激活态
    COLOR_SUCCESS_DISABLED: `rgba(${lightPalette.GREEN_2},1)`, // 成功色禁用态
    COLOR_SUCCESS_LIGHT_DEFAULT: `rgba(${lightPalette.GREEN_0},1)`, // 浅版成功色
    COLOR_SUCCESS_LIGHT_HOVER: `rgba(${lightPalette.GREEN_1},1)`, // 浅版成功色悬浮态
    COLOR_SUCCESS_LIGHT_ACTIVE: `rgba(${lightPalette.GREEN_2},1)`, // 浅版成功色激活态

    COLOR_DANGER: `rgba(${lightPalette.RED_5},1)`, // 危险色
    COLOR_DANGER_HOVER: `rgba(${lightPalette.RED_6},1)`, // 危险色悬浮态
    COLOR_DANGER_ACTIVE: `rgba(${lightPalette.RED_7},1)`, // 危险色激活态
    COLOR_DANGER_LIGHT_DEFAULT: `rgba(${lightPalette.RED_0},1)`, // 浅版危险色
    COLOR_DANGER_LIGHT_HOVER: `rgba(${lightPalette.RED_1},1)`, // 浅版危险色悬浮态
    COLOR_DANGER_LIGHT_ACTIVE: `rgba(${lightPalette.RED_2},1)`, // 浅版危险色激活态

    COLOR_WARNING: `rgba(${lightPalette.ORANGE_5},1)`, // 警示色
    COLOR_WARNING_HOVER: `rgba(${lightPalette.ORANGE_6},1)`, // 警示色悬浮态
    COLOR_WARNING_ACTIVE: `rgba(${lightPalette.ORANGE_7},1)`, // 警示色激活态
    COLOR_WARNING_LIGHT_DEFAULT: `rgba(${lightPalette.ORANGE_0},1)`, // 浅版警示色
    COLOR_WARNING_LIGHT_HOVER: `rgba(${lightPalette.ORANGE_1},1)`, // 浅版警示色悬浮态
    COLOR_WARNING_LIGHT_ACTIVE: `rgba(${lightPalette.ORANGE_2},1)`, // 浅版警示色激活态

    COLOR_FOCUS_BORDER: `rgba(${lightPalette.BLUE_5},1)`, // 多用于边框激活态颜色

    COLOR_DISABLED_TEXT: `rgba(${lightPalette.GREY_9},0.35)`, // 禁用态 - 文字
    COLOR_DISABLED_BORDER: `rgba(${lightPalette.GREY_1},1)`, // 禁用态 - 描边
    COLOR_DISABLED_BG: `rgba(${lightPalette.GREY_1},1)`, // 禁用态 - 背景
    COLOR_DISABLED_FILL: `rgba(${lightPalette.GREY_8},0.04)`, // 禁用态 - 填充

    COLOR_SHADOW: `rgba(${lightPalette.BLACK},0.04)`, // 阴影颜色

    COLOR_LINK: `rgba(${lightPalette.BLUE_5},1)`, // 链接颜色
    COLOR_LINK_HOVER: `rgba(${lightPalette.BLUE_6},1)`, // 链接颜色 - 悬浮态
    COLOR_LINK_ACTIVE: `rgba(${lightPalette.BLUE_7},1)`, // 链接颜色 - 激活态
    COLOR_LINK_VISITED: `rgba(${lightPalette.BLUE_5},1)`, // 链接颜色 - 已访问

    COLOR_BORDER: `rgba(${lightPalette.GREY_9},0.08)`, // 默认描边颜色
    COLOR_NAV_BG: `rgba(${lightPalette.WHITE},1)`, // 导航背景色
    COLOR_OVERLAY_BG: 'rgba(22,22,26,0.6)', // 蒙层背景色

    COLOR_FILL_0: `rgba(${lightPalette.GREY_8},0.05)`, // 填充色 - 默认态
    COLOR_FILL_1: `rgba(${lightPalette.GREY_8},0.09)`, // 填充色 - 悬浮态
    COLOR_FILL_2: `rgba(${lightPalette.GREY_8},0.13)`, // 填充色 - 激活态
    COLOR_BG_0: `rgba(${lightPalette.WHITE},1)`, // 背景色 - 最下层
    COLOR_BG_1: `rgba(${lightPalette.WHITE},1)`, // 背景色 - 次下层
    COLOR_BG_2: `rgba(${lightPalette.WHITE},1)`, // 背景色 - 中间层
    COLOR_BG_3: `rgba(${lightPalette.WHITE},1)`, // 背景色 - 次上层
    COLOR_BG_4: `rgba(${lightPalette.WHITE},1)`, // 背景色 - 最上层
    COLOR_TEXT_0: `rgba(${lightPalette.GREY_9},1)`, // 文本/图标颜色 - 最主要
    COLOR_TEXT_1: `rgba(${lightPalette.GREY_9},0.8)`, // 文本/图标颜色 - 稍次要
    COLOR_TEXT_2: `rgba(${lightPalette.GREY_9},0.62)`, // 文本/图标颜色 - 次要
    COLOR_TEXT_3: `rgba(${lightPalette.GREY_9},0.35)`, // 文本/图标颜色 - 最次要

    SHADOW_ELEVATED: '0 0 1px rgba(0,0,0,0.3), 0 4px 14px rgba(0,0,0,0.1)', // 用于toast, modal, popover等
    BORDER_RADIUS_EXTRA_SMALL: '3px', // 超小圆角
    BORDER_RADIUS_SMALL: '3px', // 小圆角
    BORDER_RADIUS_MEDIUM: '6px', // 中圆角
    BORDER_RADIUS_LARGE: '12px', // 大圆角
    BORDER_RADIUS_CIRCLE: '50%', // 全圆角
    BORDER_RADIUS_FULL: '9999px', // 全尺寸圆角
    COLOR_HIGHLIGHT_BG: `rgba(${lightPalette.YELLOW_4},1)`, // 高亮文本背景色
    COLOR_HIGHLIGHT: `rgba(${lightPalette.BLACK},1)`, // 高亮文本色

    // vchart 数据色板颜色
    COLOR_DATA_0: `rgba(${lightPalette.INDIGO_5},1)`,
    COLOR_DATA_1: `rgba(${lightPalette.CYAN_1},1)`,
    COLOR_DATA_2: `rgba(${lightPalette.ORANGE_5},1)`,
    COLOR_DATA_3: `rgba(${lightPalette.PURPLE_3},1)`,
    COLOR_DATA_4: `rgba(${lightPalette.BLUE_4},1)`,
    COLOR_DATA_5: `rgba(${lightPalette.YELLOW_5},1)`,
    COLOR_DATA_6: `rgba(${lightPalette.PINK_5},1)`,
    COLOR_DATA_7: `rgba(${lightPalette.TEAL_7},1)`,
    COLOR_DATA_8: `rgba(${lightPalette.LIME_8},1)`,
    COLOR_DATA_9: `rgba(${lightPalette.PURPLE_1},1)`,
    COLOR_DATA_10: `rgba(${lightPalette.CYAN_4},1)`,
    COLOR_DATA_11: `rgba(${lightPalette.ORANGE_1},1)`,
    COLOR_DATA_12: `rgba(${lightPalette.INDIGO_3},1)`,
    COLOR_DATA_13: `rgba(${lightPalette.BLUE_1},1)`,
    COLOR_DATA_14: `rgba(${lightPalette.LIME_4},1)`,
    COLOR_DATA_15: `rgba(${lightPalette.PINK_1},1)`,
    COLOR_DATA_16: `rgba(${lightPalette.TEAL_5},1)`,
    COLOR_DATA_17: `rgba(${lightPalette.LIGHT_GREEN_7},1)`,
    COLOR_DATA_18: `rgba(${lightPalette.PURPLE_6},1)`,
    COLOR_DATA_19: `rgba(${lightPalette.INDIGO_7},1)`,
};

export const Dark = {
    FONT_FAMILY: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
    WEBKIT_FONT_SMOOTHING: 'antialiased',

    COLOR_WHITE: `rgba(${darkPalette.WHITE},1)`,
    COLOR_BLACK: `rgba(${darkPalette.BLACK},1)`,

    COLOR_PRIMARY: `rgba(${darkPalette.BLUE_4},1)`,
    COLOR_PRIMARY_HOVER: `rgba(${darkPalette.BLUE_5},1)`,
    COLOR_PRIMARY_ACTIVE: `rgba(${darkPalette.BLUE_6},1)`,
    COLOR_PRIMARY_DISABLED: `rgba(${darkPalette.BLUE_2},1)`,
    COLOR_PRIMARY_LIGHT_DEFAULT: `rgba(${darkPalette.BLUE_4},0.2)`,
    COLOR_PRIMARY_LIGHT_HOVER: `rgba(${darkPalette.BLUE_4},0.3)`,
    COLOR_PRIMARY_LIGHT_ACTIVE: `rgba(${darkPalette.BLUE_4},0.4)`,

    COLOR_SECONDARY: `rgba(${darkPalette.LIGHT_BLUE_4},1)`,
    COLOR_SECONDARY_HOVER: `rgba(${darkPalette.LIGHT_BLUE_5},1)`,
    COLOR_SECONDARY_ACTIVE: `rgba(${darkPalette.LIGHT_BLUE_6},1)`,
    COLOR_SECONDARY_DISABLED: `rgba(${darkPalette.LIGHT_BLUE_2},1)`,
    COLOR_SECONDARY_LIGHT_DEFAULT: `rgba(${darkPalette.LIGHT_BLUE_4},0.2)`,
    COLOR_SECONDARY_LIGHT_HOVER: `rgba(${darkPalette.LIGHT_BLUE_4},0.3)`,
    COLOR_SECONDARY_LIGHT_ACTIVE: `rgba(${darkPalette.LIGHT_BLUE_4},0.4)`,

    COLOR_TERTIARY: `rgba(${darkPalette.GREY_4},1)`,
    COLOR_TERTIARY_HOVER: `rgba(${darkPalette.GREY_5},1)`,
    COLOR_TERTIARY_ACTIVE: `rgba(${darkPalette.GREY_6},1)`,
    COLOR_TERTIARY_LIGHT_DEFAULT: `rgba(${darkPalette.GREY_4},0.2)`,
    COLOR_TERTIARY_LIGHT_HOVER: `rgba(${darkPalette.GREY_4},0.3)`,
    COLOR_TERTIARY_LIGHT_ACTIVE: `rgba(${darkPalette.GREY_4},0.4)`,

    COLOR_DEFAULT: `rgba(${darkPalette.GREY_9},1)`,
    COLOR_DEFAULT_HOVER: `rgba(${darkPalette.GREY_8},1)`,
    COLOR_DEFAULT_ACTIVE: `rgba(${darkPalette.GREY_7},1)`,

    COLOR_INFO: `rgba(${darkPalette.BLUE_4},1)`,
    COLOR_INFO_HOVER: `rgba(${darkPalette.BLUE_5},1)`,
    COLOR_INFO_ACTIVE: `rgba(${darkPalette.BLUE_6},1)`,
    COLOR_INFO_DISABLED: `rgba(${darkPalette.BLUE_2},1)`,
    COLOR_INFO_LIGHT_DEFAULT: `rgba(${darkPalette.BLUE_4},0.2)`,
    COLOR_INFO_LIGHT_HOVER: `rgba(${darkPalette.BLUE_4},0.3)`,
    COLOR_INFO_LIGHT_ACTIVE: `rgba(${darkPalette.BLUE_4},0.4)`,

    COLOR_SUCCESS: `rgba(${darkPalette.GREEN_4},1)`,
    COLOR_SUCCESS_HOVER: `rgba(${darkPalette.GREEN_5},1)`,
    COLOR_SUCCESS_ACTIVE: `rgba(${darkPalette.GREEN_6},1)`,
    COLOR_SUCCESS_DISABLED: `rgba(${darkPalette.GREEN_2},1)`,
    COLOR_SUCCESS_LIGHT_DEFAULT: `rgba(${darkPalette.GREEN_4},0.2)`,
    COLOR_SUCCESS_LIGHT_HOVER: `rgba(${darkPalette.GREEN_4},0.3)`,
    COLOR_SUCCESS_LIGHT_ACTIVE: `rgba(${darkPalette.GREEN_4},0.4)`,

    COLOR_DANGER: `rgba(${darkPalette.RED_5},1)`,
    COLOR_DANGER_HOVER: `rgba(${darkPalette.RED_6},1)`,
    COLOR_DANGER_ACTIVE: `rgba(${darkPalette.RED_7},1)`,
    COLOR_DANGER_LIGHT_DEFAULT: `rgba(${darkPalette.RED_5},0.2)`,
    COLOR_DANGER_LIGHT_HOVER: `rgba(${darkPalette.RED_5},0.3)`,
    COLOR_DANGER_LIGHT_ACTIVE: `rgba(${darkPalette.RED_5},0.4)`,

    COLOR_WARNING: `rgba(${darkPalette.ORANGE_5},1)`,
    COLOR_WARNING_HOVER: `rgba(${darkPalette.ORANGE_6},1)`,
    COLOR_WARNING_ACTIVE: `rgba(${darkPalette.ORANGE_7},1)`,
    COLOR_WARNING_LIGHT_DEFAULT: `rgba(${darkPalette.ORANGE_5},0.2)`,
    COLOR_WARNING_LIGHT_HOVER: `rgba(${darkPalette.ORANGE_5},0.3)`,
    COLOR_WARNING_LIGHT_ACTIVE: `rgba(${darkPalette.ORANGE_5},0.4)`,

    COLOR_FOCUS_BORDER: `rgba(${darkPalette.BLUE_4},1)`,

    COLOR_DISABLED_TEXT: `rgba(${darkPalette.GREY_9},0.35)`,
    COLOR_DISABLED_BORDER: `rgba(${darkPalette.GREY_8},1)`,
    COLOR_DISABLED_BG: `rgba(${darkPalette.GREY_8},1)`,
    COLOR_DISABLED_FILL: `rgba(${darkPalette.GREY_9},0.04)`,

    COLOR_LINK: `rgba(${darkPalette.BLUE_4},1)`,
    COLOR_LINK_HOVER: `rgba(${darkPalette.BLUE_5},1)`,
    COLOR_LINK_ACTIVE: `rgba(${darkPalette.BLUE_6},1)`,
    COLOR_LINK_VISITED: `rgba(${darkPalette.BLUE_4},1)`,

    COLOR_NAV_BG: `rgba(35,36,41,1)`,
    SHADOW_ELEVATED: 'inset 0 0 0 1px rgba(255,255,255,0.1), 0 4px 14px rgba(0,0,0,0.25)',
    COLOR_OVERLAY_BG: 'rgba(22,22,26,0.6)',

    COLOR_FILL_0: `rgba(${darkPalette.WHITE},0.12)`,
    COLOR_FILL_1: `rgba(${darkPalette.WHITE},0.16)`,
    COLOR_FILL_2: `rgba(${darkPalette.WHITE},0.20)`,
    COLOR_BORDER: `rgba(${darkPalette.WHITE},0.08)`,
    COLOR_SHADOW: `rgba(${darkPalette.BLACK},0.04)`,

    COLOR_BG_0: `rgba(22,22,26,1)`,
    COLOR_BG_1: `rgba(35,36,41,1)`,
    COLOR_BG_2: `rgba(53,54,60,1)`,
    COLOR_BG_3: `rgba(67,68,74,1)`,
    COLOR_BG_4: `rgba(79,81,89,1)`,

    COLOR_TEXT_0: `rgba(${darkPalette.GREY_9},1)`,
    COLOR_TEXT_1: `rgba(${darkPalette.GREY_9},0.8)`,
    COLOR_TEXT_2: `rgba(${darkPalette.GREY_9},0.6)`,
    COLOR_TEXT_3: `rgba(${darkPalette.GREY_9},0.35)`,

    BORDER_RADIUS_EXTRA_SMALL: '3px',
    BORDER_RADIUS_SMALL: '3px',
    BORDER_RADIUS_MEDIUM: '6px',
    BORDER_RADIUS_LARGE: '12px',
    BORDER_RADIUS_CIRCLE: '50%',
    BORDER_RADIUS_FULL: '9999px',

    COLOR_HIGHLIGHT_BG: `rgba(${darkPalette.YELLOW_4},1)`, // 高亮文本背景色
    COLOR_HIGHLIGHT: `rgba(${darkPalette.WHITE},1)`, // 高亮文本色

    // vchart 数据色板颜色
    COLOR_DATA_0: `rgba(${darkPalette.INDIGO_5},1)`,
    COLOR_DATA_1: `rgba(${darkPalette.CYAN_1},1)`,
    COLOR_DATA_2: `rgba(${darkPalette.ORANGE_5},1)`,
    COLOR_DATA_3: `rgba(${darkPalette.PURPLE_3},1)`,
    COLOR_DATA_4: `rgba(${darkPalette.BLUE_4},1)`,
    COLOR_DATA_5: `rgba(${darkPalette.YELLOW_5},1)`,
    COLOR_DATA_6: `rgba(${darkPalette.PINK_5},1)`,
    COLOR_DATA_7: `rgba(${darkPalette.TEAL_7},1)`,
    COLOR_DATA_8: `rgba(${darkPalette.LIME_8},1)`,
    COLOR_DATA_9: `rgba(${darkPalette.PURPLE_1},1)`,
    COLOR_DATA_10: `rgba(${darkPalette.CYAN_4},1)`,
    COLOR_DATA_11: `rgba(${darkPalette.ORANGE_1},1)`,
    COLOR_DATA_12: `rgba(${darkPalette.INDIGO_3},1)`,
    COLOR_DATA_13: `rgba(${darkPalette.BLUE_1},1)`,
    COLOR_DATA_14: `rgba(${darkPalette.LIME_4},1)`,
    COLOR_DATA_15: `rgba(${darkPalette.PINK_1},1)`,
    COLOR_DATA_16: `rgba(${darkPalette.TEAL_5},1)`,
    COLOR_DATA_17: `rgba(${darkPalette.LIGHT_GREEN_7},1)`,
    COLOR_DATA_18: `rgba(${darkPalette.PURPLE_6},1)`,
    COLOR_DATA_19: `rgba(${darkPalette.INDIGO_7},1)`,
};
