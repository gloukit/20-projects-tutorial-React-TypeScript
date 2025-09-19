# 25个React项目
### 技术栈：
- React + TypeScript
### 参考视频：
- https://www.youtube.com/watch?v=5ZdHfJVAY-s
### 改进方向：
- 使用 TypeScript 语法；
- 功能拓展：
  - `image-slider`图片轮播项目：利用定时器，新增“自动播放”功能；
  - `QRCode`生成项目：引入`html-to-image`库，增加“二维码图片下载”功能；
  - `Github-profile-finder`的具体改进：
    - 1、fetch数据的执行流程：依赖userName触发fetch请求，handleSumbit只管更新状态变量；
    - 2、拆分状态管理：让searchInput专门管理输入框，userName只管提交的搜索关键字；
    - 3、处理输入无效的情况，排除fetch返回的错误对象，并在页面显示错误信息
