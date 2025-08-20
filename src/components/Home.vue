<script setup lang="ts"></script>

<template>
  <div class="container py-4">
    <!-- Header -->
    <header class="text-center mb-4">
      <h1 class="display-6 mb-1">Vue.js (วิว)</h1>
      <p class="text-muted mb-0">JavaScript progressive framework สำหรับสร้าง UI</p>
    </header>

    <div class="row g-3">
      <!-- ประเภท -->
      <div class="col-12 col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="h5 card-title">ประเภท</h2>
            <p class="card-text mb-0">
              JavaScript progressive framework สำหรับสร้าง UI
            </p>
          </div>
        </div>
      </div>

      <!-- เทคโนโลยีหลัก -->
      <div class="col-12 col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="h5 card-title">เทคโนโลยีหลัก</h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">JavaScript / TypeScript</li>
              <li class="list-group-item">HTML</li>
              <li class="list-group-item">CSS</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- สถาปัตยกรรม -->
      <div class="col-12 col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="h5 card-title">สถาปัตยกรรม</h2>
            <p class="card-text mb-0">
              Component‑based (แยกเป็นคอมโพเนนต์และนำกลับมาใช้ซ้ำได้)
            </p>
          </div>
        </div>
      </div>

      <!-- SFC -->
      <div class="col-12 col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="h5 card-title">ไฟล์คอมโพเนนต์ (SFC)</h2>
            <p class="card-text">
              รวมอยู่ในไฟล์ <code>.vue</code> เดียว ประกอบด้วย
              <code>&lt;template&gt;</code>, <code>&lt;script&gt;</code> (รองรับ <code>setup</code>) และ
              <code>&lt;style&gt;</code> (รองรับ <code>scoped</code>)
            </p>
          </div>
        </div>
      </div>

      <!-- จุดเด่น -->
      <div class="col-12 col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="h5 card-title">จุดเด่น</h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Syntax อ่านง่าย โครงสร้างเล็ก</li>
              <li class="list-group-item">เริ่มเร็วมากเมื่อใช้คู่กับ Vite / HMR</li>
              <li class="list-group-item">ยืดหยุ่นสูง</li>
              <li class="list-group-item">เรียนรู้ง่าย</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- เหมาะกับ -->
      <div class="col-12 col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="h5 card-title">เหมาะกับ</h2>
            <p class="card-text mb-0">
              โปรเจกต์ขนาดเล็ก–กลาง และสตาร์ทอัปที่ต้องการ iterate เร็ว
            </p>
          </div>
        </div>
      </div>

      <!-- เครื่องมือ/อีโคซิสเต็ม -->
      <div class="col-12">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="h5 card-title">เครื่องมือ / อีโคซิสเต็มที่นิยม</h2>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Vue Router</li>
              <li class="list-group-item">Pinia (state management)</li>
              <li class="list-group-item">Vite (dev / build)</li>
              <li class="list-group-item">Nuxt (SSR / SSG)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <p class="text-muted small mt-4">
      สรุปย่อ Vue.js • ปรับแต่ง / เพิ่มหัวข้อได้ตามต้องการ
    </p>
  </div>
</template>
