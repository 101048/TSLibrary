import path from 'path';
import typescript from 'rollup-plugin-typescript2';

// 处理外部模块（rollup默认无法处理外部模块，也就是说无法解析打包从npm上下载使用的包，使用这个插件可以帮助我们使用）
import resolve from 'rollup-plugin-node-resolve';
// 处理导入的commonjs模块的包（rollup默认只支持ES6模块的包）
import common from 'rollup-plugin-commonjs';
// 打包压缩es6的js代码
import { terser } from 'rollup-plugin-terser';

export default {
  // 文件入口
  input: {
    // __dirname 表示绝对路径的根路径 path.resolve则将项目的根路径和右侧的字符串合并成一个字符串
    utils: path.resolve(__dirname, './src/index.ts'),
  },
  // 出口
  output: {
    dir: path.resolve(__dirname, 'dist'),
    /**
     *  format 打包后的规范
     *  amd – 异步模块定义，用于像RequireJS这样的模块加载器
     *  cjs – CommonJS，适用于 Node 和 Browserify/Webpack
     *  esm – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
     *  iife – 一个自动执行的功能，适合作为<script>标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
     *  umd – 通用模块定义以amd cjs 和iife为一体
     *  system – SystemJS加载器格式
     */
    format: 'umd',
    // 生成包名称
    name: 'utils',
    // 全局模块
    globals: {},
    // 路径
    paths: {
      d3: 'https://d3js.org/d3.v4.min'
    },
    // 文件头部添加的内容
    banner: '',
    // 文件尾部添加的内容
    footer: '',
    // 被打包代码的开头添加内容
    intro: '',
    // 被打包代码的尾部添加内容
    outro: '',
    // 是否扩展 iife 或者umd格式定义的全局变量
    extend: false,
    // 忽略缩进并生成最小代码 默认是false
    compact: true,
    // 入口文件input配置所指向的文件包名
    // entryFileNames: '[name]-[hash]-[format].js'
    // 代码分割 共享chunk包的文件名
    // chunkFileNames: '[name]-[hash]-[format].js',
    // 创建源码的sourcemap
    sourcemap: false,
    // 修改sourcemap指向的源文件路径
    // sourcemapPathTransform: relativePath => relativePath.replace('src','anotherSrc')
    // 表示当使用不推荐功能时 rollup 将抛出错误而不是显示警告
    strictDeprecations: false,
    // 提取多个入口文件，共享的公共模块
    // manualChunks: {}
  },
  // 插件
  plugins: [
    typescript({}),
    resolve({}),
    common({}),
    terser()
  ],
  // 外链 不将里面选中的文件进行打包，而是做为外部依赖
  external: [],
  // 性能优化 (摇树)
  treeshake: {
    // 是否禁止空导入 默认为true
    moduleSideEffects: true
  },
  
}