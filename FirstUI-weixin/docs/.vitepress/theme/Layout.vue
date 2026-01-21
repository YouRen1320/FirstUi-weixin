
<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { computed } from 'vue'

const { Layout } = DefaultTheme
const route = useRoute()

// Show phone simulator only on component pages
const showPhone = computed(() => {
  return route.path.includes('/components/')
})
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      <div v-if="showPhone" class="mobile-preview-wrapper">
        <div class="mobile-preview-container">
          <div class="mobile-preview-tips">
            <p>微信扫码预览</p>
            <p>体验组件交互效果</p>
          </div>
          <div class="mobile-preview-qrcode">
            <img src="/qrcode.jpg" alt="Scan to Preview" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.mobile-preview-wrapper {
  margin-bottom: 20px;
}
/* Override fixed positioning for aside slot integration if we want it to flow with scroll, 
   BUT standard is fixed. The style.css defines .mobile-preview-container as fixed. */
</style>
