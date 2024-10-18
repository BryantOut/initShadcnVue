## 初始化项目

> 如果你打算启动一个新项目，你可能会发现使用 [create-vue](https://github.com/vuejs/create-vue) 这个脚手架工具更容易，它能创建一个基于 Vite 的项目，并包含加入 Vue Router 的选项：

```node
npm create vue@latest
```

## 引入组件库shadcn-vue

[官方网站](https://www.shadcn-vue.com/docs/introduction.html)

## icon组件库lucide-vue-next

[官方网站](https://lucide.dev/icons)

## 其他笔记

### npm的--save和--save-dev的区别

```node
npm i [包名] --save
简写: npm i [包名] -S
```

> 生产阶段的依赖，项目运行时的依赖，程序上线后仍然需要依赖。也就是项目上线运行还需要用到的功能。

```node
npm i [包名] --save-dev
简写: npm i [包名] -D
```

> ​	在开发过程中需要的依赖。也就是项目打包上线后就用不到了，在写项目时才需要。

### 升级 Vite 5 出现警告

[相关文档](https://blog.csdn.net/u013737132/article/details/135462327)

### 更优雅的处理表单数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form onsubmit="saveEvent(event)">
        <ul>
            <li>
                <input type="text" name="name" placeholder="请输入名字">
            </li>
            <li>
                <button type="submit">保存</button>
            </li>
        </ul>
    </form>

    <script>
        function saveEvent(e) {
            e.preventDefault() // 禁止默认行为
            const formData = new FormData(e.currentTarget) // 转换为formData对象
            const data = Object.fromEntries(formData)
            console.log(data)
        }
    </script>
</body>
</html>
```

## Zod

> Zod 是一个 TypeScript 优先的模式声明和验证库。我使用术语 "模式" 来广义地指任何数据类型，从简单的 `字符串` 到复杂的嵌套对象。

[官方网站](https://zod.dev/README_ZH?id=%e4%bb%80%e4%b9%88%e6%98%af-zod)

## vee-validate

> 使用 [VeeValidate](https://vee-validate.logaretm.com/v4/) 可以快速的进行 vue 项目的表单验证。

[后盾人相关文章](https://doc.houdunren.com/%E6%8F%92%E4%BB%B6%E6%89%A9%E5%B1%95/%E5%89%8D%E7%AB%AF%E6%89%A9%E5%B1%95/7%20vee-validate%E4%B8%8Eyup.html)

### shadcn-vue中的表单例子

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/toast'

import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { h } from 'vue'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
})
</script>

<template>
  <form class="w-2/3 space-y-6" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="username">
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input type="text" placeholder="shadcn" v-bind="componentField" />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit">
      Submit
    </Button>
  </form>
</template>
```

