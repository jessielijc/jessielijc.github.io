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

<section class="life-hero" aria-labelledby="life-title">
  <img class="life-hero-image" src="{{ '/assets/img/photography-08.jpg' | relative_url }}" alt="People enjoying the beach at sunset" fetchpriority="high">
  <div class="life-hero-content">
    <p class="life-kicker">Beyond the lab <span aria-hidden="true">✳</span> Jiacan Li</p>
    <h1 id="life-title">Life <em>&</em><br>Service<span class="life-title-dot">.</span></h1>
    <p class="life-hero-intro">I make time for the people around me—and for the places that make me pause.</p>
  </div>
  <nav class="life-chapter-nav" aria-label="Explore this page">
    <a href="#volunteering-title"><span>01 / SERVICE</span> Volunteering <span aria-hidden="true">↘</span></a>
    <a href="#photo-journal-title"><span>02 / PLACES</span> Travel & Photography <span aria-hidden="true">↘</span></a>
  </nav>
  <span class="life-hero-side-note" aria-hidden="true">SCROLL TO EXPLORE · 2026</span>
</section>

<section class="life-chapter life-service-chapter" aria-labelledby="volunteering-title">
  <header class="life-chapter-header" data-life-reveal>
    <p class="life-kicker">01 <span aria-hidden="true">/</span> SERVICE</p>
    <h2 id="volunteering-title">Showing up<br><em>for others.</em></h2>
    <p>First aid is a practical way to care for my community. I teach, organize, and respond when help is needed.</p>
  </header>

  <div class="life-service-feature" data-life-reveal>
    <figure class="life-service-feature-photo">
      <img src="{{ '/assets/img/volunteering-02.jpg' | relative_url }}" alt="SUSTech Red Cross volunteers beside their campus response tent" loading="lazy">
      <figcaption>With the SUSTech Red Cross</figcaption>
    </figure>
    <div class="life-service-feature-copy">
      <p class="life-overline">SUSTech Red Cross · Organization Department</p>
      <h3>From the classroom<br>to the field.</h3>
      <p>As director, I led first-aid outreach, training, and campus events.</p>
      <div class="life-impact" aria-label="Volunteer service highlights">
        <div><strong>144.5</strong><span>volunteer hours</span></div>
        <div><strong>10+</strong><span>major events</span></div>
        <div><strong>10+</strong><span>outreach sessions for 100+ people each</span></div>
        <div><strong>5+</strong><span>training sessions taught</span></div>
      </div>
    </div>
  </div>

  <div class="life-service-more" data-life-reveal>
    <article>
      <span class="life-service-more-index">01 / TEACH</span>
      <h3>Shenzhen Nanshan District Emergency Rescue Association</h3>
      <p>As an instructor, I helped establish certification frameworks for first-aid instructors and responders.</p>
    </article>
    <article>
      <span class="life-service-more-index">02 / RESPOND</span>
      <h3>Campus First-Aid Responder</h3>
      <p>I responded to 20+ medical emergencies, including seizures, fractures, and trauma.</p>
    </article>
  </div>

  <div class="life-service-gallery-lead" data-life-reveal>
    <div>
      <p class="life-kicker">FIELD NOTES / 01—15</p>
      <h3>Moments in action</h3>
    </div>
    <p>Turn the gallery to see training, outreach, and response work.</p>
  </div>
  <div id="volunteer-photo-gallery">
    <div class="volunteer-gallery-fallback">
      <img src="{{ '/assets/img/volunteering-02.jpg' | relative_url }}" alt="SUSTech Red Cross volunteers beside their campus response tent" loading="lazy">
    </div>
  </div>
</section>

<section class="life-chapter life-photography-chapter" aria-labelledby="photo-journal-title">
  <header class="life-photo-header" data-life-reveal>
    <p class="life-kicker">02 <span aria-hidden="true">/</span> PLACES</p>
    <h2 id="photo-journal-title">A little more<br><em>of the world.</em></h2>
    <p>I love traveling, discovering local food, and bringing home photographs of the moments in between.</p>
  </header>
  <div class="life-photo-gallery-lead" data-life-reveal>
    <span>THROUGH MY LENS</span>
    <span>19 FRAMES · DRAG OR EXPLORE BELOW</span>
  </div>
  <div id="life-photo-carousel">
    <div class="photo-carousel-fallback">
      <img src="{{ '/assets/img/photography-08.jpg' | relative_url }}" alt="People enjoying the beach at sunset" loading="lazy">
    </div>
  </div>
</section>

<script type="module" src="{{ '/assets/react/life-service.js' | relative_url | bust_file_cache }}"></script>
