import{_ as a,V as n,W as s,Z as e}from"./framework-debd98b7.js";const t={},i=e(`<h1 id="kubeadm-安装-kubernetes-1-26-1集群" tabindex="-1"><a class="header-anchor" href="#kubeadm-安装-kubernetes-1-26-1集群" aria-hidden="true">#</a> kubeadm 安装 Kubernetes-1.26.1集群</h1><blockquote><p>基于vmware运行ubuntu系统，模拟集群环境以便学习k8s运维技术。因为笔记本内存有限，只能开一个master节点和2个node节点，没有配置负载均衡和高可用。</p></blockquote><table><thead><tr><th>主机名</th><th>ip</th><th>配置</th></tr></thead><tbody><tr><td>k8s-master</td><td>192.168.109.130</td><td>4C4G 20G-SSD</td></tr><tr><td>k8s-node1</td><td>192.168.109.131</td><td>3C2G 20G-SSD</td></tr><tr><td>k8s-node2</td><td>192.168.109.12</td><td>3C2G 20G-SSD</td></tr></tbody></table><table><thead><tr><th>软件</th><th>版本</th></tr></thead><tbody><tr><td>VMware</td><td>17.0.0 build-20800274</td></tr><tr><td>kubeadm</td><td>1.26.1</td></tr><tr><td>k8s</td><td>1.26.1</td></tr><tr><td>OS</td><td>ubuntu-server 22.04-LTS minimized</td></tr></tbody></table><table><thead><tr><th>硬件配置</th><th>值</th></tr></thead><tbody><tr><td>宿主OS</td><td>w11x64</td></tr><tr><td>CPU</td><td>AMD Ryzen 7 4800U 8C16T</td></tr><tr><td>内存</td><td>16G DDR4 15.4G可用</td></tr><tr><td>硬盘</td><td>500GB NVME SSD</td></tr></tbody></table><h3 id="_1-设置hostname" tabindex="-1"><a class="header-anchor" href="#_1-设置hostname" aria-hidden="true">#</a> 1.设置hostname</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hostnamectl set-hostname k8s-master // master节点
hostnamectl set-hostname k8s-node1  // node1节点
hostnamectl set-hostname k8s-node2  // node2节点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-设置hosts" tabindex="-1"><a class="header-anchor" href="#_2-设置hosts" aria-hidden="true">#</a> 2.设置hosts</h3><p>后续可以使用别名直接访问别的节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/hosts <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
192.168.109.130 k8s-master
192.168.109.131 k8s-node1
192.168.109.132 k8s-node2
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-禁用swap" tabindex="-1"><a class="header-anchor" href="#_3-禁用swap" aria-hidden="true">#</a> 3.禁用swap</h3><p>以前的版本swap可能会影响性能,当前版本未知</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> swapoff <span class="token parameter variable">-a</span>
<span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/swap/ s/^\\(.*\\)$/#\\1/g&#39;</span> /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-修改内核参数" tabindex="-1"><a class="header-anchor" href="#_4-修改内核参数" aria-hidden="true">#</a> 4.修改内核参数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 启用内核模块
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/modules-load.d/containerd.conf <span class="token operator">&lt;&lt;</span><span class="token string">EOF
overlay
br_netfilter
EOF</span>
-- 启用内核模块
<span class="token function">sudo</span> modprobe overlay
<span class="token function">sudo</span> modprobe br_netfilter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-sysctl配置" tabindex="-1"><a class="header-anchor" href="#_4-sysctl配置" aria-hidden="true">#</a> 4.sysctl配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">tee</span> /etc/sysctl.d/kubernetes.conf<span class="token operator">&lt;&lt;</span><span class="token string">EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-重新加载-sysctl" tabindex="-1"><a class="header-anchor" href="#_5-重新加载-sysctl" aria-hidden="true">#</a> 5.重新加载 sysctl</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">sysctl</span> –system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-安装基础软件" tabindex="-1"><a class="header-anchor" href="#_6-安装基础软件" aria-hidden="true">#</a> 6.安装基础软件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">curl</span> gnupg2 software-properties-common apt-transport-https ca-certificates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-添加docker源" tabindex="-1"><a class="header-anchor" href="#_7-添加docker源" aria-hidden="true">#</a> 7.添加docker源</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://download.docker.com/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmour</span> <span class="token parameter variable">-o</span> /etc/apt/trusted.gpg.d/docker.gpg
<span class="token function">sudo</span> add-apt-repository <span class="token string">&quot;deb [arch=amd64] https://download.docker.com/linux/ubuntu <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> stable&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-安装containerd" tabindex="-1"><a class="header-anchor" href="#_8-安装containerd" aria-hidden="true">#</a> 8.安装containerd</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update 
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-配置-containerd-用systemdcgroup启动" tabindex="-1"><a class="header-anchor" href="#_9-配置-containerd-用systemdcgroup启动" aria-hidden="true">#</a> 9.配置 containerd 用systemdcgroup启动.</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 生成默认的containerd配置
containerd配置 config default <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/containerd/config.toml <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
-- 修改containerd的配置 Cgroup配置为Systemd
<span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/SystemdCgroup \\= false/SystemdCgroup \\= true/g&#39;</span> /etc/containerd/config.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-重启containerd使之生效" tabindex="-1"><a class="header-anchor" href="#_10-重启containerd使之生效" aria-hidden="true">#</a> 10.重启containerd使之生效</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart containerd
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-设置crictl" tabindex="-1"><a class="header-anchor" href="#_11-设置crictl" aria-hidden="true">#</a> 11.设置crictl</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 生成crictl配置 主要是启用containerd所需要的修改
<span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/crictl.yaml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
runtime-endpoint: unix:///var/run/containerd/containerd.sock
image-endpoint: unix:///var/run/containerd/containerd.sock
timeout: 10
debug: false
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h1 id="_12-添加kubernetes-阿里巴巴源" tabindex="-1"><a class="header-anchor" href="#_12-添加kubernetes-阿里巴巴源" aria-hidden="true">#</a> 12.添加Kubernetes 阿里巴巴源</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
-- 这个源使用的系统代号是xenial，但不影响使用
<span class="token function">sudo</span> apt-add-repository <span class="token string">&quot;deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-安装k8s命令行工具" tabindex="-1"><a class="header-anchor" href="#_13-安装k8s命令行工具" aria-hidden="true">#</a> 13.安装k8s命令行工具</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 查看当前最新版本 决定安装哪个版本
<span class="token function">apt-cache</span> madison kubeadm<span class="token operator">|</span><span class="token function">head</span>
-- 当前最新版本是1.26.1
<span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token assign-left variable">kubelet</span><span class="token operator">=</span><span class="token number">1.26</span>.1-00 <span class="token assign-left variable">kubeadm</span><span class="token operator">=</span><span class="token number">1.26</span>.1-00 <span class="token assign-left variable">kubectl</span><span class="token operator">=</span><span class="token number">1.26</span>.1-00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_14-查看kubeadm启动k8s所需镜像的信息" tabindex="-1"><a class="header-anchor" href="#_14-查看kubeadm启动k8s所需镜像的信息" aria-hidden="true">#</a> 14.查看kubeadm启动k8s所需镜像的信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 注意修改版本号
kubeadm config images list <span class="token punctuation">\\</span>
--image-repository registry.aliyuncs.com/google_containers <span class="token punctuation">\\</span>
--kubernetes-version<span class="token operator">=</span>v1.26.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_15-使用阿里镜像站下载所需的镜像" tabindex="-1"><a class="header-anchor" href="#_15-使用阿里镜像站下载所需的镜像" aria-hidden="true">#</a> 15.使用阿里镜像站下载所需的镜像</h1><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 注意修改版本号
kubeadm config images pull <span class="token punctuation">\\</span>
--kubernetes-version<span class="token operator">=</span>v1.26.1 <span class="token punctuation">\\</span>
--image-repository registry.aliyuncs.com/google_containers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_16-查看已下载镜像" tabindex="-1"><a class="header-anchor" href="#_16-查看已下载镜像" aria-hidden="true">#</a> 16.查看已下载镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>crictl images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_17-生成kubeadm默认配置-master节点执行" tabindex="-1"><a class="header-anchor" href="#_17-生成kubeadm默认配置-master节点执行" aria-hidden="true">#</a> 17.生成kubeadm默认配置 (master节点执行)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubeadm config print init-defaults <span class="token operator">&gt;</span> kubeadm.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_18-参考配置文件-master节点执行" tabindex="-1"><a class="header-anchor" href="#_18-参考配置文件-master节点执行" aria-hidden="true">#</a> 18.参考配置文件(master节点执行)</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> kubeadm.k8s.io/v1beta3
<span class="token key atrule">bootstrapTokens</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">groups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> system<span class="token punctuation">:</span>bootstrappers<span class="token punctuation">:</span>kubeadm<span class="token punctuation">:</span>default<span class="token punctuation">-</span>node<span class="token punctuation">-</span>token
  <span class="token key atrule">token</span><span class="token punctuation">:</span> abcdef.0123456789abcdef
  <span class="token key atrule">ttl</span><span class="token punctuation">:</span> 24h0m0s
  <span class="token key atrule">usages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> signing
  <span class="token punctuation">-</span> authentication
<span class="token key atrule">kind</span><span class="token punctuation">:</span> InitConfiguration
<span class="token key atrule">localAPIEndpoint</span><span class="token punctuation">:</span>
  <span class="token comment"># master的ip</span>
  <span class="token key atrule">advertiseAddress</span><span class="token punctuation">:</span> 192.168.109.130
  <span class="token key atrule">bindPort</span><span class="token punctuation">:</span> <span class="token number">6443</span>
<span class="token key atrule">nodeRegistration</span><span class="token punctuation">:</span>
  <span class="token comment"># 当前使用containerd docker已废弃</span>
  <span class="token key atrule">criSocket</span><span class="token punctuation">:</span> unix<span class="token punctuation">:</span>///var/run/containerd/containerd.sock
  <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
  <span class="token key atrule">name</span><span class="token punctuation">:</span> k8s<span class="token punctuation">-</span>master
  <span class="token key atrule">taints</span><span class="token punctuation">:</span> <span class="token null important">null</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiServer</span><span class="token punctuation">:</span>
  <span class="token key atrule">timeoutForControlPlane</span><span class="token punctuation">:</span> 4m0s
  <span class="token key atrule">certSANs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 192.168.109.130
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> kubeadm.k8s.io/v1beta3
<span class="token key atrule">certificatesDir</span><span class="token punctuation">:</span> /etc/kubernetes/pki
<span class="token key atrule">clusterName</span><span class="token punctuation">:</span> kubernetes
<span class="token key atrule">controllerManager</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token key atrule">dns</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token key atrule">etcd</span><span class="token punctuation">:</span>
  <span class="token key atrule">local</span><span class="token punctuation">:</span>
    <span class="token key atrule">dataDir</span><span class="token punctuation">:</span> /var/lib/etcd
<span class="token comment"># 使用国内镜像</span>
<span class="token key atrule">imageRepository</span><span class="token punctuation">:</span> registry.aliyuncs.com/google_containers
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterConfiguration
<span class="token key atrule">kubernetesVersion</span><span class="token punctuation">:</span> 1.26.1
<span class="token key atrule">networking</span><span class="token punctuation">:</span>
  <span class="token key atrule">dnsDomain</span><span class="token punctuation">:</span> cluster.local
  <span class="token key atrule">serviceSubnet</span><span class="token punctuation">:</span> 10.96.0.0/12
  <span class="token key atrule">podSubnet</span><span class="token punctuation">:</span> 10.244.0.0/16
<span class="token key atrule">scheduler</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_19-初始化master-master节点执行" tabindex="-1"><a class="header-anchor" href="#_19-初始化master-master节点执行" aria-hidden="true">#</a> 19.初始化master(master节点执行)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubeadm init <span class="token punctuation">\\</span>
<span class="token parameter variable">--config</span> /root/kubeadm.yaml <span class="token punctuation">\\</span>
--ignore-preflight-errors<span class="token operator">=</span>SystemVerification <span class="token punctuation">\\</span>
--upload-certs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_20-重置matser-master节点执行" tabindex="-1"><a class="header-anchor" href="#_20-重置matser-master节点执行" aria-hidden="true">#</a> 20.重置matser(master节点执行)</h3><p>如果上一步因为配置出错 可以重置初始化 防止重复init因为资源重复报错</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Kubeadm reset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_21-本地化配置-master节点执行" tabindex="-1"><a class="header-anchor" href="#_21-本地化配置-master节点执行" aria-hidden="true">#</a> 21.本地化配置(master节点执行)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 生成一个用户配置
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube
<span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_22-node节点配置" tabindex="-1"><a class="header-anchor" href="#_22-node节点配置" aria-hidden="true">#</a> 22.Node节点配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 查看containerd的images相关配置
<span class="token function">cat</span> /etc/containerd的images相关配置/config.toml  <span class="token operator">|</span><span class="token function">grep</span> image

-- pause镜像改成阿里巴巴源 并升级到3.9
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&quot;s#registry.k8s.io/pause:3.6#registry.aliyuncs.com/google_containers/pause:3.9#g&quot;</span>  /etc/containerd/config.toml
-- 重复服务 使之生效
systemctl daemon-reload <span class="token operator">&amp;&amp;</span> systemctl restart containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_23-node节点初始化-node节点执行" tabindex="-1"><a class="header-anchor" href="#_23-node节点初始化-node节点执行" aria-hidden="true">#</a> 23.Node节点初始化(node节点执行)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- master节点执行  生成一个在node节点执行用于初始化node节点的k8s服务的命令
kubeadm token create --print-join-command
-- 将生成的命令在node1 和node2 执行 这个命令是有时效的 过期了在master重新生成
kubeadm <span class="token function">join</span> <span class="token number">192.168</span>.109.130:6443 <span class="token parameter variable">--token</span> dryr23.ddjsnhcu91o7wpwh --discovery-token-ca-cert-hash sha256:6d51daf574d494588cfb880d5d3ddd89eaf7f278d0454fe6033e54816b9187d3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_24-安装cni-master节点执行" tabindex="-1"><a class="header-anchor" href="#_24-安装cni-master节点执行" aria-hidden="true">#</a> 24.安装CNI (master节点执行)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-- 当前最新版本为3.25.0
<span class="token function">curl</span> https://raw.githubusercontent.com/projectcalico/calico/v3.25.0/manifests/calico.yaml <span class="token parameter variable">-o</span> calico-3-25-0.yaml
kubectl apply <span class="token parameter variable">-f</span> calico-3-25-0.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_25-测试-master节点执行" tabindex="-1"><a class="header-anchor" href="#_25-测试-master节点执行" aria-hidden="true">#</a> 25.测试 (master节点执行)</h3><p>跑一个inginx的镜像用于测试k8s是否正常运行，最终能打开一个nginx默认的首页。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl create deployment nginx <span class="token parameter variable">--image</span><span class="token operator">=</span>nginx
kubectl get pod
kubectl expose deployment nginx <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">80</span> <span class="token parameter variable">--type</span><span class="token operator">=</span>NodePort
kubectl get pod,svc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,62),l=[i];function d(r,c){return n(),s("div",null,l)}const p=a(t,[["render",d],["__file","kubeadm 安装 Kubernetes-1.26.1集群.html.vue"]]);export{p as default};
