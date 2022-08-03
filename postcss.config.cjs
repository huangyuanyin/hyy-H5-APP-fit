const path = require('path');

const judgeComponent = (file) => {
  const ignore = ['vant', '@nutui', '@varlet'];
  return ignore.some((item) => path.join(file).includes(path.join('node_modules', item)));
};

module.exports = {
  plugins: {
    autoprefixer: { overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'] }, //用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
    'cnjm-postcss-px-to-viewport': {
      unitToConvert: 'px', // 需要转换的单位，默认为"px"
      viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度
      viewportHeight: 1334, // 视窗的高度，根据375设备的宽度来指定，一般指定667，也可以不配置
      unitPrecision: 6, // 转换后的精度，即小数点位数 //  指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      selectorBlackList: ['.ignore-', '.hairlines'], //指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      include: [],
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
      customFun: ({ file }) => {
        // 这个自定义的方法是针对处理vant组件下的设计稿为375问题
        const designWidth = judgeComponent(file) ? 375 : 750;
        return designWidth;
      },
      landscape: false, //是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
      landscapeUnit: 'vw', //横屏时使用的单位
      landscapeWidth: 1134 //横屏时使用的视口宽度
    },
  },
};
