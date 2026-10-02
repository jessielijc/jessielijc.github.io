---
layout: page
title: SplatSLAM
description: Dense 3D reconstruction from monocular video via learning-based SLAM and Gaussian Splatting.
img: assets/img/projects/splat-slam.png
importance: 2
category: featured
hide_title: true
page_class: project-detail-page
image_caption: From monocular video to a rendered 3D scene.
github: https://github.com/SplatSLAM-Project/SplatSLAM
---

<section class="project-hero-card">
  <p class="about-eyebrow">3D Reconstruction · Visual SLAM</p>
  <h1>SplatSLAM: From Monocular Video to a 3D Scene</h1>
  <p>
    This course project connects MASt3R-SLAM camera tracking and point-cloud reconstruction with 3D Gaussian Splatting. A conversion and refinement pipeline turns monocular video into a scene that can be rendered from new viewpoints.
  </p>
  <div class="about-tags">
    <span>MASt3R-SLAM</span>
    <span>Point-Cloud Refinement</span>
    <span>3D Gaussian Splatting</span>
    <span>Novel-View Rendering</span>
  </div>
  <div class="project-actions">
    <a class="project-link-btn flow-button" href="https://github.com/SplatSLAM-Project/SplatSLAM" target="_blank" rel="external nofollow noopener">View repository</a>
    <a class="project-link-btn flow-button" href="https://sites.google.com/view/splatslam/home" target="_blank" rel="external nofollow noopener">Original project page</a>
  </div>
</section>

<section class="project-detail-section">
  <p class="about-eyebrow">End-to-End Pipeline</p>
  <h2>From video frames to a rendered scene</h2>
  <figure class="project-showcase project-showcase--diagram">
    <img src="{{ '/assets/img/projects/splat-slam.png' | relative_url }}" alt="SplatSLAM pipeline from video frames and camera geometry to Gaussian optimization and a rendered 3D scene">
    <figcaption>The pipeline extracts frames, estimates camera poses and geometry, refines the point cloud, and trains 3D Gaussians for novel-view rendering.</figcaption>
  </figure>
</section>

<section class="project-detail-section technical-highlights">
  <p class="about-eyebrow">Technical Approach</p>
  <h2>Three connected stages</h2>
  <div class="highlight-grid">
    <div>
      <h3>Camera Tracking</h3>
      <p>MASt3R-SLAM estimates camera trajectories and a colored point cloud from RGB frames.</p>
    </div>
    <div>
      <h3>Geometry Refinement</h3>
      <p>Project-specific scripts convert poses into a 3DGS-compatible format and use statistical outlier removal to reduce isolated points.</p>
    </div>
    <div>
      <h3>Scene Rendering</h3>
      <p>The refined points initialize 3D Gaussians, which are optimized to render views beyond the original camera frames.</p>
    </div>
  </div>
</section>

<section class="project-detail-section">
  <p class="about-eyebrow">Experiment Notes</p>
  <h2>Reconstruction quality depends on capture and training</h2>
  <p>The repository reports that point-cloud denoising reduced visible floating artifacts with little change in PSNR. In a self-captured scene, shorter 3DGS training produced cleaner novel views than longer runs that overfit the input frames. These observations guided the project's capture and refinement workflow.</p>
</section>
