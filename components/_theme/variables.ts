export const PREFIX = 'semi'; // semi 前缀

/* sizing */
export const HEIGHT_CONTROL_SMALL = '24px'; // 表单项高度 - 小尺寸
export const HEIGHT_CONTROL_DEFAULT = '32px'; // 表单项高度 - 默认尺寸
export const HEIGHT_CONTROL_LARGE = '40px'; // 表单项高度 - 大尺寸
export const BORDER_THICKNESS = 0; // 描边宽度 - 零
export const BORDER_THICKNESS_CONTROL = '1px'; // 描边宽度 - 默认状态（checkbox 等）
export const BORDER_THICKNESS_CONTROL_FOCUS = '1px'; // 描边宽度 - focus 状态（checkbox 等）

export const WIDTH_ICON_EXTRA_SMALL = '8px'; // 图标尺寸 - 超小
export const WIDTH_ICON_SMALL = '12px'; // 图标尺寸 - 小
export const WIDTH_ICON_MEDIUM = '16px'; // 图标尺寸 - 中
export const WIDTH_ICON_LARGE = '20px'; // 图标尺寸 - 大
export const WIDTH_ICON_EXTRA_LARGE = '24px'; // 图标尺寸 - 超大

/* spacing */
export const SPACING_NONE = 0; // 间距 - 零
export const SPACING_SUPER_TIGHT = '2px'; // 间距 - 极紧凑尺寸内/外边距
export const SPACING_EXTRA_TIGHT = '4px'; // 间距 - 超紧凑尺寸内/外边距
export const SPACING_TIGHT = '8px'; // 间距 - 紧凑尺寸内/外边距
export const SPACING_BASE_TIGHT = '12px'; // 间距 - 默认（偏紧凑）尺寸内/外边距
export const SPACING_BASE = '16px'; // 间距 - 默认尺寸内/外边距
export const SPACING_BASE_LOOSE = '20px'; // 间距 - 默认（偏宽松）尺寸内/外边距
export const SPACING_LOOSE = '24px'; // 间距 - 宽松尺寸内/外边距
export const SPACING_EXTRA_LOOSE = '32px'; // 间距 - 超宽松尺寸内/外边距
export const SPACING_SUPER_LOOSE = '40px'; // 间距 - 极宽松尺寸内/外边距

// z-index
export const Z_PORTAL = 1; // 抽象插槽，适用于未经特殊定制的所有组件
export const Z_AFFIX = 10; // 固定位置的页面元素 z-index
export const Z_BACKTOP = 10; // 返回顶部 z-index
export const Z_BADGE = 10; // badge z-index
// export const Z_AVATAR_DEFAULT = 100;
export const Z_TABLE_FIXED = 101; // table fixed column
export const Z_MODAL = 1000; // modal z-index
export const Z_MODAL_MASK = 1000; // modal 遮罩 z-index

export const Z_TOAST = 1010; // toast 组件 z-index
export const Z_NOTIFICATION = 1010; // notification 组件 z-index
export const Z_POPOVER = 1030; // popover 组件 z-index
export const Z_DROPDOWN = 1050; // dropdown 组件 z-index
export const Z_TOOLTIP = 1060; // tooltip 组件 z-index
// export const Z_AVATAR_DEFAULT = 100;
export const Z_IMAGE_PREVIEW = 1070; // Image 组件预览层z-index
export const Z_IMAGE_PREVIEW_HEADER = 1; // Image 组件预览层中 header 部分 z-index

// 正在拖拽中的元素的 z-index，需要高于所有的弹出层组件 z-index
export const Z_TRANSFER_RIGHT_ITEM_DRAG_ITEM_MOVE = 2000; // 穿梭框右侧面板中正在拖拽元素的z-index
export const Z_TAGINPUT_DRAG_ITEM_MOVE = 2000; // 标签输入框中正在拖拽元素的z-index
export const Z_RESIZABLE_HANDLER = 2000; // 伸缩框组件中handler的z-index 
// export const Z_RESIZABLE_BACKGROUND = 2010; // 伸缩框组件中背景的z-index

// font
export const FONT_FAMILY_REGULAR = `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue',
    Helvetica, Arial, sans-serif`; // semi 预置字体回退
export const FONT_SIZE_SMALL = '12px'; // 小文本字号
export const FONT_SIZE_REGULAR = '14px'; // 常规文本字号

export const FONT_SIZE_HEADER_6 = '16px'; // 六级标题字号
export const FONT_SIZE_HEADER_5 = '18px'; // 五级标题字号
export const FONT_SIZE_HEADER_4 = '20px'; // 四级标题字号
export const FONT_SIZE_HEADER_3 = '24px'; // 三级标题字号
export const FONT_SIZE_HEADER_2 = '28px'; // 二级标题字号
export const FONT_SIZE_HEADER_1 = '32px'; // 一级标题字号

export const FONT_WEIGHT_LIGHT = 200; // 字重 - 轻
export const FONT_WEIGHT_REGULAR = 400; // 字重 - 常规
export const FONT_WEIGHT_BOLD = 600; // 字重 - 加粗
