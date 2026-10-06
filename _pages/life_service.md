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
  <section class="content-section-card volunteer-section" aria-labelledby="volunteering-title">
    <p class="page-eyebrow">Community</p>
    <h2 id="volunteering-title">Volunteering</h2>
    <div class="volunteer-roles">
      <div>
        <h3>SUSTech Red Cross · Director, Organization Department</h3>
        <p>Completed 144.5 volunteer hours; led 10+ major events and 10+ first-aid outreach sessions for over 100 people each; taught 5+ first-aid training sessions.</p>
      </div>
      <div>
        <h3>Shenzhen Nanshan District Emergency Rescue Association · Instructor</h3>
        <p>Established certification frameworks for first-aid instructors and responders.</p>
      </div>
      <div>
        <h3>Campus First-Aid Responder</h3>
        <p>Responded to 20+ medical emergencies, including seizures, fractures, and trauma.</p>
      </div>
    </div>
    <div class="volunteer-gallery-intro">
      <h3>Volunteering in Action</h3>
      <p>Moments from first-aid training and community outreach.</p>
    </div>
    <div id="volunteer-photo-gallery">
      <div class="volunteer-gallery-fallback">
        <img src="{{ '/assets/img/volunteering-01.jpg' | relative_url }}" alt="A Red Cross volunteer assists a student during a first-aid exercise" loading="lazy">
      </div>
    </div>
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
