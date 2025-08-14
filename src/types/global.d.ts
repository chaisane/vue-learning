import 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $appName: string
  }
}
