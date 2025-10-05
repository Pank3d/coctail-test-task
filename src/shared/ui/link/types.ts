import type { RouteLocationRaw, RouterLinkProps } from 'vue-router'

export interface ILinkProps extends Omit<RouterLinkProps, 'to'> {
  to: RouteLocationRaw
  text?: string
  variant?: 'primary' | 'secondary' | 'text' | 'button'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  underline?: boolean
}
