import{_ as l,W as r,X as t,Y as n,Z as e,a0 as a,$ as i,C as o}from"./framework-06fee4ab.js";const p={},d=i(`<h1 id="_10-个优化技巧-减少-docker-镜像大小" tabindex="-1"><a class="header-anchor" href="#_10-个优化技巧-减少-docker-镜像大小" aria-hidden="true">#</a> 10 个优化技巧，减少 Docker 镜像大小</h1><h2 id="什么是-docker" tabindex="-1"><a class="header-anchor" href="#什么是-docker" aria-hidden="true">#</a> 什么是 docker？</h2><p>Docker 是一种容器引擎，可以在容器内运行一段代码。Docker 镜像是在任何地方运行您的应用程序而无需担心应用程序依赖性的方式。</p><p>要构建镜像，docker 使用一个名为 Dockerfile 的文件。Dockerfile 是一个包含许多指令（RUN、COPY、EXPOSE 等）的文件。成功执行这些命令后，docker 将创建一个镜像供我们在任何地方使用。</p><h2 id="为什么要减小-docker-镜像大小" tabindex="-1"><a class="header-anchor" href="#为什么要减小-docker-镜像大小" aria-hidden="true">#</a> 为什么要减小 docker 镜像大小？</h2><ol><li>安装不必要的软件包会增加攻击面，从而增加安全风险。</li><li>镜像传输需要更多时间。</li><li>部署大镜像需要更多时间。</li></ol><p>我们必须以某种方式创建我们的 Dockerfile，以便从该 Dockerfile 构建的镜像在大小方面得到优化。</p><p>在本文中，我们将讨论 10 种减少 docker 镜像大小的有效方法。</p><h2 id="_1-最小化镜像层" tabindex="-1"><a class="header-anchor" href="#_1-最小化镜像层" aria-hidden="true">#</a> 1：最小化镜像层</h2><p>我们可以减少 Dockerfile 中的层数。</p><p>dockerfile 中的每个 FROM、RUN、COPY 命令都会创建一个单独的层，并增加镜像的整体大小和构建时间。</p><p>要减小 docker 镜像大小，请在单个 RUN 或 COPY 指令中执行多个命令来最小化 Dockerfile 中的层数。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> ubuntu:latest</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt update  - y</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt install unzip - y</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt install curl - y</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt install python3 - y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与其对每个命令使用单独的指令，不如将它们组合起来：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> ubuntu:latest</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt update  -y &amp;&amp; <span class="token operator">\\</span>
apt install unzip -y &amp;&amp; <span class="token operator">\\</span>
apt install curl -y &amp;&amp; <span class="token operator">\\</span>
apt install python3 -y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从下图中可以看出，通过减少层数，可以减少一些 MB 的大小。</p>`,16),c={href:"http://www.w3.org/2000/svg",target:"_blank",rel:"noopener noreferrer"},u={href:"http://www.w3.org/1999/xlink",target:"_blank",rel:"noopener noreferrer"},m=i(`<h2 id="_2-使用-docker-squash-减小镜像大小" tabindex="-1"><a class="header-anchor" href="#_2-使用-docker-squash-减小镜像大小" aria-hidden="true">#</a> 2：使用 Docker Squash 减小镜像大小</h2><p>Docker 在构建镜像时创建了很多层。压缩有助于在逻辑层中组织镜像。我们可以控制镜像的结构，而不是让镜像具有多个不必要的层。</p><p>您可以使用以下命令安装 docker-squash。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>pip install docker-squash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>您可以运行以下命令来减小镜像的大小。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker-squash image:old -t image:new
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),k={href:"http://www.w3.org/2000/svg",target:"_blank",rel:"noopener noreferrer"},v={href:"http://www.w3.org/1999/xlink",target:"_blank",rel:"noopener noreferrer"},h=i(`<h2 id="_3-使用较小的基础镜像" tabindex="-1"><a class="header-anchor" href="#_3-使用较小的基础镜像" aria-hidden="true">#</a> 3：使用较小的基础镜像</h2><p>减小 docker 镜像大小最明显的方法是使用较小的基础镜像。</p><p>如果希望为 python 应用程序创建镜像，请考虑使用 python:3.9-slim 镜像而不是 python:3.9。</p><p>python:3.9 的大小约为 1.3 GB，而 python:3.9-slim 的大小仅为 1 GB 左右。</p><p>您可以使用 alpine 版本进一步减少镜像。alpine 镜像是专门为作为容器运行而设计的，而且体积非常小。python:3.9-alpine 镜像只有 49 MB。</p><h2 id="_4-使用多阶段构建来减小大小" tabindex="-1"><a class="header-anchor" href="#_4-使用多阶段构建来减小大小" aria-hidden="true">#</a> 4：使用多阶段构建来减小大小</h2><p>为了显着减小大小，我们可以使用 docker 多阶段构建的概念。这里我们使用不同的 images/Dockerfile 来构建和打包应用代码。</p><p>它将 Dockerfile 分成多个阶段，并将所需的工件从一个阶段传递到另一个阶段，然后在最后一个阶段交付缩小镜像大小的最终镜像。它显着减小镜像尺寸。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># Official docker build image, Using  node:14.17-alpine3.14 image for stage-1.</span>
<span class="token comment"># Stage-1</span>
<span class="token instruction"><span class="token keyword">FROM</span> node:14.17-alpine3.14 <span class="token keyword">as</span> build</span>
<span class="token comment"># Copy Required files</span>
<span class="token instruction"><span class="token keyword">COPY</span> public /home/app/public/</span>
<span class="token instruction"><span class="token keyword">COPY</span> src /home/app/src/</span>
<span class="token comment"># dockerfile install multiple packages</span>
<span class="token instruction"><span class="token keyword">RUN</span> apk add g++ make python2</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm install --silent</span>
<span class="token comment"># Create Build</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm run build</span>
<span class="token instruction"><span class="token keyword">RUN</span> apk --purge del python2</span>
<span class="token comment">#Run the build by copying the files form previous stage.</span>
<span class="token comment"># Stage-2</span>
<span class="token instruction"><span class="token keyword">FROM</span> nginx:stable-alpine</span>
<span class="token instruction"><span class="token keyword">COPY</span> nginx.conf /etc/nginx/conf.d/default.conf</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">build</span></span> /home/app/build /usr/share/nginx/html</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 80</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;nginx&quot;</span>, <span class="token string">&quot;-g&quot;</span>, <span class="token string">&quot;daemon off;&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们使用两个阶段从 docker 文件创建镜像。在 Stage-1 中，我们复制代码并构建它，在 stage-2 中，我们使用在 stage-1 中构建的代码在 Nginx 中运行。</p><h2 id="_5-apt-安装中使用-no-install-recommends-标志" tabindex="-1"><a class="header-anchor" href="#_5-apt-安装中使用-no-install-recommends-标志" aria-hidden="true">#</a> 5：apt 安装中使用 --no-install-recommends 标志</h2><p>当我们运行 apt install 命令来安装某些包时，它会安装一些不需要的推荐包。使用 --no-install-recommends 标志可以显着减小镜像大小。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> ubuntu:latest</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt update -y &amp;&amp; <span class="token operator">\\</span>
apt install unzip -y --no-install-recommends &amp;&amp; <span class="token operator">\\</span>
apt install curl --no-install-recommends -y &amp;&amp; <span class="token operator">\\</span>
apt install python3 -y --no-install-recommends</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下图所示，带有 new 标签的镜像由于添加了此标志而减少了 5MB。当我们要安装多个包时，这将非常有帮助。<img src="https://static.xlc520.ml/blogImage/640-1679364162221-0.png" alt="图片" loading="lazy"></p><p>您可以在 apk add 命令中添加 --no-cache。</p><h2 id="_6-在-apt-install-命令后添加-rm-rf-var-lib-apt-lists" tabindex="-1"><a class="header-anchor" href="#_6-在-apt-install-命令后添加-rm-rf-var-lib-apt-lists" aria-hidden="true">#</a> 6：在 apt install 命令后添加 rm -rf /var/lib/apt/lists/*</h2><p>我们可以在 apt install 之后添加这个命令来减少 docker 镜像的大小。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> ubuntu:latest</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt update -y &amp;&amp; <span class="token operator">\\</span>
apt install unzip -y --no-install-recommends &amp;&amp; <span class="token operator">\\</span>
apt install curl --no-install-recommends -y &amp;&amp; <span class="token operator">\\</span>
apt install python3 -y --no-install-recommends &amp;&amp; <span class="token operator">\\</span>
rm -rf /var/lib/apt/lists/*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.xlc520.ml/blogImage/640-1679364162221-1.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>从上图中可以看出，我们已将 docker 镜像的大小减少了约 41 MB。</p><h2 id="_7-使用-dockerignore-文件" tabindex="-1"><a class="header-anchor" href="#_7-使用-dockerignore-文件" aria-hidden="true">#</a> 7：使用 .dockerignore 文件</h2><p>如果您不想将某些文件复制到 docker 镜像，那么使用 .dockerignore 文件可以为您节省一些空间。</p><p>在构建上下文中有一些隐藏的文件/文件夹，您可以使用 ADD 或 COPY 命令（如 .git 等）将其传输到镜像。包含一个 .dockerignore 文件以减小 docker 镜像大小是一个很好的做法。</p><p><code>.dockerignore</code> 文件示例。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>ignorethisfile.txt
logs/
ignorethisfolder/
.git
.cache
*.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-在-run-之后放置-copy" tabindex="-1"><a class="header-anchor" href="#_8-在-run-之后放置-copy" aria-hidden="true">#</a> 8：在 RUN 之后放置 COPY</h2><p>在某些情况下，您对代码进行了细微的更改，并且需要反复从 dockerfile 构建镜像。 在这种情况下，将 COPY 命令放在 RUN 命令之后将有助于减小镜像大小，因为在这种情况下 docker 将能够更好地使用缓存功能。</p><p>它将为安装了依赖项的镜像创建缓存，每次更改代码时，docker 都会使用该缓存并创建镜像。它还将减少 docker 构建时间。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment">#Dockerfile-1</span>
<span class="token instruction"><span class="token keyword">FROM</span> ubuntu:latest</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt update -y &amp;&amp; <span class="token operator">\\</span>
apt install unzip -y --no-install-recommends &amp;&amp; <span class="token operator">\\</span>
apt install curl --no-install-recommends -y &amp;&amp; <span class="token operator">\\</span>
apt install python3 -y --no-install-recommends &amp;&amp; <span class="token operator">\\</span>
rm -rf /var/lib/apt/lists/*</span>
<span class="token instruction"><span class="token keyword">COPY</span> file /home/ubuntu</span>
<span class="token comment">#Dockerfile-2</span>
<span class="token instruction"><span class="token keyword">FROM</span> ubuntu:latest</span>
<span class="token instruction"><span class="token keyword">COPY</span> file /home/ubuntu</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt update -y &amp;&amp; <span class="token operator">\\</span>
apt install unzip -y --no-install-recommends &amp;&amp; <span class="token operator">\\</span>
apt install curl --no-install-recommends -y &amp;&amp; <span class="token operator">\\</span>
apt install python3 -y --no-install-recommends &amp;&amp; <span class="token operator">\\</span>
rm -rf /var/lib/apt/lists/*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述情况下，dockerfile-1 将能够比 dockerfile-2 表现得更好。</p><h2 id="_9-安装后删除软件包" tabindex="-1"><a class="header-anchor" href="#_9-安装后删除软件包" aria-hidden="true">#</a> 9：安装后删除软件包</h2><p>如果您需要在 docker 镜像中安装一些包，并且您是从外部下载它们，那么最好在安装后删除这些包。</p><p>例如，如果您希望从 zip 文件安装 AWS CLI V2，那么在成功安装后请记住也删除该 zip 文件。</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> ubuntu:latest</span>
<span class="token instruction"><span class="token keyword">RUN</span> curl <span class="token string">&quot;https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip&quot;</span> -o <span class="token string">&quot;awscliv2.zip&quot;</span> &amp;&amp; <span class="token operator">\\</span>
unzip awscliv2.zip &amp;&amp; <span class="token operator">\\</span>
sudo ./aws/install &amp;&amp; <span class="token operator">\\</span>
rm awscliv2.zip</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-使用-docker-镜像缩容工具" tabindex="-1"><a class="header-anchor" href="#_10-使用-docker-镜像缩容工具" aria-hidden="true">#</a> 10：使用 Docker 镜像缩容工具</h2><p>有几个<strong>dockerfile 优化工具</strong>可以帮助你减少 docker 镜像的大小。下面列出了其中一些。</p>`,36),g=n("p",null,[n("strong",null,"Dive"),e("：Dive 是一个开源工具，用于探索 Docker 镜像及其层内容，然后发现缩小 Docker/OCI 镜像大小的方法。")],-1),b={href:"https://github.com/wagoodman/dive",target:"_blank",rel:"noopener noreferrer"},f={href:"http://fromlatest.io",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.fromlatest.io/",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,[e("Docker Slim：它让你的容器更好、更小、更安全。您可以使用"),n("strong",null,"dockerslim 来最小化容器镜像"),e("。")],-1),_={href:"https://github.com/slimtoolkit/slim",target:"_blank",rel:"noopener noreferrer"};function x(C,R){const s=o("ExternalLinkIcon");return r(),t("div",null,[d,n("p",null,[e("![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='"),n("a",c,[e("http://www.w3.org/2000/svg"),a(s)]),e("' xmlns:xlink='"),n("a",u,[e("http://www.w3.org/1999/xlink"),a(s)]),e("'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)")]),m,n("p",null,[e("![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='"),n("a",k,[e("http://www.w3.org/2000/svg"),a(s)]),e("' xmlns:xlink='"),n("a",v,[e("http://www.w3.org/1999/xlink"),a(s)]),e("'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)")]),h,n("ol",null,[n("li",null,[g,n("p",null,[n("a",b,[e("https://github.com/wagoodman/dive"),a(s)])])]),n("li",null,[n("p",null,[n("strong",null,[n("a",f,[e("fromlatest.io"),a(s)])]),e("：此工具将检查您的 Dockerfile 并检查可以执行的更多步骤以减小镜像大小。")]),n("p",null,[n("a",w,[e("https://www.fromlatest.io/"),a(s)])])]),n("li",null,[y,n("p",null,[n("a",_,[e("https://github.com/slimtoolkit/slim"),a(s)])])])])])}const F=l(p,[["render",x],["__file","减少 Docker 镜像大小.html.vue"]]);export{F as default};
