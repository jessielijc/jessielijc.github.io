---
layout: page
title: Life & Service
permalink: /life-service/
description: Volunteering, travel, and photography beyond research.
hide_title: true
page_class: life-service-page
nav: true
nav_order: 9
---

<section class="content-hero">
  <p class="page-eyebrow">Beyond Research</p>
  <h1>Life & Service</h1>
  <p>Outside the lab, I enjoy serving my community and discovering new places through travel and photography.</p>
</section>

<div class="life-service-overview">
  <section class="content-section-card">
    <p class="page-eyebrow">Community</p>
    <h2>Volunteering</h2>
    <p>With the SUSTech Red Cross, I support campus and community events and share practical first-aid skills as an AHA HeartSaver-certified volunteer.</p>
  </section>

  <section class="content-section-card">
    <p class="page-eyebrow">Hobbies</p>
    <h2>Travel & Photography</h2>
    <p>I love exploring new places, tasting local food, and photographing the moments that make each trip memorable.</p>
  </section>
</div>

<section class="content-section-card life-service-gallery" aria-labelledby="photo-journal-title">
  <div class="life-service-gallery-intro">
    <div>
      <p class="page-eyebrow">Photography</p>
      <h2 id="photo-journal-title">Through My Lens</h2>
    </div>
    <p>Moments from my travels.</p>
  </div>
  <div id="life-photo-carousel">
    <div class="photo-carousel-fallback">
      <img src="{{ '/assets/img/photography-01.jpg' | relative_url }}" alt="Riverfront skyline and boats" loading="lazy">
    </div>
  </div>
</section>

<script type="module" src="{{ '/assets/react/life-service.js' | relative_url | bust_file_cache }}"></script>
