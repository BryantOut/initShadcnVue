<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { h, ref } from "vue";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast/use-toast";

const { toast } = useToast();

const CodeIsNone = ref(true);

const formSchema = toTypedSchema(
  z.object({
    LoginName: z.string().min(2).max(50),
    Password: z.string().min(2).max(50),
    Code: CodeIsNone.value
      ? z.string().length(4, { message: "验证码为4位小数" })
      : z.string().optional(),
  })
);

const { values, handleSubmit } = useForm({
  validationSchema: formSchema,
  initialValues: {
    LoginName: "admin",
    Password: undefined,
    Code: undefined,
  },
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
  toast({
    title: "You submitted the following values:",
    description: h(
      "pre",
      { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" },
      h("code", { class: "text-white" }, JSON.stringify(values, null, 2))
    ),
  });
});

// const CodeIsNone = ref(false);

// const searchForm = {
//   LoginName: undefined, // 登录名
//   Password: undefined, // 密码
//   Code: undefined, // 验证码
//   CodeIsNone: false, // 验证码是隐藏状态
// };
// const formData = ref({ ...searchForm });
</script>

<template>
  <div class="page">
    <Card class="w-full max-w-sm">
      <form @submit="onSubmit">
        <CardHeader>
          <CardTitle class="text-2xl"> Login </CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent class="grid gap-4">
          <div class="grid gap-2">
            <FormField v-slot="{ componentField }" name="LoginName">
              <FormItem>
                <FormLabel>LoginName</FormLabel>
                <FormControl>
                  <Input
                    v-model="values.LoginName"
                    type="text"
                    placeholder="LoginName"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="grid gap-2">
            <FormField v-slot="{ componentField }" name="Password">
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    v-model="values.Password"
                    type="text"
                    placeholder="Password"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="grid gap-2">
            <FormField v-slot="{ componentField }" name="Code">
              <FormItem>
                <FormLabel>Code</FormLabel>
                <FormControl>
                  <div class="flex w-full max-w-sm items-center gap-1.5">
                    <Input
                      v-model="values.Code"
                      type="text"
                      placeholder="Code"
                      v-bind="componentField"
                    />
                    <img
                      src="data:image/gif;base64,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"
                      alt="Image"
                      class="object-cover h-full"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" class="w-full"> Submit </Button>
        </CardFooter>
      </form>
    </Card>
  </div>
</template>

<style lang="less" scoped>
.page {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
