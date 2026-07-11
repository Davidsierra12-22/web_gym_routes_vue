<template>
  <q-page class="exercise-page">
    <div class="page-header">
      <div class="page-actions">
        <q-btn flat dense color="orange-4" icon="arrow_back" label="Volver" class="back-btn" @click="goBack" />
        <q-btn flat dense color="orange-4" icon="home" label="Inicio" class="back-btn" @click="goHome" />
      </div>
      <div>
        <p class="eyebrow">Rutina guiada</p>
        <h1>{{ title }}</h1>
        <p class="page-description">{{ description }}</p>
      </div>
    </div>

    <div class="exercise-grid">
      <q-card v-for="item in exercises" :key="item.name" class="exercise-card" flat bordered>
        <q-card-section class="exercise-card-top">
          <div>
            <div class="exercise-name">{{ item.name }}</div>
            <div class="exercise-target">{{ item.target }}</div>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section class="exercise-details">
          <div class="exercise-block">
            <h3>Descripción</h3>
            <p>{{ item.description }}</p>
          </div>

          <div class="exercise-block">
            <h3>Técnica</h3>
            <p>{{ item.technique }}</p>
          </div>

          <div class="exercise-block">
            <h3>Video</h3>
            <div class="video-placeholder">
              <template v-if="getVideoUrl(item)">
                <iframe
                  v-if="isYouTube(getVideoUrl(item))"
                  :src="toYouTubeEmbed(getVideoUrl(item))"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>

                <video v-else controls :src="getVideoUrl(item)"></video>
              </template>
              <template v-else>
                {{ item.videoLabel }}
              </template>
              <div v-if="isYouTube(getVideoUrl(item))" class="video-fallback">
                <a :href="toYouTubeWatch(getVideoUrl(item))" target="_blank" rel="noopener noreferrer">Abrir en YouTube</a>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ExerciseSection',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    exercises: {
      type: Array,
      required: true
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    goHome() {
      this.$router.push('/')
    },
    isYouTube(url) {
      return typeof url === 'string' && /(?:youtube\.com|youtu\.be)/i.test(url)
    },
    getYouTubeId(url) {
      try {
        const u = new URL(url)
        // youtu.be short link
        if (u.hostname.includes('youtu.be')) {
          return u.pathname.slice(1).split('?')[0]
        }
        // /shorts/VIDEOID
        const shortsMatch = u.pathname.match(/\/shorts\/(.+?)(?:\/|$)/)
        if (shortsMatch) return shortsMatch[1].split('?')[0]
        // watch?v=VIDEOID
        const v = u.searchParams.get('v')
        if (v) return v
        // /embed/VIDEOID or last path segment
        const embedMatch = u.pathname.match(/\/embed\/(.+?)(?:\/|$)/)
        if (embedMatch) return embedMatch[1]
        const parts = u.pathname.split('/').filter(Boolean)
        return parts.length ? parts[parts.length - 1] : null
      } catch (e) {
        return null
      }
    },
    toYouTubeEmbed(url) {
      const id = this.getYouTubeId(url)
      if (!id) return url
      return `https://www.youtube.com/embed/${id}?rel=0`
    },
    toYouTubeWatch(url) {
      const id = this.getYouTubeId(url)
      if (!id) return url
      return `https://www.youtube.com/watch?v=${id}`
    },
    isUrl(str) {
      return typeof str === 'string' && /^https?:\/\//i.test(str)
    },
    getVideoUrl(item) {
      if (!item) return null
      if (this.isUrl(item.videoUrl)) return item.videoUrl
      if (this.isUrl(item.videoLabel)) return item.videoLabel
      return null
    }
  }
}
</script>

<style scoped>
.exercise-page {
  padding: 24px;
  min-height: calc(100vh - 80px);
  color: #f5f7fb;
}

.page-header {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 24px;
  margin-bottom: 22px;
}

.eyebrow {
  margin: 0 0 10px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  color: #ffb347;
}

.page-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
}

.back-btn {
  align-self: flex-start;
}

.page-header h1 {
  margin: 0;
  font-size: 2rem;
  color: #ffffff;
}

.page-description {
  margin: 12px 0 0;
  color: #c8cde0;
  line-height: 1.7;
  max-width: 780px;
}

.exercise-grid {
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr;
}

.exercise-card {
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
}

.exercise-card-top {
  background: linear-gradient(135deg, rgba(255, 151, 0, 0.18), rgba(255, 255, 255, 0.06));
}

.exercise-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
}

.exercise-target {
  margin-top: 6px;
  color: #d0d4de;
}

.exercise-details {
  padding-top: 20px;
}

.exercise-block {
  margin-bottom: 22px;
}

.exercise-block h3 {
  margin: 0 0 10px;
  color: #f5f7fb;
  font-size: 1rem;
}

.exercise-block p {
  margin: 0;
  color: #d1d7e3;
  line-height: 1.75;
}

.video-placeholder {
  min-height: 0;
  aspect-ratio: 16 / 9;
  background: rgba(255, 255, 255, 0.06);
  border: 1px dashed rgba(255, 255, 255, 0.14);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c7cbd6;
  text-align: center;
  padding: 16px;
}

.video-placeholder iframe,
.video-placeholder video {
  width: 100%;
  height: 100%;
  border-radius: 16px;
}
</style>
