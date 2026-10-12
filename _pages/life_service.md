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
  <div class="life-service-hero-copy">
    <p class="page-eyebrow">Beyond Research</p>
    <h1>Life & Service</h1>
    <p>Outside the lab, I enjoy serving my community and discovering new places through travel and photography.</p>
    <nav class="life-service-quick-links" aria-label="Explore Life and Service">
      <a href="#volunteering-title"><span>01</span> Volunteering <span aria-hidden="true">↗</span></a>
      <a href="#photo-journal-title"><span>02</span> Photography <span aria-hidden="true">↗</span></a>
    </nav>
  </div>
  <div class="life-service-hero-art" aria-label="A glimpse of my travels and volunteer work">
    <figure class="life-service-hero-photo life-service-hero-photo--travel">
      <img src="{{ '/assets/img/photography-08.jpg' | relative_url }}" alt="People on a beach at sunset" fetchpriority="high">
      <figcaption>Through my lens <span>↗</span></figcaption>
    </figure>
    <figure class="life-service-hero-photo life-service-hero-photo--service">
      <img src="{{ '/assets/img/volunteering-02.jpg' | relative_url }}" alt="SUSTech Red Cross volunteers beside their response tent" loading="lazy">
      <figcaption>In the community</figcaption>
    </figure>
    <span class="life-service-hero-spark" aria-hidden="true">✳</span>
  </div>
</section>

<section class="content-section-card volunteer-section" aria-labelledby="volunteering-title">
  <div class="life-service-section-heading">
    <div>
      <p class="page-eyebrow">Community</p>
      <h2 id="volunteering-title">Volunteering</h2>
    </div>
    <span aria-hidden="true">01 / Give back</span>
  </div>
  <div class="volunteer-roles">
    <div class="volunteer-role-featured">
      <div class="volunteer-featured-copy">
        <span class="life-service-role-number" aria-hidden="true">01 / Lead</span>
        <h3>SUSTech Red Cross · Director, Organization Department</h3>
        <p>Led first-aid outreach, training, and large-scale events across campus.</p>
      </div>
      <div class="volunteer-stats" aria-label="Volunteer service highlights">
        <div><strong>144.5 h</strong><span>Volunteer service</span></div>
        <div><strong>10+</strong><span>Major events</span></div>
        <div><strong>10+</strong><span>Outreach sessions · 100+ people each</span></div>
        <div><strong>5+</strong><span>Trainings taught</span></div>
      </div>
    </div>
    <div class="volunteer-role-supporting">
      <div>
        <span class="life-service-role-number" aria-hidden="true">02 / Teach</span>
        <h3>Shenzhen Nanshan District Emergency Rescue Association · Instructor</h3>
        <p>Established certification frameworks for first-aid instructors and responders.</p>
      </div>
      <div>
        <span class="life-service-role-number" aria-hidden="true">03 / Respond</span>
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
      <img src="{{ '/assets/img/volunteering-02.jpg' | relative_url }}" alt="Student Red Cross volunteers pose beside their campus response tent" loading="lazy">
    </div>
  </div>
</section>

<section class="content-section-card life-service-gallery" aria-labelledby="photo-journal-title">
  <div class="life-service-gallery-intro">
    <div>
      <p class="page-eyebrow">Hobbies</p>
      <h2 id="photo-journal-title">Travel & Photography</h2>
    </div>
    <div class="life-service-gallery-note">
      <p>I love exploring new places, tasting local food, and photographing the moments that make each trip memorable.</p>
      <span class="life-service-photo-count">19 photographs · collected along the way</span>
    </div>
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
