<script setup lang="ts">
import { onMounted, ref } from 'vue'

const githubDownloads = ref<number | null>(null)
const sourceforgeDownloads = ref<number | null>(null)
const loading = ref(true)
const error = ref(false)

async function fetchGithubDownloads() {
  try {
    const res = await fetch('https://api.github.com/repos/Fajar-RahmadJaya/KeyTik/releases')
    const releases = await res.json()
    if (Array.isArray(releases)) {
      githubDownloads.value = releases
        .flatMap(r => r.assets)
        .reduce((sum, asset) => sum + (asset.download_count || 0), 0)
    }
  }
  catch {
    githubDownloads.value = null
  }
}

async function fetchSourceforgeDownloads() {
  try {
    const startDate = '2020-01-01'
    const endDate = new Date().toISOString().split('T')[0]

    const url = `https://sourceforge.net/projects/keytik/files/stats/json?start_date=${startDate}&end_date=${endDate}`
    const res = await fetch(url)
    const stats = await res.json()

    sourceforgeDownloads.value = stats.total || 0
  }
  catch {
    sourceforgeDownloads.value = null
  }
}

onMounted(async () => {
  loading.value = true
  await Promise.all([fetchGithubDownloads(), fetchSourceforgeDownloads()])
  loading.value = false
  error.value = githubDownloads.value === null && sourceforgeDownloads.value === null
})

function formatNumber(n: number | null) {
  if (n === null)
    return 'N/A'
  if (n < 1000)
    return n.toString()
  if (n < 1000000)
    return `${(n / 1000).toFixed(1)}K`
  return `${(n / 1000000).toFixed(1)}M`
}
</script>

<template>
  <div class="download-stats-card">
    <h2 class="stats-title">
      Total Downloads
    </h2>

    <div v-if="loading" class="stats-loading">
      <div class="spinner" />
    </div>

    <div v-else-if="error" class="stats-error">
      Unable to load download statistics
    </div>

    <div v-else class="stats-content">
      <div class="stats-number">
        {{ formatNumber((githubDownloads || 0) + (sourceforgeDownloads || 0)) }}
      </div>

      <div class="stats-breakdown">
        <div class="stats-source">
          <a href="https://tooomm.github.io/github-release-stats/?username=Fajar-RahmadJaya&repository=KeyTik" target="_blank" rel="noopener" class="source-link">
            <svg viewBox="0 0 24 24" class="source-icon"><path fill="currentColor" d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" /></svg>
            GitHub <span class="source-count">{{ formatNumber(githubDownloads) }}</span>
          </a>
        </div>

        <div class="stats-source">
          <a href="https://sourceforge.net/projects/keytik/files/stats/timeline" target="_blank" rel="noopener" class="source-link">
            <svg viewBox="0 0 32 32" class="source-icon"><path fill="currentColor" d="M15.292 8.768c-0.148 0.009-0.264 0.131-0.264 0.28 0 0.006 0 0.012 0.001 0.019l-0-0.001c0.18 2.771-3.302 3.453-3.302 7.805v0.029c-0.002 0.047-0.003 0.102-0.003 0.158 0 2.506 1.984 4.549 4.468 4.643l0.009 0c2.491-0.094 4.474-2.136 4.474-4.641 0-0.056-0.001-0.112-0.003-0.168l0 0.008v-0.029c-0.045-1.213-0.384-2.338-0.948-3.318l0.018 0.035c-0.09-0.17-0.362-0.109-0.332 0.051 0.84 3.742-1.269 6.062-1.269 3.18 0-4.912-1.742-7.143-2.663-7.984-0.046-0.043-0.108-0.069-0.176-0.069-0.003 0-0.007 0-0.010 0h0.001zM19.161 4.824c-0.118 0.003-0.224 0.053-0.3 0.132l-1.74 1.74c-0.079 0.076-0.128 0.182-0.128 0.3s0.049 0.224 0.127 0.3l0 0 8.962 8.974c0.105 0.105 0.171 0.25 0.171 0.41s-0.065 0.305-0.171 0.41l-11.345 11.345c-0.077 0.078-0.124 0.185-0.124 0.303 0 0.061 0.013 0.119 0.035 0.171l-0.001-0.003c0.065 0.153 0.214 0.259 0.388 0.259 0.001 0 0.002 0 0.003 0h-0v-0.010h3.461c0.002 0 0.003 0 0.005 0 0.115 0 0.219-0.046 0.295-0.12l12.067-12.064c0.080-0.072 0.129-0.176 0.129-0.292 0-0.003-0-0.006-0-0.009v0c-0.002-0.118-0.051-0.224-0.129-0.3l-11.406-11.415c-0.073-0.081-0.178-0.132-0.295-0.132-0.002 0-0.003 0-0.005 0h0zM13.498 2.835c-0.118 0.002-0.224 0.051-0.3 0.129l-0 0-12.067 12.055c-0.079 0.076-0.128 0.182-0.128 0.3s0.049 0.224 0.127 0.3l0 0 11.437 11.415c0.073 0.081 0.178 0.132 0.295 0.132 0.002 0 0.003 0 0.005-0h-0c0.117-0.003 0.222-0.053 0.298-0.132l0-0 1.711-1.73c0.079-0.076 0.127-0.182 0.127-0.3s-0.049-0.224-0.127-0.3l-8.963-8.965c-0.107-0.106-0.173-0.253-0.173-0.415s0.066-0.309 0.173-0.415l11.345-11.345c0.077-0.078 0.124-0.185 0.124-0.303 0-0.061-0.013-0.118-0.035-0.171l0.001 0.003c-0.065-0.153-0.214-0.259-0.388-0.259-0.001 0-0.002 0-0.003 0h0z" /></svg>
            SourceForge <span class="source-count">{{ formatNumber(sourceforgeDownloads) }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.download-stats-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--vp-shadow-2);
  width: 100%;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid var(--vp-c-bg-soft);
  overflow: hidden;
  position: relative;
}

.stats-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.75rem;
  color: var(--vp-c-text-1);
  border: none;
  padding: 0;
  position: relative;
  background: none;
  text-align: center;
}

.stats-title::before,
.stats-title::after {
  display: none !important;
  content: none !important;
  border: none !important;
  margin: 0 !important;
  padding: 0 !important;
  height: 0 !important;
  width: 0 !important;
  background: none !important;
}

.stats-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.spinner {
  width: 30px;
  height: 30px;
  border: 2px solid rgba(128, 128, 128, 0.2);
  border-radius: 50%;
  border-top-color: var(--vp-c-brand-1);
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.stats-error {
  color: var(--vp-c-danger);
  padding: 2rem 0;
  font-size: 0.9rem;
}

.stats-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stats-number {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.stats-breakdown {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.stats-source {
  position: relative;
}

.source-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0.75rem;
  text-decoration: none;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 6px;
  transition: background-color 0.2s, color 0.2s;
  background-color: var(--vp-c-bg);
}

.source-link:hover {
  background-color: var(--vp-button-alt-bg);
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.source-icon {
  width: 16px;
  height: 16px;
  margin-right: 0.5rem;
}

.source-count {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1, #fff);
}
</style>
