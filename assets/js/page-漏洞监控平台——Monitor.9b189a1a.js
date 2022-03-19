(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{589:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"漏洞监控平台-monitor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞监控平台-monitor"}},[s._v("#")]),s._v(" 漏洞监控平台——Monitor")]),s._v(" "),t("h2",{attrs:{id:"写在前面的话"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在前面的话"}},[s._v("#")]),s._v(" "),t("strong",[s._v("写在前面的话")])]),s._v(" "),t("p",[s._v("对于网络安全从业者来说，实时掌握漏洞动态是至关重要的，所以萌生了开发一个监控平台的想法，把最新漏洞资讯集成然后进行推送。这里推送选的是企业微信，留下了邮件推送的接口，默认是关闭的，想开启的小伙伴自行开启。数据库选用的是sqlite。目前实现了监控GitHub、微软、CNNVD。（不要问我为啥不监控CNVD，我是不会告诉你我干不过它的反爬【狗头保命】）。")]),s._v(" "),t("h2",{attrs:{id:"项目介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目介绍"}},[s._v("#")]),s._v(" "),t("strong",[s._v("项目介绍")])]),s._v(" "),t("h3",{attrs:{id:"项目目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目目录结构"}},[s._v("#")]),s._v(" 项目目录结构")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("│  cve_db.db\n│  monitor.py\n│  style.css\n│\n├─Functions\n│  ├─Commons\n│  │      excel.py\n│  │      excel_html.py\n│  │      github.py\n│  │      mail.py\n│  │      style.css\n│  │      translate.py\n│  │      wechat_api.py\n│  │      __init__.py\n│  │\n│  ├─RequestInfo\n│  │      cnnvd_monitor.py\n│  │      github_monitor.py\n│  │      MS_monitor.py\n│  │      __init__.py\n│  │\n│  └─Sql\n│          installDb.py\n│          sql_helper.py\n│\n└─log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("h3",{attrs:{id:"文件说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件说明"}},[s._v("#")]),s._v(" 文件说明")]),s._v(" "),t("p",[t("strong",[s._v("monitor.py")]),s._v("文件是主文件，部署完成后直接运行就此文件可以。")]),s._v(" "),t("p",[t("strong",[s._v("Commons")]),s._v("目录下的文件为主要功能文件。")]),s._v(" "),t("p",[t("strong",[s._v("RequestInfo")]),s._v("目录下为监控目标的一些文件。")]),s._v(" "),t("p",[t("strong",[s._v("Sql")]),s._v("目录下为数据库相关文件，installDb.py是用来生成数据库和日志文件的。")]),s._v(" "),t("p",[t("strong",[s._v("log")]),s._v("目录为存放日志文件目录。")]),s._v(" "),t("h3",{attrs:{id:"功能介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[s._v("#")]),s._v(" 功能介绍")]),s._v(" "),t("p",[s._v("同时监控CNNVD、Github、微软官方的漏洞消息。")]),s._v(" "),t("h4",{attrs:{id:"cnnvd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cnnvd"}},[s._v("#")]),s._v(" CNNVD")]),s._v(" "),t("ul",[t("li",[s._v("每天推送企业微信卡片消息")]),s._v(" "),t("li",[s._v("Web端漏洞信息表格展示")]),s._v(" "),t("li",[s._v("每周五统计漏洞数量（高危、中危、低危）")]),s._v(" "),t("li",[s._v("高危漏洞信息醒目标注")])]),s._v(" "),t("h4",{attrs:{id:"微软官方漏洞消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微软官方漏洞消息"}},[s._v("#")]),s._v(" 微软官方漏洞消息")]),s._v(" "),t("ul",[t("li",[s._v("每天推送企业微信卡片消息")]),s._v(" "),t("li",[s._v("Web端漏洞信息表格展示")])]),s._v(" "),t("h4",{attrs:{id:"github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[s._v("#")]),s._v(" Github")]),s._v(" "),t("ul",[t("li",[s._v("每天推送企业微信卡片消息")]),s._v(" "),t("li",[s._v("点击卡片消息自动跳转对应Github链接")])]),s._v(" "),t("h4",{attrs:{id:"展示效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#展示效果"}},[s._v("#")]),s._v(" 展示效果")]),s._v(" "),t("p",[s._v("效果如下图")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346328639935.webp",alt:"图片",loading:"lazy"}}),s._v("cve")]),s._v(" "),t("p",[t("strong",[s._v("当点击CNNVD的消息卡片时，会跳转到相对应的Web端以表格形式展示")]),s._v("，如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346328639936.webp",alt:"图片",loading:"lazy"}}),s._v("cnnvd")]),s._v(" "),t("p",[t("strong",[s._v("点击微软漏洞消息的漏洞卡片时，也会跳转到相对应的Web端表格展示")]),s._v("，如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346328639937.webp",alt:"图片",loading:"lazy"}}),s._v("微软")]),s._v(" "),t("p",[t("strong",[s._v("点击Github的漏洞消息通知时，跳转到相对于的Github地址")]),s._v("，如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346328639938.webp",alt:"图片",loading:"lazy"}}),s._v("github")]),s._v(" "),t("h2",{attrs:{id:"项目部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目部署"}},[s._v("#")]),s._v(" "),t("strong",[s._v("项目部署")])]),s._v(" "),t("h3",{attrs:{id:"前期准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前期准备"}},[s._v("#")]),s._v(" 前期准备")]),s._v(" "),t("ul",[t("li",[s._v("开发语言：python3")]),s._v(" "),t("li",[s._v("一台服务器(脚本跑在服务器上)")]),s._v(" "),t("li",[s._v("一个域名(可选)")])]),s._v(" "),t("p",[s._v("首先安装依赖，如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("import os\nimport time\nfrom io import BytesIO\nimport xlwt\nfrom xlrd import open_workbook\nimport datetime\nimport dominate\nfrom dominate.tags import *\nimport requests\nimport smtplib\nfrom email.mime.text import MIMEText\nfrom email.header import Header\nimport hashlib\nfrom lxml import etree\nimport json\nfrom bs4 import BeautifulSoup\nimport re\nimport sqlite3\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("然后进行数据库初始化，初始化时生成log文件夹用来存放生成的日志文件。命令如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("python3 installDb.py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),t("p",[s._v("因为要做Web端表格展示，所以这里"),t("strong",[s._v("使用Nginx做了目录浏览")]),s._v("。服务器系统使用的是CentOS7，过程如下。")]),s._v(" "),t("p",[s._v("首先使用yum源下载nginx，命令如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("yum install -y nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("装好后，查看版本，检查是否安装成功，如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346328639939.webp",alt:"图片",loading:"lazy"}})]),s._v(" "),t("p",[s._v("然后找到nginx的配置文件，具体位置为：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd /etc/nginx/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("找到nginx.conf文件，对其中的server板块进行修改就可以了，"),t("strong",[s._v("主要是添加了末尾三行")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("server {\n    listen       80;\n    listen       [::]:80;\n    server_name  _;\n   # root         /usr/share/nginx/html;\n    charset utf-8;\n    # Load configuration files for the default server block.\n    include /etc/nginx/default.d/*.conf;\n    location / {\n            root /usr/share/nginx/html/download;\n    autoindex on; #开启索引功能\n    autoindex_exact_size off; #关闭计算文件确切大小(bytes)\n    autoindex_localtime on; #显示本机时间\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[t("strong",[s._v("注意生成文件位置")]),s._v("，我这里是"),t("code",[s._v("/usr/share/nginx/html/download")]),s._v(" ，看个人爱好。")]),s._v(" "),t("p",[t("strong",[s._v("如果修改，请修改monitor.py的24行和excel_html.py的11行。")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346328640040.webp",alt:"图片",loading:"lazy"}}),s._v("image-20220122141836235")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346328640041.webp",alt:"图片",loading:"lazy"}}),s._v("image-20220122142248502")]),s._v(" "),t("h3",{attrs:{id:"配置企业微信推送"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置企业微信推送"}},[s._v("#")]),s._v(" 配置企业微信推送")]),s._v(" "),t("p",[s._v("这个需要先到企业微信创建一个企业，并自建一个应用，"),t("strong",[s._v("获取到自定义应用的 Secret和注册的企业 corpid")]),s._v("，就可以了。修改位置在**wechat_api.py**文件****"),t("strong",[s._v("的14行至17行")]),s._v("，如下图：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346328640042.webp",alt:"图片",loading:"lazy"}}),s._v("image-20220122142707821")]),s._v(" "),t("p",[s._v("启动监控脚本，命令如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("python3 moniter.py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("大功告成！！！")])])}),[],!1,null,null,null);a.default=e.exports}}]);