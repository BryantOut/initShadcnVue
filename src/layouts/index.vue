<script setup lang="ts">
import { CircleUser, Package2 } from "lucide-vue-next";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import mainPage from "@/router/modules/mainPage";

// 提取每一项的 children，并更新 path
const newChildren = mainPage.flatMap((route) => {
  if (route.children) {
    return route.children.map((child) => ({
      ...child,
      path: `${route.path}/${child.path}`, // 构建新的 path
    }));
  }
  return [];
});

const route = useRoute();

const activeRoutePath = computed(() => {
  return route.path;
});

onMounted(() => {
  // console.log(activePathName);
});
</script>

<template>
  <div
    class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"
  >
    <div class="hidden border-r bg-muted/40 md:block">
      <div class="flex h-full max-h-screen flex-col gap-2">
        <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <a href="/" class="flex items-center gap-2 font-semibold">
            <Package2 class="h-6 w-6" />
            <span class="">分销下单工具</span>
          </a>
        </div>
        <div class="flex-1">
          <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
            <template v-for="(item, index) in newChildren" :key="index">
              <RouterLink :to="item.path">
                <div
                  :class="{ 'bg-muted': activeRoutePath === item.path }"
                  class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <component :is="item.meta.icon" class="h-4 w-4"></component>
                  {{ item.meta.title }}
                </div>
              </RouterLink>
            </template>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <header
        class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6"
      >
        <div class="w-full flex-1"></div>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="secondary" size="icon" class="rounded-full">
              <CircleUser class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <RouterView></RouterView>
      </main>
    </div>
  </div>
</template>
