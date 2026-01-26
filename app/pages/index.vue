<script setup lang="ts">
useSeoMeta({
  title: "ポートフォリオ｜HYEONGJU PARK",
  description:
    "フルスタックエンジニア。アイデアから本番運用まで、実際に動くプロダクトを作ります。",
  ogTitle: "HYEONGJU PARK｜Portfolio",
  ogDescription:
    "Full-stack engineer. Product-first. System thinker. Shipped real systems.",
});

const links = {
  github: "https://github.com/babydev-by03KOREA",
  email: "mailto:hyeongju1122@gmail.com",
};

type Project = {
  title: string
  subtitle: string
  bullets: string[]
  stack: string[]
  outcome: string
}

const projects: Project[] = [
  {
    title: "スマートファーム：リアルタイムセンサーデータ基盤",
    subtitle:
      "Modbus RTU/TCP センサー → 収集 → RabbitMQ → 集計 → PostgreSQL → API/ダッシュボード",
    bullets: [
      "ソケット/Modbus でセンサー値を安定収集（断線・リトライ前提）",
      "RabbitMQ でイベント駆動処理（Consumer で要約テーブル生成）",
      "日次/週次/月次の要約を先に作って高速表示（読み取り最適化）",
    ],
    stack: ["SpringBoot", "Python", "Modbus", "RabbitMQ", "MariaDB"],
    outcome: "実運用を想定した「収集→集計→表示」まで一気通貫で設計・実装",
  },
  {
    title: "波・天候データを用いた運航可否推定（予測サービス）",
    subtitle: "データ収集 → 特徴量 → 学習/推論 → Web UI まで製品化",
    bullets: [
      "外部データを収集し、推論APIとして提供",
      "“AIは判断支援、実行は人が決める”の設計で安全に運用",
      "SEO/検証（Fake Door）で需要を素早く確認",
    ],
    stack: ["SpringBoot", "XGBoost4J", "PostgreSQL", "Nuxt", "Vercel", "Jenkins"],
    outcome: "“モデルを作る”だけでなく “サービスとして届ける” を重視",
  },
  {
    title: "業務ドメイン設計（保険/医療請求系 Admin）",
    subtitle: "複雑なルールを壊さずに、状態・計算・承認フローを整理",
    bullets: [
      "Authorization / Visit / Estimate を分離し、計算の責務を明確化",
      "承認書と訪問の 1:N 関係、ステータス表示、検索/ダッシュボード要件を整理",
      "OCR（Textract）と人の承認フローで品質担保",
    ],
    stack: ["Django DRF", "PostgreSQL", "AWS", "React"],
    outcome: "仕様が複雑でも “モデルと責務” を先に決めて破綻しない設計に",
  },
];

const skillGroups = [
  {
    title: "Real-time & IoT",
    items: ["Modbus RTU/TCP", "MQTT", "RTSP", "Socket ingestion", "Time-series aggregation", "Edge-case handling"],
  },
  {
    title: "Messaging & Pipelines",
    items: ["RabbitMQ", "Event-driven consumers", "Summary tables", "Backpressure mindset"],
  },
  {
    title: "Backend Systems",
    items: ["Spring Boot (Java/Kotlin)", "nestJS / Express", "FastAPI / Django", "REST APIs", "Auth/JWT"],
  },
  {
    title: "Data & Shipping",
    items: ["PostgreSQL", "Caching strategy", "Docker", "Vercel deployment"],
  },
];
</script>

<template>
  <!-- light background, comfortable contrast -->
  <div class="bg-gray-50 text-gray-900">
    <UContainer class="space-y-20 py-12">
      <!-- Header -->
      <header class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="space-y-1">
          <p class="text-sm text-gray-500">HYEONGJU PARK</p>
          <h1 class="text-2xl sm:text-3xl font-semibold tracking-tight">
            フルスタックエンジニア（プロダクト志向）
          </h1>
          <p class="text-gray-700 max-w-2xl">
            アイデアから本番運用まで。実データ・実ユーザーを前提に、設計して作って回します。
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          <UButton :to="links.github" target="_blank" variant="soft" color="gray">
            GitHub
          </UButton>
          <UButton :to="links.email" variant="soft" color="gray">
            Email
          </UButton>
        </div>
      </header>

      <!-- Hero -->
      <section class="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div
          class="absolute inset-0 opacity-[0.03]"
          style="
            background-image: linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px);
            background-size: 56px 56px;
          "
        />
        <div class="relative p-7 sm:p-10 space-y-6">
          <UBadge variant="soft" color="gray" class="w-fit">
            Product-first · System thinker · Ship & Operate
          </UBadge>

          <h2 class="text-2xl sm:text-4xl font-semibold tracking-tight leading-tight">
            「作れる」だけじゃなく、<br class="hidden sm:block"/>
            「運用できる」システムを作ります。
          </h2>

          <p class="text-gray-700 max-w-3xl">
            リアルタイム/IoT、メッセージング基盤、複雑な業務ドメイン設計まで。
            “動く”だけでなく、障害や拡張を見据えた設計でプロダクトを前に進めます。
          </p>

          <div class="grid gap-3 sm:grid-cols-3">
            <UCard class="bg-white ring-1 ring-gray-200">
              <template #header>
                <p class="text-sm font-semibold">強み 1</p>
              </template>
              <p class="text-gray-700 text-sm">
                IoT/リアルタイムの収集・集計・表示を一気通貫で設計
              </p>
            </UCard>

            <UCard class="bg-white ring-1 ring-gray-200">
              <template #header>
                <p class="text-sm font-semibold">強み 2</p>
              </template>
              <p class="text-gray-700 text-sm">
                RabbitMQ 等のメッセージングでスケール可能な構成を作る
              </p>
            </UCard>

            <UCard class="bg-white ring-1 ring-gray-200">
              <template #header>
                <p class="text-sm font-semibold">強み 3</p>
              </template>
              <p class="text-gray-700 text-sm">
                複雑な業務ドメイン（保険/医療など）を壊さずにモデル化
              </p>
            </UCard>
          </div>

          <div class="flex flex-wrap gap-2 pt-2">
            <UButton to="#projects" size="lg">プロジェクトを見る</UButton>
            <UButton :to="links.email" variant="soft" color="gray" size="lg">連絡する</UButton>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section id="projects" class="space-y-6 scroll-mt-24">
        <div>
          <h2 class="text-xl sm:text-2xl font-semibold tracking-tight">Selected Works</h2>
          <p class="text-gray-700 mt-1">多すぎず、強いものだけ。</p>
        </div>

        <div class="grid gap-4 lg:grid-cols-3">
          <UCard v-for="p in projects" :key="p.title" class="bg-white ring-1 ring-gray-200 shadow-sm">
            <template #header>
              <div class="space-y-2">
                <h3 class="font-semibold tracking-tight">{{ p.title }}</h3>
                <p class="text-sm text-gray-700">{{ p.subtitle }}</p>
              </div>
            </template>

            <div class="space-y-4">
              <ul class="list-disc pl-5 space-y-1 text-sm text-gray-800">
                <li v-for="b in p.bullets" :key="b">{{ b }}</li>
              </ul>

              <div class="flex flex-wrap gap-2">
                <UBadge
                  v-for="s in p.stack"
                  :key="s"
                  size="xs"
                  variant="soft"
                  color="gray"
                >
                  {{ s }}
                </UBadge>
              </div>

              <div class="rounded-lg border border-gray-200 bg-gray-50 p-3">
                <p class="text-xs font-semibold text-gray-800">Outcome</p>
                <p class="text-sm text-gray-800 mt-1">{{ p.outcome }}</p>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Skills -->
      <section id="skills" class="space-y-6 scroll-mt-24">
        <div>
          <h2 class="text-xl sm:text-2xl font-semibold tracking-tight">Skills</h2>
          <p class="text-gray-700 mt-1">ツール列挙ではなく、問題領域で整理。</p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <UCard
            v-for="g in skillGroups"
            :key="g.title"
            class="bg-white ring-1 ring-gray-200 shadow-sm"
          >
            <template #header>
              <h3 class="font-semibold">{{ g.title }}</h3>
            </template>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="it in g.items"
                :key="it"
                variant="soft"
                color="gray"
                size="sm"
              >
                {{ it }}
              </UBadge>
            </div>
          </UCard>
        </div>
      </section>

      <!-- About -->
      <section class="space-y-4">
        <UCard class="bg-white ring-1 ring-gray-200 shadow-sm">
          <template #header>
            <h2 class="text-xl font-semibold tracking-tight">About</h2>
          </template>

          <div class="space-y-3 text-gray-800">
            <p>
              実装だけでなく、要件整理・ドメイン設計・運用を含めて「最後まで責任を持つ」開発スタイルです。
              スピード重視のMVPから、拡張可能な設計まで両方対応します。
            </p>

            <div class="flex flex-wrap gap-2">
              <UBadge variant="soft" color="gray">Flutter</UBadge>
              <UBadge variant="soft" color="gray">Spring(Boot)</UBadge>
              <UBadge variant="soft" color="gray">nestJS/Express</UBadge>
              <UBadge variant="soft" color="gray">Java/Kotlin</UBadge>
              <UBadge variant="soft" color="gray">TypeScript/JavaScript</UBadge>
              <UBadge variant="soft" color="gray">Python</UBadge>
              <UBadge variant="soft" color="gray">FastAPI/Django</UBadge>
              <UBadge variant="soft" color="gray">Nuxt/Vue</UBadge>
              <UBadge variant="soft" color="gray">Next/React/React Native</UBadge>
              <UBadge variant="soft" color="gray">NoSQL</UBadge>
              <UBadge variant="soft" color="gray">RDBMS</UBadge>
              <UBadge variant="soft" color="gray">Message Queue</UBadge>
              <UBadge variant="soft" color="gray">Machine Learning</UBadge>
            </div>
          </div>
        </UCard>
      </section>

      <!-- Contact -->
      <section id="contact" class="space-y-4 scroll-mt-24">
        <UCard class="bg-white ring-1 ring-gray-200 shadow-sm">
          <template #header>
            <h2 class="text-xl font-semibold tracking-tight">Contact</h2>
          </template>

          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="space-y-1">
              <p class="font-medium">HYEONGJU PARK</p>
              <p class="text-sm text-gray-700">Full-stack Engineer</p>
              <p class="text-sm text-gray-700">hyeongju1122@gmail.com</p>
            </div>

            <div class="flex flex-wrap gap-2">
              <UButton :to="links.email">Email</UButton>
              <UButton :to="links.github" target="_blank" variant="soft" color="gray">
                GitHub
              </UButton>
              <UButton :to="links.resume" target="_blank" variant="soft" color="gray">
                Resume
              </UButton>
            </div>
          </div>
        </UCard>

        <p class="text-xs text-gray-500">
          © {{ new Date().getFullYear() }} HYEONGJU PARK · Built with Nuxt UI · Deployed on Vercel
        </p>
      </section>
    </UContainer>
  </div>
</template>
<style>
body {
  font-family: 'Noto Sans JP', sans-serif;
}

html, body {
  overflow-x: hidden;
}

* {
  min-width: 0;
}
</style>
