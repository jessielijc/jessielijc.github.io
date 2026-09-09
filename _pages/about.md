---
layout: about
title: About
permalink: /
subtitle:

news: false
selected_papers: false
social: false
---

<section class="about-hero">
  <div class="about-hero-copy">
    <h2 class="about-intro-title">Hi, I am Jessie</h2>
    <p>
      I am an undergraduate student majoring in Robotics Engineering at the
      <a href="https://www.sustech.edu.cn/en/" target="_blank" rel="external noopener">Southern University of Science and Technology (SUSTech)</a>. I work with Prof. Chenglong Fu in the
      <a href="https://www.harlab.site/" target="_blank" rel="external noopener">Human Augmentation and Rehabilitation Laboratory (HAR Lab)</a>.
    </p>
    <p>
      Since June 2026, I have also been a visiting research student at the
      <a href="https://www.nus.edu.sg/" target="_blank" rel="external noopener">National University of Singapore (NUS)</a>,
      where I conduct research under the supervision of Prof. Xingyu Liu.
    </p>
  </div>
  <aside class="about-profile-card">
    <img src="{{ '/assets/img/jessie.jpg' | relative_url }}" alt="Jiacan Li">
    <div class="profile-details">
      <p>2023–present, B.Eng. in Robotics Engineering</p>
      <p>Southern University of Science and Technology</p>
      <p><a href="mailto:lijc2023@mail.sustech.edu.cn">lijc2023@mail.sustech.edu.cn</a></p>
    </div>
  </aside>
</section>

<div class="about-grid">
  <div class="about-card">
    <span class="metric">3.79/4.0</span>
    <h3>Academic Standing</h3>
  </div>
  <div class="about-card">
    <span class="metric">National 1st</span>
    <h3>ROBOCON China</h3>
  </div>
  <div class="about-card">
    <span class="metric">3</span>
    <h3>Patents</h3>
  </div>
</div>

<section class="about-section">
  <p class="about-eyebrow">Research Interests</p>
  <h2>What I work on</h2>
  <p class="section-intro">My research focuses on intelligent robotic systems that interact naturally and effectively with people and the physical world.</p>
  <div class="focus-list">
    <div class="focus-item">
      <h3>Tactile Sensing for Dexterous Grasping</h3>
      <span>Investigating how tactile feedback influences dexterous-hand grasping and developing more stable, adaptive, and generalizable grasping strategies.</span>
    </div>
    <div class="focus-item">
      <h3>Exoskeleton Control for Rehabilitation</h3>
      <span>Deep learning-based gait prediction and unified control strategies for stroke rehabilitation and mobility assistance.</span>
    </div>
    <div class="focus-item">
      <h3>Autonomous Navigation in GPS-denied Environments</h3>
      <span>Multi-sensor fusion pipelines involving LiDAR, depth camera, and IMU for robust robotic navigation.</span>
    </div>
  </div>
</section>

<section class="phd-opportunity">
  <div class="phd-copy">
    <p class="about-eyebrow">Let's Connect</p>
    <h2>Seeking Fall 2027 PhD Opportunities</h2>
    <p>
      I am actively seeking PhD opportunities starting in Fall 2027, with research interests in robotics, embodied intelligence, and human-centered intelligent systems. I would be delighted to connect with prospective supervisors and collaborators whose work aligns with these areas—please feel free to get in touch.
    </p>
  </div>
  <div class="phd-actions">
    <a class="phd-btn" href="{{ '/assets/pdf/Jiacan_Li_CV.pdf' | relative_url }}" target="_blank">Download CV</a>
    <a class="phd-btn" href="mailto:lijc2023@mail.sustech.edu.cn">Email Me</a>
  </div>
</section>

<section id="publications" class="about-publications">
  <div class="publication-hero">
    <p class="about-eyebrow">Research Output</p>
    <h1>Publications & Patents</h1>
  </div>

{% include publications_content.liquid %}

</section>
