import{_ as s,o as a,c as n,X as e}from"./chunks/framework.39c1605d.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/源码/启动流程.md","filePath":"src/源码/启动流程.md","lastUpdated":1693381212000}'),l={name:"src/源码/启动流程.md"},p=e(`<h2 id="springboot源码构建" tabindex="-1">SpringBoot源码构建 <a class="header-anchor" href="#springboot源码构建" aria-label="Permalink to &quot;SpringBoot源码构建&quot;">​</a></h2><p><a href="https://github.com/spring-projects/spring-boot" target="_blank" rel="noreferrer">https://github.com/spring-projects/spring-boot</a> 2.2.13-RELEASE版本</p><h2 id="代码片段" tabindex="-1">代码片段 <a class="header-anchor" href="#代码片段" aria-label="Permalink to &quot;代码片段&quot;">​</a></h2><h3 id="获取堆栈信息" tabindex="-1">获取堆栈信息 <a class="header-anchor" href="#获取堆栈信息" aria-label="Permalink to &quot;获取堆栈信息&quot;">​</a></h3><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">推断main方法所在类</span></span>
<span class="line"><span style="color:#A6ACCD;">SpringApplication</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">deduceMainApplicationClass方法</span></span>
<span class="line"><span style="color:#C792EA;">StackTraceElement</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> stackTrace </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RuntimeException</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">getStackTrace</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">StackTraceElement</span><span style="color:#A6ACCD;"> stackTraceElement </span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> stackTrace</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">equals</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">stackTraceElement</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getMethodName</span><span style="color:#89DDFF;">()))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">					</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> Class</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forName</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">stackTraceElement</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getClassName</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">				</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="application-yml配置加载" tabindex="-1">application.yml配置加载 <a class="header-anchor" href="#application-yml配置加载" aria-label="Permalink to &quot;application.yml配置加载&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ConfigFileApplicationListener</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1、加载spring.factories文件，反射创建类</span></span>
<span class="line"><span style="color:#A6ACCD;">List&lt;PropertySourceLoader&gt; propertySourceLoaders = SpringFactoriesLoader.loadFactories(PropertySourceLoader.class, getClass().getClassLoader());</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2、配置文件处理</span></span>
<span class="line"><span style="color:#A6ACCD;">org.springframework.boot.env.PropertySourceLoader=\\</span></span>
<span class="line"><span style="color:#A6ACCD;">org.springframework.boot.env.PropertiesPropertySourceLoader,\\</span></span>
<span class="line"><span style="color:#A6ACCD;">org.springframework.boot.env.YamlPropertySourceLoader</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">3、默认配置文件搜索的路径</span></span>
<span class="line"><span style="color:#A6ACCD;">private static final String DEFAULT_SEARCH_LOCATIONS = &quot;classpath:/,classpath:/config/,file:./,file:./config/&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">也可以自己制定其他路径：spring.config.additional-location，spring.config.location</span></span>
<span class="line"><span style="color:#A6ACCD;">		private Set&lt;String&gt; getSearchLocations() {</span></span>
<span class="line"><span style="color:#A6ACCD;">			Set&lt;String&gt; locations = getSearchLocations(CONFIG_ADDITIONAL_LOCATION_PROPERTY);</span></span>
<span class="line"><span style="color:#A6ACCD;">			if (this.environment.containsProperty(CONFIG_LOCATION_PROPERTY)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">				locations.addAll(getSearchLocations(CONFIG_LOCATION_PROPERTY));</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">			else {</span></span>
<span class="line"><span style="color:#A6ACCD;">				locations.addAll(</span></span>
<span class="line"><span style="color:#A6ACCD;">						asResolvedSet(ConfigFileApplicationListener.this.searchLocations, DEFAULT_SEARCH_LOCATIONS));</span></span>
<span class="line"><span style="color:#A6ACCD;">			}</span></span>
<span class="line"><span style="color:#A6ACCD;">			return locations;</span></span>
<span class="line"><span style="color:#A6ACCD;">		}	</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">4、ClassPathResource获取文件</span></span>
<span class="line"><span style="color:#A6ACCD;">Resource resource = this.resourceLoader.getResource(location)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">5、获取内容</span></span>
<span class="line"><span style="color:#A6ACCD;">PropertiesPropertySourceLoader</span></span>
<span class="line"><span style="color:#A6ACCD;">YamlPropertySourceLoader</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">MutablePropertySources类</span></span>
<span class="line"><span style="color:#A6ACCD;">private final List&lt;PropertySource&lt;?&gt;&gt; propertySourceList = new CopyOnWriteArrayList&lt;&gt;();中保存配置信息，保存了一下五个类</span></span>
<span class="line"><span style="color:#A6ACCD;">ConfigurationPropertySourcesPropertySource {name=&#39;configurationProperties&#39;}</span></span>
<span class="line"><span style="color:#A6ACCD;">RandomValuePropertySource {name=&#39;random&#39;}，随机值的信息</span></span>
<span class="line"><span style="color:#A6ACCD;">OriginAwareSystemEnvironmentPropertySource {name=&#39;systemEnvironment&#39;}，操作系统环境变量</span></span>
<span class="line"><span style="color:#A6ACCD;">PropertiesPropertySource {name=&#39;systemProperties&#39;}，代码中System.setProperty()设置的属性</span></span>
<span class="line"><span style="color:#A6ACCD;">OriginTrackedMapPropertySource {name=&#39;applicationConfig: [classpath:/application.properties]&#39;}，应用配置</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">OriginTrackedPropertiesLoader类load方法，加载</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">PropertiesPropertySourceLoader加载</span></span>
<span class="line"><span style="color:#A6ACCD;">	private Map&lt;String, ?&gt; loadProperties(Resource resource) throws IOException {</span></span>
<span class="line"><span style="color:#A6ACCD;">		String filename = resource.getFilename();</span></span>
<span class="line"><span style="color:#A6ACCD;">		if (filename != null &amp;&amp; filename.endsWith(XML_FILE_EXTENSION)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			return (Map) PropertiesLoaderUtils.loadProperties(resource);</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		// 下面这一行加载配置</span></span>
<span class="line"><span style="color:#A6ACCD;">		return new OriginTrackedPropertiesLoader(resource).load();</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 获取到Resource，然后read一行一行读取，最后返回Map&lt;String, OriginTrackedValue&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	try (CharacterReader reader = new CharacterReader(this.resource)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	最后转为List&lt;PropertySource&lt;?&gt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		public List&lt;PropertySource&lt;?&gt;&gt; load(String name, Resource resource) throws IOException {</span></span>
<span class="line"><span style="color:#A6ACCD;">		Map&lt;String, ?&gt; properties = loadProperties(resource);</span></span>
<span class="line"><span style="color:#A6ACCD;">		if (properties.isEmpty()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			return Collections.emptyList();</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">		return Collections</span></span>
<span class="line"><span style="color:#A6ACCD;">				.singletonList(new OriginTrackedMapPropertySource(name, Collections.unmodifiableMap(properties), true));</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span></code></pre></div>`,7),t=[p];function o(r,c,i,A,C,y){return a(),n("div",null,t)}const u=s(l,[["render",o]]);export{d as __pageData,u as default};
