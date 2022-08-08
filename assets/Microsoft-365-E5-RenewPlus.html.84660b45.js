import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as d,a as e,e as r,d as n,b as t,r as l}from"./app.23fcb919.js";const i={},h=n('<h1 id="e5-\u8C03\u7528api\u7EED\u8BA2\u7A0B\u5E8F-microsoft-365-e5-renew-plus" tabindex="-1"><a class="header-anchor" href="#e5-\u8C03\u7528api\u7EED\u8BA2\u7A0B\u5E8F-microsoft-365-e5-renew-plus" aria-hidden="true">#</a> E5 \u8C03\u7528API\u7EED\u8BA2\u7A0B\u5E8F\uFF1AMicrosoft 365 E5 Renew Plus</h1><h2 id="microsoft-365-e5-renew-plus\u7684\u7531\u6765" tabindex="-1"><a class="header-anchor" href="#microsoft-365-e5-renew-plus\u7684\u7531\u6765" aria-hidden="true">#</a> Microsoft 365 E5 Renew Plus\u7684\u7531\u6765</h2><p>Microsoft 365 E5 Renew Plus\u4E3AMicrosoft 365 E5 Renew\u7684\u5347\u7EA7\u7248\uFF0C\u5176\u529F\u80FD\u6027\uFF0C\u6613\u7528\u6027\uFF0C\u7F8E\u89C2\u7A0B\u5EA6\u4E0A\u90FD\u8981\u5F3A\u4E8E\u65E7\u7248\u3002</p><h2 id="\u4E3B\u8981\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u8981\u529F\u80FD" aria-hidden="true">#</a> \u4E3B\u8981\u529F\u80FD</h2><ul><li><strong>\u652F\u6301\u5F00\u673A\u81EA\u542F\u52A8\u540E\u53F0\u8C03\u7528</strong>\uFF1A\u4F7F\u7528\u7B80\u5355\u65B9\u4FBF\uFF0C\u65E0\u9700\u8D2D\u4E70\u670D\u52A1\u5668\u90E8\u7F72\uFF0C\u672C\u5730\u5E94\u7528\u7A0B\u5E8F\u5373\u5F00\u5373\u7528</li><li><strong>\u4E24\u79CD\u53EF\u9009\u7684\u8C03\u7528\u6743\u9650</strong>\uFF1A\u7528\u6237\u672A\u767B\u5F55\u4F5C\u4E3A\u5B88\u62A4\u7A0B\u5E8F\u8C03\u7528(\u9700\u8981\u5BA2\u6237\u7AEF\u5BC6\u7801)\u3001\u7A0B\u5E8F\u4EE5\u767B\u5F55\u7528\u6237\u8EAB\u4EFD\u76F4\u63A5\u8C03\u7528(\u9700\u8981\u8D26\u6237\u5BC6\u7801)</li><li><strong>\u81EA\u52A8\u914D\u7F6EAPI\u6743\u9650</strong>\uFF1A\u767B\u5F55\u8C03\u7528\u7684API\u6743\u9650\u652F\u6301\u7531\u7A0B\u5E8F\u81EA\u52A8\u914D\u7F6E</li><li><strong>API\u79CD\u7C7B\u9F50\u5168</strong>\uFF1A43\u4E2A\u53EF\u9009\u7684Microsoft Graph REST API Beta\u4E2D\u7684API(\u672A\u6765\u53EF\u80FD\u4F1A\u7EE7\u7EED\u6DFB\u52A0)</li><li><strong>\u5B8C\u5168\u968F\u673A\u7684API\u9009\u7528\u6A21\u5F0F</strong>\uFF1A\u4ECE\u5DF2\u9009\u5B9A\u7684API\u5E8F\u5217\u4E2D\u968F\u673A\u62BD\u53D6\u4E00\u4E2A\u6216\u51E0\u4E2A\u8FDB\u884C\u8C03\u7528\uFF08\u4E2A\u6570\u548CAPI\u968F\u673A\uFF09</li><li><strong>\u5B8C\u5168\u968F\u673A\u7684API\u8C03\u7528\u987A\u5E8F</strong>\uFF1A\u6BCF\u8F6EAPI\u7684\u8C03\u7528\u5148\u540E\u987A\u5E8F\u968F\u673A</li><li><strong>\u5B8C\u5168\u968F\u673A\u7684API\u5185\u5BB9(\u4EC5\u90E8\u5206API\u652F\u6301)</strong>\uFF1APOST\u5199\u7C7B\u578B\u7684API\u7684\u4E0A\u4F20\u5185\u5BB9\u968F\u673A</li><li><strong>\u5B8C\u5168\u968F\u673A\u7684API\u8C03\u7528\u65F6\u95F4\u95F4\u9694</strong>\uFF1A\u968F\u673A\u533A\u6BB5500s-86400s\u81EA\u5B9A\u4E49</li><li><strong>\u6BCF\u65E5\u5DE5\u4F5C\u65F6\u95F4\u81EA\u5B9A\u4E49</strong>\uFF1A\u5728\u65E5\u5E38\u5DE5\u4F5C\u65F6\u95F4\u8FDB\u884C\u8C03\u7528\uFF0C\u9002\u7528\u4E8E\u4ECE\u4E0D\u5173\u673A\u91CD\u542F\u7684\u670D\u52A1\u5668\u8BBE\u5907</li><li><strong>\u6BCF\u5468\u5DE5\u4F5C\u65E5\u81EA\u5B9A\u4E49</strong>\uFF1A\u5728\u6BCF\u5468\u7684\u5DE5\u4F5C\u65E5\u8FDB\u884C\u8C03\u7528\uFF0C\u9002\u7528\u4E8E\u4ECE\u4E0D\u5173\u673A\u91CD\u542F\u7684\u670D\u52A1\u5668\u8BBE\u5907</li><li><strong>\u8FD0\u884C\u667A\u80FD\u6682\u505C</strong>\uFF1A\u9632\u6B62\u56E0\u6301\u7EED\u5728\u9519\u8BEF\u914D\u7F6E\u4E0B\u8FD0\u884C\u800C\u5BFC\u81F4\u7684\u8D26\u6237\u5C01\u7981</li><li><strong>\u8FD0\u884C\u914D\u7F6E\u81EA\u52A8\u4FDD\u5B58</strong>\uFF1A\u53EF\u4FDD\u5B58\u8FD0\u884C\u914D\u7F6E\uFF0C\u65E0\u9700\u53CD\u590D\u8BBE\u7F6E</li><li><strong>\u65E0\u9650\u5236\u8D26\u53F7\u4E2A\u6570</strong>\uFF1A\u7406\u8BBA\u4E0A\u5141\u8BB8\u65E0\u9650\u5236\u4E2A\u6570\u8D26\u53F7\u540E\u53F0\u81EA\u52A8\u8C03\u7528</li><li><strong>\u652F\u6301\u81EA\u5B9A\u4E49\u5BA2\u6237\u7AEF\u5BC6\u94A5</strong>\uFF1A\u5141\u8BB8\u975E\u767B\u5F55\u8C03\u7528\u4F7F\u7528\u81EA\u5B9A\u4E49\u5BC6\u94A5</li><li><strong>\u81EA\u5B9A\u4E49\u7F8E\u5316\u754C\u9762</strong>\uFF1A\u652F\u6301\u81EA\u5B9A\u4E49\u80CC\u666F\u56FE\u7247\uFF08\u534A\u900F\u660E\u5EA6\u4EE5\u53CA\u6BDB\u73BB\u7483\u6548\u679C\uFF09\u3001\u4E9A\u514B\u529B\u80CC\u666F</li></ul><h2 id="\u4E3B\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u754C\u9762" aria-hidden="true">#</a> \u4E3B\u754C\u9762</h2><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/b23cb7e4945747fca6e88b5c36e80e08.png" alt="\u56FE\u7247"></p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/185cfc81a55746eb8d915e6f0923d1ca.png" alt="\u56FE\u7247"></p><h2 id="\u8FD0\u884C\u7ED3\u679C\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u7ED3\u679C\u67E5\u770B" aria-hidden="true">#</a> \u8FD0\u884C\u7ED3\u679C\u67E5\u770B</h2><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210323150719810.png" alt="\u56FE\u7247"></p><h1 id="\u5165\u7FA4\u987B\u77E5" tabindex="-1"><a class="header-anchor" href="#\u5165\u7FA4\u987B\u77E5" aria-hidden="true">#</a> <strong>\u5165\u7FA4\u987B\u77E5</strong></h1>',11),c=e("li",null,[e("strong",null,"\u4F7F\u7528\u672C\u7CFB\u5217\u4EA7\u54C1\u53EA\u662F\u589E\u52A0E5\u7EED\u8BA2\u6982\u7387\uFF0C\u5E76\u4E0D\u80FD\u4FDD\u8BC1100%\u7EED\u8BA2\u6210\u529F")],-1),_=e("li",null,[e("strong",null,"\u7EED\u8BA2\u64CD\u4F5C\u6709\u4E9B\u8BB8\u6280\u672F\u95E8\u69DB\uFF0C\u4E14\u9700\u8981\u5177\u5907\u4E00\u5B9A\u7684\u81EA\u5B66\u80FD\u529B")],-1),g=t("\u6BCF\u4E2A\u4EBA\u7684\u65F6\u95F4\u90FD\u662F\u5B9D\u8D35\u7684\uFF0C\u9047\u5230\u95EE\u9898\u5148\u67E5\u9605"),p={href:"https://sundayrx.coding.net/s/78f69c8a-8620-4d53-bad2-c4b365fed1a0",target:"_blank",rel:"noopener noreferrer"},u=t("\u5E2E\u52A9\u6587\u6863"),m=t("\uFF0C\u5B9E\u5728\u65E0\u6CD5\u89E3\u51B3\u65F6\u518D\u53D1\u8D77\u63D0\u95EE("),f={href:"https://sundayrx.coding.net/s/78f69c8a-8620-4d53-bad2-c4b365fed1a0/4",target:"_blank",rel:"noopener noreferrer"},b=t("\u63D0\u95EE\u7684\u827A\u672F"),I=t(")"),A=e("h4",{id:"qq\u4EA4\u6D41\u7FA4-254058945",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#qq\u4EA4\u6D41\u7FA4-254058945","aria-hidden":"true"},"#"),t(),e("strong",null,"QQ\u4EA4\u6D41\u7FA4\uFF1A254058945")],-1),x={id:"tg\u4EA4\u6D41\u7FA4-https-t-me-ms365e5renew",tabindex:"-1"},P=e("a",{class:"header-anchor",href:"#tg\u4EA4\u6D41\u7FA4-https-t-me-ms365e5renew","aria-hidden":"true"},"#",-1),w=t(),R=t("TG\u4EA4\u6D41\u7FA4\uFF1A"),k={href:"https://t.me/MS365E5Renew",target:"_blank",rel:"noopener noreferrer"},E=t("https://t.me/MS365E5Renew"),M=e("h1",{id:"\u8F6F\u4EF6\u4E0B\u8F7D",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8F6F\u4EF6\u4E0B\u8F7D","aria-hidden":"true"},"#"),t(" \u8F6F\u4EF6\u4E0B\u8F7D")],-1),y=e("h3",{id:"\u53D7\u652F\u6301\u7684\u64CD\u4F5C\u7CFB\u7EDF\u53CA\u8FD0\u884C\u73AF\u5883\u5B89\u88C5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53D7\u652F\u6301\u7684\u64CD\u4F5C\u7CFB\u7EDF\u53CA\u8FD0\u884C\u73AF\u5883\u5B89\u88C5","aria-hidden":"true"},"#"),t(" \u53D7\u652F\u6301\u7684\u64CD\u4F5C\u7CFB\u7EDF\u53CA\u8FD0\u884C\u73AF\u5883\u5B89\u88C5")],-1),z=e("thead",null,[e("tr",null,[e("th",null,"\u64CD\u4F5C\u7CFB\u7EDF"),e("th",null,"\u7248\u672C"),e("th",null,"CPU\u67B6\u6784"),e("th",null,".NET 6.0 \uFF08\u5FC5\u9009\uFF09"),e("th",null,"WebView 2\uFF08\u53EF\u9009\uFF09"),e("th",null,"\u8865\u4E01\uFF08\u5FC5\u9009\uFF09")])],-1),B=e("td",null,"Windows Client",-1),v=t("7 SP1("),D={href:"https://docs.microsoft.com/zh-cn/troubleshoot/windows-client/windows-7-eos-faq/windows-7-extended-security-updates-faq",target:"_blank",rel:"noopener noreferrer"},V=t("ESU"),q=t(") \u30018.1"),X=e("td",null,"x64",-1),S={href:"https://dotnet.microsoft.com/download/dotnet/6.0/runtime",target:"_blank",rel:"noopener noreferrer"},L=t("\u4E0B\u8F7D.Net 6.0 Desktop"),W={href:"https://go.microsoft.com/fwlink/p/?LinkId=2124703",target:"_blank",rel:"noopener noreferrer"},N=t("\u4E0B\u8F7DWebView 2"),T={href:"https://blog.simplix.info/update7/",target:"_blank",rel:"noopener noreferrer"},U=t("\u4E0B\u8F7DESU"),F=e("td",null,"Windows 10 Client",-1),C=e("td",null,"Version 1607+",-1),O=e("td",null,"Arm64\u3001x64",-1),G={href:"https://dotnet.microsoft.com/download/dotnet/6.0/runtime",target:"_blank",rel:"noopener noreferrer"},j=t("\u4E0B\u8F7D.Net 6.0 Desktop"),Y={href:"https://go.microsoft.com/fwlink/p/?LinkId=2124703",target:"_blank",rel:"noopener noreferrer"},H=t("\u4E0B\u8F7DWebView 2"),Q=e("td",null,"\u4E0D\u9700\u8981",-1),Z=e("td",null,"Windows 11 Client",-1),J=e("td",null,"\u65E0\u9650\u5236",-1),K=e("td",null,"Arm64\u3001x64",-1),$={href:"https://dotnet.microsoft.com/download/dotnet/6.0/runtime",target:"_blank",rel:"noopener noreferrer"},ee=t("\u4E0B\u8F7D.Net 6.0 Desktop"),te=e("td",null,"\u4E0D\u9700\u8981",-1),oe=e("td",null,"\u4E0D\u9700\u8981",-1),re=e("td",null,"Windows Server",-1),ne=e("td",null,"Version 2012+",-1),ae=e("td",null,"x64",-1),se={href:"https://dotnet.microsoft.com/download/dotnet/6.0/runtime",target:"_blank",rel:"noopener noreferrer"},de=t("\u4E0B\u8F7D.Net 6.0 Desktop"),le={href:"https://go.microsoft.com/fwlink/p/?LinkId=2124703",target:"_blank",rel:"noopener noreferrer"},ie=t("\u4E0B\u8F7DWebView 2"),he=e("td",null,"\u4E0D\u9700\u8981",-1),ce=e("h3",{id:"\u5404\u7248\u672C\u4E0B\u8F7D\u5730\u5740-\u5EFA\u8BAE\u6DFB\u52A0\u767D\u540D\u5355\u8FD0\u884C",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5404\u7248\u672C\u4E0B\u8F7D\u5730\u5740-\u5EFA\u8BAE\u6DFB\u52A0\u767D\u540D\u5355\u8FD0\u884C","aria-hidden":"true"},"#"),t(" \u5404\u7248\u672C\u4E0B\u8F7D\u5730\u5740\uFF08\u5EFA\u8BAE\u6DFB\u52A0\u767D\u540D\u5355\u8FD0\u884C\uFF09")],-1),_e=e("thead",null,[e("tr",null,[e("th",null,"\u8F6F\u4EF6\u7248\u672C"),e("th",null,"\u6587\u4EF6\u8BF4\u660E"),e("th",null,"LanZou"),e("th",null,"OneDrive"),e("th",null,"\u6740\u8F6F\u62A5\u544A")])],-1),ge=e("td",null,[e("strong",null,"\u5305\u542B\u6846\u67B6(\u63A8\u8350)")],-1),pe=e("td",null,"\u65E0\u9700\u989D\u5916\u5B89\u88C5\u8FD0\u884C\u73AF\u5883\uFF0C\u53EF\u76F4\u63A5\u8FD0\u884C",-1),ue={href:"https://sundayrx.lanzouq.com/2R2AByh83333",target:"_blank",rel:"noopener noreferrer"},me=e("strong",null,"\u4E0B\u8F7D",-1),fe={href:"https://sundayrx-my.sharepoint.com/:u:/g/personal/api1_sundayrx_onmicrosoft_com/EbjsV4mOxBlBoE39mBxFpqsBk51BF4y_T4Cs0OB4hV7OsQ?e=HGIlhE",target:"_blank",rel:"noopener noreferrer"},be=t("\u4E0B\u8F7D"),Ie={href:"https://www.virustotal.com/gui/file/80e435ef79dbd3869e00d5515c4240237d40c598cd50519fd97184a78889512f",target:"_blank",rel:"noopener noreferrer"},Ae=t("VirusTotal"),xe=e("td",null,"\u666E\u901A\u7248\u672C",-1),Pe=e("td",null,"\u9700\u8981\u5B89\u88C5 .NET 6 Desktop Runtime x64",-1),we={href:"https://sundayrx.lanzoui.com/vqTrXlR5LrWjP3F",target:"_blank",rel:"noopener noreferrer"},Re=t("\u4E0B\u8F7D"),ke={href:"https://sundayrx-my.sharepoint.com/:u:/g/personal/api1_sundayrx_onmicrosoft_com/EbI_I-ohJ4BCuK821xnIoz0BTUBFHPZs3whXbVW06YLPfQ?e=vPozqH",target:"_blank",rel:"noopener noreferrer"},Ee=t("\u4E0B\u8F7D"),Me={href:"https://www.virustotal.com/gui/file/80e435ef79dbd3869e00d5515c4240237d40c598cd50519fd97184a78889512f",target:"_blank",rel:"noopener noreferrer"},ye=t("VirusTotal"),ze=e("td",null,"\u5386\u53F2\u7248\u672C(\u5F03\u7528)",-1),Be=e("td",null,"\u66F4\u517C\u5BB9Windows 7\uFF0C\u5DF2\u505C\u6B62\u66F4\u65B0",-1),ve={href:"https://sundayrx.lanzouq.com/2R2AByh8333",target:"_blank",rel:"noopener noreferrer"},De=t("\u4E0B\u8F7D"),Ve={href:"https://sundayrx-my.sharepoint.com/:u:/g/personal/api1_sundayrx_onmicrosoft_com/EayqKNMm9IFMgSVVcNtTWJABAnZrViM3cHrthqP6VG6c2w?e=v9Zetz",target:"_blank",rel:"noopener noreferrer"},qe=t("\u4E0B\u8F7D"),Xe={href:"https://www.virustotal.com/gui/file/80e435ef79dbd3869e00d5515c4240237d40c598cd50519fd97184a78889512f",target:"_blank",rel:"noopener noreferrer"},Se=t("VirusTotal"),Le=n('<h1 id="\u4F7F\u7528\u6559\u7A0B-\u8BF7\u52FF\u5F00\u542F\u8D26\u53F7\u7684\u53CC\u91CD\u9A8C\u8BC1\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6559\u7A0B-\u8BF7\u52FF\u5F00\u542F\u8D26\u53F7\u7684\u53CC\u91CD\u9A8C\u8BC1\u529F\u80FD" aria-hidden="true">#</a> \u4F7F\u7528\u6559\u7A0B**(\u8BF7\u52FF\u5F00\u542F\u8D26\u53F7\u7684\u53CC\u91CD\u9A8C\u8BC1\u529F\u80FD)**</h1><h2 id="_0-\u5982\u4F55\u5BFC\u5165\u65E7\u7248\u672C\u7A0B\u5E8F\u4E2D\u7684\u8D26\u53F7\u4FE1\u606F-\u8001\u7528\u6237\u5347\u7EA7\u7528-\u65B0\u7528\u6237\u8BF7\u65E0\u89C6" tabindex="-1"><a class="header-anchor" href="#_0-\u5982\u4F55\u5BFC\u5165\u65E7\u7248\u672C\u7A0B\u5E8F\u4E2D\u7684\u8D26\u53F7\u4FE1\u606F-\u8001\u7528\u6237\u5347\u7EA7\u7528-\u65B0\u7528\u6237\u8BF7\u65E0\u89C6" aria-hidden="true">#</a> 0 \u5982\u4F55\u5BFC\u5165\u65E7\u7248\u672C\u7A0B\u5E8F\u4E2D\u7684\u8D26\u53F7\u4FE1\u606F\uFF1F\uFF08\u8001\u7528\u6237\u5347\u7EA7\u7528 \u65B0\u7528\u6237\u8BF7\u65E0\u89C6\uFF09</h2><h3 id="_0-1-\u590D\u5236\u65E7\u7248\u672C\u7A0B\u5E8F\u8D26\u6237\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_0-1-\u590D\u5236\u65E7\u7248\u672C\u7A0B\u5E8F\u8D26\u6237\u4FE1\u606F" aria-hidden="true">#</a> 0.1 \u590D\u5236\u65E7\u7248\u672C\u7A0B\u5E8F\u8D26\u6237\u4FE1\u606F</h3><p>\u6253\u5F00\u65E7\u7248\u672C\u7A0B\u5E8F\u6839\u76EE\u5F55\u4E0B\u7684Account.txt\u6587\u4EF6\uFF0C\u4F9D\u7167\u6BCF\u884C\u590D\u5236\u4E00\u4E2A\u8D26\u53F7\u4FE1\u606F\uFF08\u4E0D\u652F\u6301\u591A\u884C\u8BC6\u522B\uFF09\u3002 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210323143621396.png" alt="\u56FE\u7247"></p><h3 id="_0-2-\u5BFC\u5165\u8D26\u6237\u4FE1\u606F\u5230\u65B0\u7248\u672C\u7A0B\u5E8F\u4E2D" tabindex="-1"><a class="header-anchor" href="#_0-2-\u5BFC\u5165\u8D26\u6237\u4FE1\u606F\u5230\u65B0\u7248\u672C\u7A0B\u5E8F\u4E2D" aria-hidden="true">#</a> 0.2 \u5BFC\u5165\u8D26\u6237\u4FE1\u606F\u5230\u65B0\u7248\u672C\u7A0B\u5E8F\u4E2D</h3><p>\u6253\u5F00\u65B0\u7248\u672C\u7A0B\u5E8F\u70B9\u51FB\u201C\u5F00\u59CB\u8FD0\u884C\u201D-\u201C\u6DFB\u52A0\u8D26\u53F7\u201D\uFF0C\u5728\u5F39\u51FA\u7684\u201C\u6DFB\u52A0\u8D26\u53F7\u201D\u7A97\u53E3\u4E2D\u627E\u5230\u53F3\u4E0A\u89D2\u7684\u526A\u5207\u677F\u56FE\u6807\uFF0C\u70B9\u51FB\u540E\u7A0B\u5E8F\u4F1A\u81EA\u52A8\u8BC6\u522B\u590D\u5236\u7684\u8D26\u53F7\u4FE1\u606F\uFF0C\u5982\u679C\u590D\u5236\u7684\u5185\u5BB9\u6CA1\u6709\u9519\u8BEF\u7A0B\u5E8F\u4F1A\u81EA\u52A8\u8BC6\u522B\u8C03\u7528\u7C7B\u578B\u5E76\u586B\u5145\u6240\u6709\u7A7A\u767D\u9879\uFF0C\u68C0\u67E5\u65E0\u8BEF\u540E\u5355\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE\u5B8C\u6210\u4E00\u4E2A\u8D26\u53F7\u4FE1\u606F\u7684\u5BFC\u5165\u3002 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210323143246326.png" alt="\u56FE\u7247"></p><h2 id="_1-\u6CE8\u518Cazure\u5E94\u7528\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#_1-\u6CE8\u518Cazure\u5E94\u7528\u7A0B\u5E8F" aria-hidden="true">#</a> 1 \u6CE8\u518CAzure\u5E94\u7528\u7A0B\u5E8F</h2><h3 id="_1-1-\u5E94\u7528\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5E94\u7528\u6CE8\u518C" aria-hidden="true">#</a> 1.1 \u5E94\u7528\u6CE8\u518C</h3>',8),We={href:"https://portal.azure.com/#home",target:"_blank",rel:"noopener noreferrer"},Ne=t("\u70B9\u51FB\u767B\u5F55 Azure"),Te=t("\u6216"),Ue={href:"https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",target:"_blank",rel:"noopener noreferrer"},Fe=t("\u70B9\u51FB\u76F4\u63A5\u8FDB\u5165Azure\u5E94\u7528\u6CE8\u518C"),Ce=t("\uFF0C\u767B\u5F55\u8D26\u53F7\u4F7F\u7528\u7533\u8BF7\u5230\u7684Microsoft 365 E5\u7684"),Oe=e("strong",null,"\u7BA1\u7406\u5458\u8D26\u6237",-1),Ge=t("\uFF08\u8D26\u6237\u540D\u7C7B\u4F3CXXXX@YYYY.onmicrosoft.com\u683C\u5F0F\uFF09\u3002 2.\u767B\u5F55\u5B8C\u6210\u540E\u70B9\u51FB\u53F3\u4E0A\u89D2\u7684\u201C\u95E8\u6237\u201D\u6309\u94AE\u8FDB\u5165Azure\u7BA1\u7406\u4E2D\u5FC3\uFF0C\u5728\u641C\u7D22\u680F\u5185\u8F93\u5165\u201C\u5E94\u7528\u6CE8\u518C\u201D\uFF0C\u70B9\u51FB\u8FDB\u5165"),je={href:"https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",target:"_blank",rel:"noopener noreferrer"},Ye=t("\uFF08\u82E5\u5E94\u7528\u6CE8\u518C\u641C\u7D22\u4E0D\u5230\u8BF7\u70B9\u51FB\u6B64\u5904\u76F4\u63A5\u8FDB\u5165\uFF09"),He=t("\u3002 "),Qe=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618170032256.png",alt:"\u56FE\u7247"},null,-1),Ze=t(" 3.\u5355\u51FB\u201C\u65B0\u6CE8\u518C\u201D\u6309\u94AE "),Je=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020061817051341.png",alt:"\u56FE\u7247"},null,-1),Ke=t(" 4.\u914D\u7F6E\u5E94\u7528 \u5E94\u7528\u540D\u79F0\u968F\u610F\u5199\u3001\u6CE8\u610F\u53EF\u8BBF\u95EE\u6027\u9009\u9879\u9009\u62E9\u6700\u540E\u4E00\u9879\u3001\u91CD\u5B9A\u5411URL\u6682\u65F6\u4E0D\u586B \u3001\u5B8C\u6210\u540E\u70B9\u51FB\u6CE8\u518C "),$e=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618170801323.png",alt:"\u56FE\u7247"},null,-1),et=e("h3",{id:"_1-2-\u914D\u7F6E\u5E94\u7528\u91CD\u5B9A\u5411url-\u8EAB\u4EFD\u9A8C\u8BC1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-2-\u914D\u7F6E\u5E94\u7528\u91CD\u5B9A\u5411url-\u8EAB\u4EFD\u9A8C\u8BC1","aria-hidden":"true"},"#"),t(" 1.2 \u914D\u7F6E\u5E94\u7528\u91CD\u5B9A\u5411URL\uFF08\u8EAB\u4EFD\u9A8C\u8BC1\uFF09")],-1),tt=t("1.\u5148\u70B9\u51FB\u201C\u6982\u8FF0\u201D\uFF0C\u7136\u540E\u70B9\u51FB\u201C\u6DFB\u52A0\u91CD\u5B9A\u5411URL\u201D\uFF0C\u8FDB\u5165\u91CD\u5B9A\u5411URL\u914D\u7F6E\u754C\u9762\uFF0C"),ot=e("strong",null,'\u4E0B\u56FE\u4E2D\u7684\u5E94\u7528\u7A0B\u5E8F(\u5BA2\u6237\u7AEF)ID\u5373\u4E3A"\u5BA2\u6237\u7AEFID"',-1),rt=t("\u3002 "),nt=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020061817121972.png",alt:"\u56FE\u7247"},null,-1),at=t(" 2.\u70B9\u51FB\u201C\u6DFB\u52A0\u5E73\u53F0\u201D\uFF0C\u518D\u70B9\u51FB\u201C\u79FB\u52A8\u548C\u684C\u9762\u5E94\u7528\u7A0B\u5E8F\u201D\uFF0C "),st=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618171501396.png",alt:"\u56FE\u7247"},null,-1),dt=t(" 3.\u7EE7\u7EED\u52FE\u9009\u4E2D\u7B2C\u4E00\u4E2AURL\uFF0C\u6700\u540E\u70B9\u51FB\u5E95\u90E8\u7684\u201C\u914D\u7F6E\u201D\uFF0C\u8BE5URL\u4E3A\u201C"),lt={href:"https://login.microsoftonline.com/common/oauth2/nativeclient%E2%80%9D%E4%B9%9F%E5%8F%AF%E6%89%8B%E5%8A%A8%E6%B7%BB%E5%8A%A0%E3%80%82",target:"_blank",rel:"noopener noreferrer"},it=t("https://login.microsoftonline.com/common/oauth2/nativeclient\u201D\u4E5F\u53EF\u624B\u52A8\u6DFB\u52A0\u3002"),ht=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618171651338.png",alt:"\u56FE\u7247"},null,-1),ct=t(" 4.\u914D\u7F6E\u9ED8\u8BA4\u5BA2\u6237\u7AEF\u7C7B\u578B\u5C06\u5E94\u7528\u7A0B\u5E8F\u89C6\u4E3A\u516C\u5171\u5BA2\u6237\u7AEF \u70B9\u51FB\u5207\u6362\u6309\u94AE\u4E3A\u201C\u662F\u201D \uFF0C\u6700\u540E\u70B9\u51FB\u201C\u4FDD\u5B58\u201D\u6309\u94AE\u4FDD\u5B58\u3002 "),_t=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618171850779.png",alt:"\u56FE\u7247"},null,-1),gt=n('<h2 id="_2-\u914D\u7F6E\u5E94\u7528\u7A0B\u5E8F\u7684api\u6743\u9650-\u91CD\u8981" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E\u5E94\u7528\u7A0B\u5E8F\u7684api\u6743\u9650-\u91CD\u8981" aria-hidden="true">#</a> 2 \u914D\u7F6E\u5E94\u7528\u7A0B\u5E8F\u7684API\u6743\u9650\uFF08\u91CD\u8981\uFF09</h2><p><strong>\u5C0F\u767D\u63D0\u793A\uFF1A\u5EFA\u8BAE\u9009\u62E9\u201C\u59D4\u6258\u7684\u6743\u9650(\u7528\u6237\u767B\u5F55)\u201D\u8BE5\u6743\u9650\u7C7B\u578B\uFF0C\u8C03\u7528API\u8F83\u591A\uFF0C\u64CD\u4F5C\u6B65\u9AA4\u8F83\u5C11\u7B80\u5355\u7C97\u66B4\uFF0C\u8C03\u7528\u6210\u529F\u51E0\u7387\u9AD8</strong></p><p>\u6CE8\u518C\u7684\u5E94\u7528\u7A0B\u5E8FAPI\u6743\u9650\u7C7B\u578B\u6709\u4E24\u79CD\uFF0C\u5176\u4E3B\u8981\u533A\u522B\u5982\u4E0B\u8868\u6240\u793A\uFF1A</p><table><thead><tr><th>\u6743\u9650\u7C7B\u578B</th><th><strong>\u59D4\u6258\u7684\u6743\u9650(\u7528\u6237\u767B\u5F55)</strong></th><th><strong>\u5E94\u7528\u7A0B\u5E8F\u6743\u9650(\u975E\u7528\u6237\u767B\u5F55)</strong></th></tr></thead><tbody><tr><td>\u5B98\u65B9\u91CA\u4E49</td><td>\u5E94\u7528\u7A0B\u5E8F\u5FC5\u987B\u4EE5\u767B\u5F55\u7528\u6237\u8EAB\u4EFD\u8BBF\u95EEAPI</td><td>\u5E94\u7528\u7A0B\u5E8F\u5728\u7528\u6237\u672A\u767B\u5F55\u7684\u60C5\u51B5\u4E0B\u4F5C\u4E3A\u540E\u53F0\u670D\u52A1\u6216\u5B88\u62A4\u7A0B\u5E8F\u8FD0\u884C</td></tr><tr><td>\u9700\u8981\u7684\u4FE1\u606F</td><td>\u8D26\u6237\u540D\u79F0+\u8D26\u6237\u5BC6\u7801+\u5E94\u7528\u7A0B\u5E8F(\u5BA2\u6237\u7AEF)ID</td><td>\u8D26\u6237\u540D\u79F0+\u5BA2\u6237\u7AEF\u673A\u5BC6+\u5E94\u7528\u7A0B\u5E8F(\u5BA2\u6237\u7AEF)ID</td></tr><tr><td>\u529F\u80FD\u5F71\u54CD</td><td>\u7A0B\u5E8F\u4E2D\u6240\u6709API\u5747\u53EF\u8C03\u7528</td><td>\u90E8\u5206API\u6743\u9650\u53D7\u9650\u65E0\u6CD5\u8C03\u7528(\u5B98\u65B9\u9650\u5236)</td></tr><tr><td>API\u6743\u9650\u914D\u7F6E</td><td>\u53EF\u7531\u7A0B\u5E8F\u81EA\u52A8\u914D\u7F6E\u6DFB\u52A0API\u6743\u9650</td><td>\u5FC5\u987B\u624B\u52A8\u914D\u7F6EAPI\u6743\u9650</td></tr><tr><td>\u7A0B\u5E8F\u989C\u8272\u6807\u8BC6</td><td>\u84DD\u8272</td><td>\u6DF1\u9752\u8272</td></tr></tbody></table><p>\u6839\u636E\u6240\u9009\u7684API\u6743\u9650\u7C7B\u578B\u5728\uFF1A<strong>2.1 \u9009\u62E9\u201C\u59D4\u6258\u7684\u6743\u9650(\u7528\u6237\u767B\u5F55)\u201D\u7C7B\u578B\u7684API</strong>\u6216\u8005<strong>2.2 \u9009\u62E9\u201C\u5E94\u7528\u7A0B\u5E8F\u6743\u9650(\u975E\u7528\u6237\u767B\u5F55)\u201D\u7C7B\u578B\u7684API</strong>\u4E2D\u9009\u62E9\u6027\u9605\u8BFB\u3002</p><h3 id="_2-1-\u9009\u62E9-\u59D4\u6258\u7684\u6743\u9650-\u7528\u6237\u767B\u5F55-\u7C7B\u578B\u7684api" tabindex="-1"><a class="header-anchor" href="#_2-1-\u9009\u62E9-\u59D4\u6258\u7684\u6743\u9650-\u7528\u6237\u767B\u5F55-\u7C7B\u578B\u7684api" aria-hidden="true">#</a> 2.1 \u9009\u62E9\u201C\u59D4\u6258\u7684\u6743\u9650(\u7528\u6237\u767B\u5F55)\u201D\u7C7B\u578B\u7684API</h3><h4 id="_2-1-1-\u4F7F\u7528\u7A0B\u5E8F\u81EA\u52A8\u8BF7\u6C42\u914D\u7F6Eapi\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u4F7F\u7528\u7A0B\u5E8F\u81EA\u52A8\u8BF7\u6C42\u914D\u7F6Eapi\u6743\u9650" aria-hidden="true">#</a> 2.1.1 \u4F7F\u7528\u7A0B\u5E8F\u81EA\u52A8\u8BF7\u6C42\u914D\u7F6EAPI\u6743\u9650</h4><p>1.\u70B9\u51FB\u201C\u6DFB\u52A0\u8D26\u53F7\u201D\uFF0CAPI\u8C03\u7528\u65B9\u5F0F\u9009\u62E9\u201C\u767B\u9646\u8C03\u7528\u201D\uFF0C\u6B63\u786E\u586B\u5199\u201CMS365 E5\u8D26\u53F7\u201D\u548C\u201C\u5E94\u7528\u7A0B\u5E8F\uFF08\u5BA2\u6237\u7AEF\uFF09ID\u201D\u540E\u70B9\u51FB\u201C\u542F\u52A8\u81EA\u52A8\u6388\u6743\u201D\u3002 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210308150608437.png" alt="\u56FE\u7247"></p><p>2.\u5728\u5F39\u51FA\u7684\u767B\u9646\u9875\u9762\u4E2D\u8F93\u5165\u4F60\u7684\u7BA1\u7406\u5458\u8D26\u6237\u540D\u548C\u5BC6\u7801\u767B\u5F55\uFF08<strong>\u8BE5\u8D26\u6237\u5FC5\u987B\u4E3A\u5168\u5C40\u7BA1\u7406\u5458\u8D26\u6237\u4E14\u62E5\u6709\u8BE5\u5BA2\u6237\u7AEFID\u7684\u63A7\u5236\u6743\u9650</strong>\uFF09\uFF0C\u767B\u5F55\u6210\u529F\u65F6\u5F39\u51FA\u201C\u8BF7\u6C42\u5F81\u5F97\u8BB8\u53EF\u754C\u9762\u201D\uFF0C\u6EDA\u52A8\u5230\u9875\u9762\u6700\u5E95\u90E8\u52FE\u9009\u201C\u4EE3\u8868\u7EC4\u7EC7\u540C\u610F\u201D\uFF0C\u6700\u540E\u70B9\u51FB\u201C\u63A5\u53D7\u201D\u3002 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200628135742984.png" alt="\u56FE\u7247"> 3.\u5224\u65AD\u662F\u5426\u6DFB\u52A0API\u6743\u9650\u6210\u529F\uFF1A\u9996\u5148\u7A0B\u5E8F\u63D0\u793A\u6388\u6743\u6210\u529F\uFF0C\u5176\u6B21\u7528\u7BA1\u7406\u5458\u8D26\u6237\u767B\u5F55Azure\u67E5\u770B\u5E94\u7528\u7684API\u6743\u9650\uFF0C\u53D1\u73B0\u6240\u6709\u9700\u6C42\u7684\u6743\u9650\u5168\u90E8\u6DFB\u52A0\u6216\u53EF\u4EE5\u6210\u529F\u8C03\u7528\u5747\u89C6\u4E3A\u5DF2\u6DFB\u52A0\u6210\u529F\u3002 ng) <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210323142238814.png" alt="\u56FE\u7247"></p><h4 id="_2-1-2-\u624B\u52A8\u914D\u7F6Eapi\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u624B\u52A8\u914D\u7F6Eapi\u6743\u9650" aria-hidden="true">#</a> 2.1.2 \u624B\u52A8\u914D\u7F6EAPI\u6743\u9650</h4><p>1.\u70B9\u51FB\u201CAPI\u6743\u9650\u201D-\u201C\u6DFB\u52A0\u6743\u9650\u201D-\u201CMicrosoft Graph\u201D <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020061819283823.png" alt="\u56FE\u7247"> 2.\u9009\u62E9\u201C\u59D4\u6258\u7684\u6743\u9650\u201D<img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618172538991.png" alt="\u56FE\u7247"> 3.\u6839\u636E\u4E0B\u65B9\u5217\u51FA\u7684API\u6743\u9650\u9700\u6C42\u8868\u6765\u52FE\u9009\u6240\u5BF9\u5E94\u7684API\u6743\u9650\uFF0C\u5168\u90E8\u9009\u62E9\u5B8C\u6210\u540E\u70B9\u51FB&quot;\u6DFB\u52A0\u6743\u9650&quot;\u3002</p><p><strong>BookingsAppointment.ReadWrite.All; Calendars.Read; Contacts.Read; Directory.Read.All; Files.Read.All; Files.ReadWrite.All; Group.Read.All; Mail.Read; Mail.Send; MailboxSettings.Read; Notes.Read.All; People.Read.All; Presence.Read.All; Sites.Read.All; Tasks.ReadWrite; User.Read.All;</strong></p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618172627969.png" alt="\u56FE\u7247"> \u6DFB\u52A0\u5B8C\u6210\u7684\u6548\u679C\u5982\u56FE <strong>\u5982\u679C\u6CA1\u6709\u201C\u4EE3\u8868XXX\u6388\u4E88\u7BA1\u7406\u5458\u540C\u610F\u201D\u6309\u94AE \u8BF4\u660E\u8BE5\u8D26\u53F7\u4E0D\u662F\u7BA1\u7406\u5458\u8D26\u53F7 \u6362\u767B\u7BA1\u7406\u5458\u8D26\u53F7\u521B\u5EFA\u5E94\u7528</strong><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201112111140479.png" alt="\u56FE\u7247"> 4.\u6700\u540E\u70B9\u51FB\u4EE3\u8868XXX\u6388\u4E88\u7BA1\u7406\u5458\u540C\u610F,\u5BF9\u8BDD\u6846\u9009\u62E9\u201C\u662F\u201D\uFF08\u8BE5\u56FE\u5305\u542B\u4E86\u5F53\u524D\u7A0B\u5E8F\u201C\u59D4\u6258\u7684\u6743\u9650(\u7528\u6237\u767B\u5F55)\u201D\u5168\u90E8API\u6240\u9700\u8981\u7684\u6743\u9650)\u3002</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201112110505347.png" alt="\u56FE\u7247"></p><h3 id="_2-2-\u9009\u62E9-\u5E94\u7528\u7A0B\u5E8F\u6743\u9650-\u975E\u7528\u6237\u767B\u5F55-\u7C7B\u578B\u7684api" tabindex="-1"><a class="header-anchor" href="#_2-2-\u9009\u62E9-\u5E94\u7528\u7A0B\u5E8F\u6743\u9650-\u975E\u7528\u6237\u767B\u5F55-\u7C7B\u578B\u7684api" aria-hidden="true">#</a> 2.2 \u9009\u62E9\u201C\u5E94\u7528\u7A0B\u5E8F\u6743\u9650(\u975E\u7528\u6237\u767B\u5F55)\u201D\u7C7B\u578B\u7684API</h3><h4 id="_2-2-1-\u624B\u52A8\u914D\u7F6Eapi\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u624B\u52A8\u914D\u7F6Eapi\u6743\u9650" aria-hidden="true">#</a> 2.2.1 \u624B\u52A8\u914D\u7F6EAPI\u6743\u9650</h4><p>1.\u70B9\u51FB\u201CAPI\u6743\u9650\u201D-\u201C\u6DFB\u52A0\u6743\u9650\u201D-\u201CMicrosoft Graph\u201D <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020061819283823-165380581365141.png" alt="\u56FE\u7247"> 2.\u9009\u62E9\u201C\u5E94\u7528\u7A0B\u5E8F\u6743\u9650\u201D <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200801120027971.png" alt="\u56FE\u7247"> 3.\u6839\u636E\u7A0B\u5E8F\u4E2D\u5217\u51FA\u7684API\u6743\u9650\u9700\u6C42\u8868\u6765\u52FE\u9009\u6240\u5BF9\u5E94\u7684API\u6743\u9650\uFF0C\u5168\u90E8\u9009\u62E9\u5B8C\u6210\u540E\u70B9\u51FB&quot;\u6DFB\u52A0\u6743\u9650&quot;\u3002 <strong>Calendars.Read; Contacts.Read; Directory.Read.All; Files.Read.All; Files.ReadWrite.All; Mail.Read; Mail.Send; MailboxSettings.Read; Notes.Read.All; Sites.Read.All; User.Read.All;</strong><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618172627969-165380581693146.png" alt="\u56FE\u7247"> \u6DFB\u52A0\u5B8C\u6210\u7684\u6548\u679C\u5982\u56FE <strong>\u5982\u679C\u6CA1\u6709\u201C\u4EE3\u8868XXX\u6388\u4E88\u7BA1\u7406\u5458\u540C\u610F\u201D\u6309\u94AE \u8BF4\u660E\u8BE5\u8D26\u53F7\u4E0D\u662F\u7BA1\u7406\u5458\u8D26\u53F7 \u6362\u767B\u7BA1\u7406\u5458\u8D26\u53F7\u521B\u5EFA\u5E94\u7528</strong><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200801120623311.png" alt="\u56FE\u7247"> 4.\u6700\u540E\u70B9\u51FB\u4EE3\u8868XXX\u6388\u4E88\u7BA1\u7406\u5458\u540C\u610F,\u5BF9\u8BDD\u6846\u9009\u62E9\u201C\u662F\u201D\uFF08\u8BE5\u56FE\u5305\u542B\u4E86\u5F53\u524D\u7A0B\u5E8F\u201C\u5E94\u7528\u7A0B\u5E8F\u6743\u9650(\u975E\u7528\u6237\u767B\u5F55)\u201D\u5168\u90E8API\u6240\u9700\u8981\u7684\u6743\u9650\uFF09\u3002 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200801120818260.png" alt="\u56FE\u7247"></p><h4 id="_2-2-2-\u521B\u5EFA\u5BA2\u6237\u7AEF\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u521B\u5EFA\u5BA2\u6237\u7AEF\u5BC6\u7801" aria-hidden="true">#</a> 2.2.2 \u521B\u5EFA\u5BA2\u6237\u7AEF\u5BC6\u7801</h4><p>1.\u70B9\u51FB\u201C\u8BC1\u4E66\u5BC6\u7801\u201D-\u201C\u65B0\u5BA2\u6237\u7AEF\u5BC6\u7801\u201D-\u201C24\u4E2A\u6708\u201D-\u201C\u6DFB\u52A0\u201D <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210609101116972.png" alt="\u56FE\u7247"></p><p>2.\u70B9\u51FB\u201C\u503C\u201D\u8BE5\u5217\u4E2D\u7684\u201C\u590D\u5236\u201D\uFF08\u4E0D\u8981\u590D\u5236&quot;ID&quot;\u5217\u4E2D\u7684\u503C\uFF09\uFF0C\u5E76\u7ACB\u5373\u5C06\u8BE5\u5BC6\u7801\u4FDD\u5B58\u81F3\u7535\u8111\uFF0C<strong>\u4FDD\u5B58\u7684\u503C\u5373\u4E3A\u201C\u5BA2\u6237\u7AEF\u5BC6\u7801\u201D</strong>\uFF0C \u6CE8\uFF1A\u8BE5\u503C\u5FC5\u987B\u7ACB\u5373\u4FDD\u5B58\uFF0C\u9000\u51FA\u8BE5\u9875\u9762\u540E\u5C06\u6C38\u8FDC\u65E0\u6CD5\u67E5\u770B\u3002 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020120711360840.jpeg" alt="\u56FE\u7247"></p><h2 id="_3-\u4F7F\u7528\u7A0B\u5E8F\u8FDB\u884Capi\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528\u7A0B\u5E8F\u8FDB\u884Capi\u8C03\u7528" aria-hidden="true">#</a> 3 \u4F7F\u7528\u7A0B\u5E8F\u8FDB\u884CAPI\u8C03\u7528</h2><h5 id="\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684e5\u5B50\u8D26\u6237-\u53EF\u9009\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684e5\u5B50\u8D26\u6237-\u53EF\u9009\u6B65\u9AA4" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684E5\u5B50\u8D26\u6237(\u53EF\u9009\u6B65\u9AA4)</h5><p>\u767B\u5165E5\u7BA1\u7406\u5458\u8D26\u6237\u8FDB\u5165\u7BA1\u7406\u5458\u754C\u9762\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5B50\u8D26\u6237\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u5B50\u8D26\u6237\u767B\u5F55\u7A0B\u5E8F\u8C03\u7528API\u3002 \u4E3A\u4EC0\u4E48\u5EFA\u8BAE\u8FD9\u6837\u505A\uFF1AMicrosoft 365 E5 Renew Plus\u4E2D\u7684\u90E8\u5206API\u5305\u542B\u4E86\u5199\u64CD\u4F5C\uFF0C\u4F8B\u5982Onedrive\u7684API\uFF0C\u8FD9\u4E9BAPI\u5728\u968F\u673A\u6A21\u5F0F\u4E0B\u4F1A\u751F\u6210\u5927\u91CF\u5783\u573E\u90AE\u4EF6\u548C\u6587\u4EF6\uFF08\u867D\u7136\u5355\u72EC\u4E3A\u6B64\u8BBE\u7ACB\u4E86\u4E00\u4E2A\u6587\u4EF6\u5939\uFF09\uFF0C\u90E8\u5206\u4EBA\u53EF\u80FD\u4F1A\u5BF9\u6B64\u884C\u4E3A\u975E\u5E38\u4ECB\u610F\uFF0C\u800C\u4E14\u7A0B\u5E8F\u9891\u7E41\u7684\u8BFB\u5199\u53EF\u80FD\u4F1A\u5BF9\u60A8\u6B63\u5E38\u4F7F\u7528\u8D26\u6237\u9020\u6210\u5F71\u54CD\uFF0C\u56E0\u6B64\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u7BA1\u7406\u5458\u8D26\u6237\u767B\u5F55\u3002</p><h3 id="_3-1-\u6DFB\u52A0\u4E00\u4E2A\u8D26\u6237" tabindex="-1"><a class="header-anchor" href="#_3-1-\u6DFB\u52A0\u4E00\u4E2A\u8D26\u6237" aria-hidden="true">#</a> 3.1 \u6DFB\u52A0\u4E00\u4E2A\u8D26\u6237</h3><p>\u70B9\u51FB\u201C\u5F00\u59CB\u8FD0\u884C\u201D-\u201C\u6DFB\u52A0\u8D26\u53F7\u201D <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/a4451a28afdb4b01b18f566feaf07759.png" alt="\u56FE\u7247"></p><p>\u8FD9\u91CC\u53EF\u4EE5\u5207\u6362API\u8C03\u7528\u65B9\u5F0F\u4F46\u4E5F\u9700\u8981\u66F4\u6539\u5BF9\u5E94\u7684\u586B\u5199\u5185\u5BB9</p><p>\u767B\u5F55\u8C03\u7528\u65B9\u5F0F\u586B\u5199 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210307154000125.png" alt="\u56FE\u7247"> \u975E\u767B\u5F55\u8C03\u7528\u65B9\u5F0F\u586B\u5199 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210307154255163.png" alt="\u56FE\u7247"></p><p>\u6700\u540E\u70B9\u51FB\u786E\u5B9A <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/202103071542145.png" alt="\u56FE\u7247"></p><h3 id="_3-2-\u5F00\u59CB\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5F00\u59CB\u8FD0\u884C" aria-hidden="true">#</a> 3.2 \u5F00\u59CB\u8FD0\u884C</h3><p>\u70B9\u51FB\u201C\u5F00\u59CB\u8FD0\u884C\u201D <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/60b549fee8464ba08722d38b4cb999c0.png" alt="\u56FE\u7247"></p><h1 id="\u5199\u5728\u6700\u540E\u9762" tabindex="-1"><a class="header-anchor" href="#\u5199\u5728\u6700\u540E\u9762" aria-hidden="true">#</a> \u5199\u5728\u6700\u540E\u9762</h1><h2 id="\u5173\u95EDe5\u8D26\u6237\u767B\u5F55\u53CC\u91CD\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u5173\u95EDe5\u8D26\u6237\u767B\u5F55\u53CC\u91CD\u9A8C\u8BC1" aria-hidden="true">#</a> \u5173\u95EDE5\u8D26\u6237\u767B\u5F55\u53CC\u91CD\u9A8C\u8BC1</h2>',32),pt={href:"https://account.activedirectory.windowsazure.com/UserManagement/MultifactorVerification.aspx",target:"_blank",rel:"noopener noreferrer"},ut=t("\u70B9\u51FB\u8FDB\u5165Office 365 E5\u8D26\u6237\u591A\u91CD\u8EAB\u4EFD\u9A8C\u8BC1\u7BA1\u7406"),mt=t("\uFF0C\u6309\u7167\u4E0B\u56FE\u914D\u7F6E\u5373\u53EF\u5173\u95EDE5\u8D26\u6237\u767B\u5F55\u7684\u53CC\u91CD\u9A8C\u8BC1\u3002 "),ft=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210519091511446.png",alt:"\u56FE\u7247"},null,-1),bt=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210519091736252.png",alt:"\u56FE\u7247"},null,-1),It=e("h2",{id:"\u5173\u95EDazure\u4E2Dapi\u8C03\u7528\u7684\u53CC\u91CD\u9A8C\u8BC1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5173\u95EDazure\u4E2Dapi\u8C03\u7528\u7684\u53CC\u91CD\u9A8C\u8BC1","aria-hidden":"true"},"#"),t(" \u5173\u95EDAzure\u4E2DAPI\u8C03\u7528\u7684\u53CC\u91CD\u9A8C\u8BC1")],-1),At={href:"https://aad.portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview",target:"_blank",rel:"noopener noreferrer"},xt=t("\u70B9\u51FB\u8FDB\u5165Azure Active Directory\u7BA1\u7406\u4E2D\u5FC3"),Pt=t("\uFF0C\u6309\u7167\u4E0B\u56FE\u914D\u7F6E\u5373\u53EF\u5173\u95EDAzure\u4E2DAPI\u8C03\u7528\u7684\u53CC\u91CD\u9A8C\u8BC1\u3002 "),wt=e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201010153543698.png",alt:"\u56FE\u7247"},null,-1),Rt=e("h2",{id:"\u67E5\u8BE2\u7EED\u8BA2\u5269\u4F59\u5929\u6570",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u67E5\u8BE2\u7EED\u8BA2\u5269\u4F59\u5929\u6570","aria-hidden":"true"},"#"),t(" \u67E5\u8BE2\u7EED\u8BA2\u5269\u4F59\u5929\u6570")],-1),kt={href:"https://developer.microsoft.com/zh-cn/microsoft-365/profile",target:"_blank",rel:"noopener noreferrer"},Et=t("\u70B9\u51FB\u67E5\u8BE2\u7EED\u8BA2\u5269\u4F59\u5929\u6570(\u4F7F\u7528\u7533\u8BF7E5\u8D26\u53F7\u7684\u8D26\u6237\u767B\u5F55)"),Mt=n('<h2 id="\u5173\u4E8E\u7EED\u8BA2" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u7EED\u8BA2" aria-hidden="true">#</a> \u5173\u4E8E\u7EED\u8BA2</h2><p>E5\u7EED\u8BA2\u6267\u884C\u662F\u5FAE\u8F6F\u7EDF\u4E00\u7684\u5177\u6709\u4E00\u5B9A\u65F6\u95F4\u5468\u671F\u7684\u7EED\u8BA2\uFF0C\u5982\u679C\u4F60\u7684E5\u8BA2\u9605\u5269\u4F59\u5929\u6570\u5C11\u4E8E\u7B49\u4E8E30\u5929\u3001\u5E76\u6536\u5230\u4E86\u672A\u68C0\u6D4B\u5230\u5F00\u53D1\u6D3B\u52A8\u7684\u8B66\u544A\u90AE\u4EF6\u4E14\u4EEA\u8868\u76D8\u663E\u793A\u6807\u7EA2\u6587\u5B57\u201C\u6B64\u8BA2\u9605\u5904\u4E8E\u975E\u6D3B\u52A8\u72B6\u6001\u4E14\u5373\u5C06\u8FC7\u671F\u201D\uFF0C\u8BF7\u4E0D\u8981\u614C\u5F20\u3002\u6839\u636E\u5FAE\u8F6F\u5BA2\u670D\u5B98\u65B9\u8BF4\u6CD5\u662F\uFF1A\u201C\u8BA2\u9605\u53EA\u6709\u5728\u5269\u4F59\u6700\u540E1\u5929\u624D\u7ED9\u7EED\u671F\u201D\uFF0C\u7136\u800C\u6839\u636E\u4F17\u591AE5\u8D26\u53F7\u7684\u7EED\u8BA2\u60C5\u51B5\u6765\u7EDF\u8BA1\uFF0C\u5927\u90E8\u5206\u8D26\u53F7\u662F\u5728\u5C11\u4E8E30\u5929\u7EED\u671F\u7684\uFF0C\u6781\u5C11\u6B27\u6D32\u4EBA\u662F\u5728\u5927\u4E8E30\u5929\u7684\u65F6\u5019\u7EED\u671F\u3002</p><p>\u672C\u4EBAE5\u8D26\u6237\u6536\u5230\u8FC7\u4E24\u6B21\u672A\u6D3B\u8DC3\u8B66\u544A\uFF0C\u5FAE\u8F6F\u5BA2\u670D\u89E3\u91CA\u8BF4\uFF1A\u8FD9\u79CD\u8B66\u544A\u90AE\u4EF6\u5C5E\u4E8E\u7CFB\u7EDF\u81EA\u52A8\u53D1\u9001\u7684(\u90AE\u4EF6\u4F1A\u5728\u5269\u4F59\u7B2C30\u5929\u7684\u65F6\u5019\u53D1\u9001)\uFF0C\u65E0\u9700\u7406\u4F1A\u5B83\uFF0C\u81F3\u4E8E\u51FA\u73B0\u6587\u5B57\u6807\u7EA2\u6587\u5B57\u201C\u6B64\u8BA2\u9605\u5904\u4E8E\u975E\u6D3B\u52A8\u72B6\u6001\u4E14\u5373\u5C06\u8FC7\u671F\u201D\uFF0C\u4E5F\u4E3A\u7CFB\u7EDF\u81EA\u52A8\u63D0\u793A\uFF0C\u53EA\u8981\u4FDD\u8BC1\u4EEA\u8868\u76D8\u4E0A\u7684\u6587\u5B57\u6807\u6CE8\u4E3A\u201C<strong>\u53EF\u7EED\u8BA2</strong> E5\u7684\u8BA2\u9605\u201D\u5C31\u53EF\u4EE5\u4E86\uFF0C\u5373\u4FBF\u662F\u771F\u7684\u8FC7\u671F\u4E86\u6CA1\u6709\u7EED\u4E0A\u4E5F\u662F\u53EF\u4EE5\u4ECE\u4EEA\u8868\u76D8\u7533\u8BC9\u7684\u3002</p><h3 id="\u4EEA\u8868\u76D8\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#\u4EEA\u8868\u76D8\u53D8\u5316" aria-hidden="true">#</a> \u4EEA\u8868\u76D8\u53D8\u5316</h3><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020082317495235.png" alt="\u56FE\u7247"><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210129090340925.png" alt="\u56FE\u7247"></p><h3 id="\u7EED\u8BA2\u90AE\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EED\u8BA2\u90AE\u4EF6" aria-hidden="true">#</a> \u7EED\u8BA2\u90AE\u4EF6</h3><p>\u7B2C\u4E00\u6B21\u7EED\u8BA2 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200820125542472.jpeg" alt="\u56FE\u7247"> \u7B2C\u4E8C\u6B21\u7EED\u8BA2 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201031134336350.png" alt="\u56FE\u7247"></p><h3 id="\u8B66\u544A\u90AE\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8B66\u544A\u90AE\u4EF6" aria-hidden="true">#</a> \u8B66\u544A\u90AE\u4EF6</h3><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200820125531157.jpeg" alt="\u56FE\u7247"></p>',9);function yt(zt,Bt){const o=l("ExternalLinkIcon");return s(),d("div",null,[h,e("ul",null,[c,_,e("li",null,[e("strong",null,[g,e("a",p,[u,r(o)]),m,e("a",f,[b,r(o)]),I])])]),A,e("h4",x,[P,w,e("strong",null,[R,e("a",k,[E,r(o)])])]),M,y,e("table",null,[z,e("tbody",null,[e("tr",null,[B,e("td",null,[v,e("a",D,[V,r(o)]),q]),X,e("td",null,[e("a",S,[L,r(o)])]),e("td",null,[e("a",W,[N,r(o)])]),e("td",null,[e("a",T,[U,r(o)])])]),e("tr",null,[F,C,O,e("td",null,[e("a",G,[j,r(o)])]),e("td",null,[e("a",Y,[H,r(o)])]),Q]),e("tr",null,[Z,J,K,e("td",null,[e("a",$,[ee,r(o)])]),te,oe]),e("tr",null,[re,ne,ae,e("td",null,[e("a",se,[de,r(o)])]),e("td",null,[e("a",le,[ie,r(o)])]),he])])]),ce,e("table",null,[_e,e("tbody",null,[e("tr",null,[ge,pe,e("td",null,[e("a",ue,[me,r(o)])]),e("td",null,[e("a",fe,[be,r(o)])]),e("td",null,[e("a",Ie,[Ae,r(o)])])]),e("tr",null,[xe,Pe,e("td",null,[e("a",we,[Re,r(o)])]),e("td",null,[e("a",ke,[Ee,r(o)])]),e("td",null,[e("a",Me,[ye,r(o)])])]),e("tr",null,[ze,Be,e("td",null,[e("a",ve,[De,r(o)])]),e("td",null,[e("a",Ve,[qe,r(o)])]),e("td",null,[e("a",Xe,[Se,r(o)])])])])]),Le,e("ol",null,[e("li",null,[e("a",We,[Ne,r(o)]),Te,e("a",Ue,[Fe,r(o)]),Ce,Oe,Ge,e("a",je,[Ye,r(o)]),He,Qe,Ze,Je,Ke,$e])]),et,e("p",null,[tt,ot,rt,nt,at,st,dt,e("a",lt,[it,r(o)]),ht,ct,_t]),gt,e("p",null,[e("a",pt,[ut,r(o)]),mt,ft,bt]),It,e("p",null,[e("a",At,[xt,r(o)]),Pt,wt]),Rt,e("p",null,[e("a",kt,[Et,r(o)])]),Mt])}var Vt=a(i,[["render",yt],["__file","Microsoft-365-E5-RenewPlus.html.vue"]]);export{Vt as default};
