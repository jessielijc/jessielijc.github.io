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

<section class="content-hero life-service-hero">
  <div>
    <p class="page-eyebrow">Beyond Research</p>
    <h1>Life & Service</h1>
    <p>Outside the lab, I enjoy serving my community and discovering new places through travel and photography.</p>
  </div>
  <nav class="life-service-quick-links" aria-label="Explore Life and Service">
    <a href="#volunteering-title"><span>01</span> Volunteering <span aria-hidden="true">↗</span></a>
    <a href="#photo-journal-title"><span>02</span> Photography <span aria-hidden="true">↗</span></a>
  </nav>
</section>

<section class="content-section-card volunteer-section" aria-labelledby="volunteering-title">
  <p class="page-eyebrow">Community</p>
  <h2 id="volunteering-title">Volunteering</h2>
  <div class="volunteer-roles">
    <div class="volunteer-role-featured">
      <h3>SUSTech Red Cross · Director, Organization Department</h3>
      <p>Led first-aid outreach, training, and large-scale events across campus.</p>
      <div class="volunteer-stats" aria-label="Volunteer service highlights">
        <div><strong>144.5 h</strong><span>Volunteer service</span></div>
        <div><strong>10+</strong><span>Major events</span></div>
        <div><strong>10+</strong><span>Outreach sessions · 100+ people each</span></div>
        <div><strong>5+</strong><span>Trainings taught</span></div>
      </div>
    </div>
    <div class="volunteer-role-supporting">
      <div>
        <h3>Shenzhen Nanshan District Emergency Rescue Association · Instructor</h3>
        <p>Established certification frameworks for first-aid instructors and responders.</p>
      </div>
      <div>
        <h3>Campus First-Aid Responder</h3>
        <p>Responded to 20+ medical emergencies, including seizures, fractures, and trauma.</p>
      </div>
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

<section class="content-section-card life-service-gallery" aria-labelledby="photo-journal-title">
  <div class="life-service-gallery-intro">
    <div>
      <p class="page-eyebrow">Hobbies</p>
      <h2 id="photo-journal-title">Travel & Photography</h2>
      <p>I love exploring new places, tasting local food, and photographing the moments that make each trip memorable.</p>
    </div>
    <span class="life-service-photo-count">19 photographs</span>
  </div>
  <div class="life-service-gallery-heading">
    <h3>Through My Lens</h3>
    <p>Moments from my travels.</p>
  </div>
  <div id="life-photo-carousel">
    <div class="photo-carousel-fallback">
      <img src="{{ '/assets/img/photography-08.jpg' | relative_url }}" alt="People on a beach at sunset" loading="lazy">
    </div>
  </div>
</section>

<script type="module" src="{{ '/assets/react/life-service.js' | relative_url | bust_file_cache }}"></script>
