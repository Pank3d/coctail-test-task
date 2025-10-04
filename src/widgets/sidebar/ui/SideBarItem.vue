<script lang="ts" setup>
import { Link } from "@/shared/ui/link";

interface SideBarItemProps {
  path: string;
  title: string;
  icon?: string;
}

defineProps<SideBarItemProps>();
</script>

<template>
  <Link :to="path" :text="title" :icon="icon" class="sidebar-item" />
</template>

<style lang="scss" scoped>
.sidebar-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  text-decoration: none;
  color: #64748b;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover {
    background-color: #f1f5f9;
    color: #334155;
  }

  &.is-active {
    background-color: #e0e7ff;
    color: #4f46e5;
    font-weight: 600;
  }

  &__icon {
    font-size: 1.25rem;
    line-height: 1;
  }

  &__title {
    font-size: 0.875rem;
    color: #334155;
  }
}
</style>
