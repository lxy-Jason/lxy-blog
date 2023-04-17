/*
 * @Author: 李湘粤
 * @Date: 2023-04-15 18:34:15
 * @LastEditors: 李湘粤
 * @LastEditTime: 2023-04-17 22:46:56
 * @Description: 请填写简介
 */
module.exports = {
  title: "lxy-blog",
  description: "just a blog",
  base: "/",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "博客", link: "/blog/" },
    ],
    sidebar:{
      '/blog/':[
        {
          'title':'前端',
          'collapsable':false, //是否可折叠
          children:[
            ['css/test','垂直居中'],
            ['css/margin穿透','margin穿透'],
            ['css/盒模型','盒模型'],
            ['css/两栏布局','两栏布局'],
          ]
        }
      ]
    }
  },
};
