---
layout: doc

editLink: true

---

# java

```
// 隐藏侧边栏
sidebar: false
// 隐藏导航栏
navbar: false
```

// 目录
[[toc]]
"bikini": "👙",

# 一级标题
## 二级标题
```java
public class User {
	private String name;
}

```

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::


<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>

