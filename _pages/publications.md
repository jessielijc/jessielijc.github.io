---
layout: page
permalink: /publications/
title: publications
description: Selected research outputs, patents, and intellectual property.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<section class="publication-hero">
  <p class="eyebrow">Research Output</p>
  <h1>Publications & Patents</h1>
  <p>
    A selected record of my scholarly work and intellectual property in robotics, exoskeleton systems, control methods, and assistive technologies.
  </p>
</section>

<section class="patents-section">
  <div class="section-heading refined">
    <div>
      <p class="eyebrow">Intellectual Property</p>
      <h2>Patents</h2>
    </div>
    <p>Published invention patents filed by Southern University of Science and Technology.</p>
  </div>

  <div class="patent-list refined">
    <article class="patent-card refined">
      <div class="patent-index">01</div>
      <div class="patent-content">
        <div class="patent-meta">
          <span class="patent-type">Invention Patent</span>
          <span class="patent-status">Published</span>
        </div>
        <h3>A Control Method, System, Electronic Device, and Computer Program Product for Exoskeleton Control</h3>
        <p class="patent-authors">Chenglong Fu, Xinying Li, Jingfeng Xiong, Xiaohe Yu, Yanchen Wu, <strong>Jiacan Li</strong></p>
        <div class="patent-grid">
          <div>
            <span class="label">Applicant</span>
            <span>Southern University of Science and Technology</span>
          </div>
          <div>
            <span class="label">Filed</span>
            <span>2025-11-27</span>
          </div>
          <div>
            <span class="label">Published</span>
            <span>2026-03-27</span>
          </div>
        </div>
      </div>
      <div class="patent-actions">
        <a class="patent-btn" href="https://cn.oversea.cnki.net/Kns55/brief/result.aspx?dbprefix=SCPD_XX" target="_blank" rel="external nofollow noopener">CNKI Patent Search</a>
      </div>
    </article>

    <article class="patent-card refined">
      <div class="patent-index">02</div>
      <div class="patent-content">
        <div class="patent-meta">
          <span class="patent-type">Invention Patent</span>
          <span class="patent-status">Published</span>
        </div>
        <h3>A Control Method, Apparatus, Electronic Device, and Storage Medium</h3>
        <p class="patent-authors">Chenglong Fu, Jingfeng Xiong, <strong>Jiacan Li</strong>, Chuheng Chen, Yanchen Wu, Xinying Li, Youran Xi, Yaojin Xu</p>
        <div class="patent-grid">
          <div>
            <span class="label">Applicant</span>
            <span>Southern University of Science and Technology</span>
          </div>
          <div>
            <span class="label">Filed</span>
            <span>2025-08-12</span>
          </div>
          <div>
            <span class="label">Published</span>
            <span>2025-12-09</span>
          </div>
        </div>
      </div>
      <div class="patent-actions">
        <a class="patent-btn" href="https://cn.oversea.cnki.net/Kns55/brief/result.aspx?dbprefix=SCPD_XX" target="_blank" rel="external nofollow noopener">CNKI Patent Search</a>
      </div>
    </article>

    <article class="patent-card refined">
      <div class="patent-index">03</div>
      <div class="patent-content">
        <div class="patent-meta">
          <span class="patent-type">Invention Patent</span>
          <span class="patent-status">Published</span>
        </div>
        <h3>A Control Method for a Resistive Exoskeleton Mechanism, a Resistive Exoskeleton Mechanism, and a Low-Level Controller</h3>
        <p class="patent-authors">Chenglong Fu, Shiquan Yu, Yuquan Leng, Guangshan Wang, Xinying Li, <strong>Jiacan Li</strong>, Wenbing Zhuang, Jingfeng Xiong</p>
        <div class="patent-grid">
          <div>
            <span class="label">Applicant</span>
            <span>Southern University of Science and Technology</span>
          </div>
          <div>
            <span class="label">Filed</span>
            <span>2025-05-12</span>
          </div>
          <div>
            <span class="label">Published</span>
            <span>2025-08-12</span>
          </div>
        </div>
      </div>
      <div class="patent-actions">
        <a class="patent-btn" href="https://cn.oversea.cnki.net/Kns55/brief/result.aspx?dbprefix=SCPD_XX" target="_blank" rel="external nofollow noopener">CNKI Patent Search</a>
      </div>
    </article>

  </div>

  <p class="patent-note">
    Note: CNKI may require selecting the patent database before searching by title. The links above open the CNKI patent search portal.
  </p>
</section>

<section class="scholarly-publications">
  <div class="section-heading refined">
    <div>
      <p class="eyebrow">Academic Publications</p>
      <h2>Scholarly Publications</h2>
    </div>
  </div>

  <!-- Bibsearch Feature -->

{% include bib_search.liquid %}

  <div class="publications">
    {% bibliography %}
  </div>
</section>
