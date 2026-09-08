---
layout: page
title: 6-DOF Robotic Sketching & 3D Projection
description: A closed-loop robotic drawing system combining computer vision, analytical inverse kinematics, and compliant hardware for planar and 3D surfaces.
img: assets/img/robotic-sketching.png
importance: 3
category: featured
---

<section class="project-hero-card">
  <p class="about-eyebrow">Robotic Manipulation · Computer Vision</p>
  <h2>6-DOF Robotic Sketching & 3D Projection</h2>
  <p>
    A complete closed-loop pipeline for high-precision robotic sketching, connecting digital image processing with physical execution on both planar and non-planar surfaces.
  </p>
  <div class="about-tags">
    <span>6-DOF Manipulator</span>
    <span>Computer Vision</span>
    <span>Analytical IK</span>
    <span>MATLAB & Simulink</span>
    <span>Compliant Hardware</span>
  </div>
</section>

<section class="project-detail-section">
  <p class="about-eyebrow">Real-World Demonstration</p>
  <h2>Physical Sketching Execution</h2>
  <div class="project-media-grid">
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/Drawing_video1.gif' | relative_url }}" alt="The robotic arm performing the first drawing demonstration">
    </figure>
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/Drawing_video2.gif' | relative_url }}" alt="The robotic arm performing the second drawing demonstration">
    </figure>
  </div>
  <p class="project-caption">The manipulator follows continuous drawing paths while maintaining consistent strokes through passive pressure regulation.</p>
</section>

<section class="project-detail-section">
  <p class="about-eyebrow">Advanced Capability</p>
  <h2>Sketching on 3D Surfaces</h2>
  <div class="project-showcase">
    <img src="{{ '/assets/img/robotic-sketching/projection_3d.gif' | relative_url }}" alt="Robotic sketching projected onto a cylindrical surface">
  </div>
  <p class="project-caption">A coordinate transformation maps two-dimensional contours onto a cylindrical surface while the robot dynamically adjusts its pose.</p>
</section>

<section class="project-detail-section">
  <p class="about-eyebrow">Perception Pipeline</p>
  <h2>From Image to Executable Path</h2>
  <div class="project-media-grid">
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/cv_skeleton1.jpg' | relative_url }}" alt="Computer vision skeletonization result">
    </figure>
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/cv_skeleton2.jpg' | relative_url }}" alt="Extracted drawing path nodes">
    </figure>
  </div>
  <p class="project-caption">OpenCV-based skeletonization and node extraction convert human figures into paths that the manipulator can execute.</p>
  <div class="project-media-grid">
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/final_sketch1.png' | relative_url }}" alt="First completed robotic sketch">
    </figure>
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/final_sketch2.png' | relative_url }}" alt="Second completed robotic sketch">
    </figure>
  </div>
  <p class="project-caption">Final physical results demonstrate faithful reconstruction of the processed reference paths.</p>
</section>

<section class="project-detail-section">
  <p class="about-eyebrow">Simulation & Validation</p>
  <h2>Kinematic Verification</h2>
  <div class="project-showcase">
    <img src="{{ '/assets/img/robotic-sketching/sim_video.gif' | relative_url }}" alt="Robot simulation in Simscape Multibody">
  </div>
  <p class="project-caption">Simscape Multibody simulation verifies kinematic feasibility and joint limits before physical execution.</p>
  <div class="project-media-grid">
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/sim_plot1.png' | relative_url }}" alt="Simulated robot trajectory plot">
    </figure>
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/sim_plot2.png' | relative_url }}" alt="Joint-space motion plot">
    </figure>
  </div>
</section>

<section class="project-detail-section">
  <p class="about-eyebrow">Hardware Design</p>
  <h2>Compliant Gripper & Experimental Platform</h2>
  <div class="project-media-grid project-media-grid-three">
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/gripper_detail.png' | relative_url }}" alt="Spring-buffered compliant gripper">
      <figcaption>Spring-buffered compliant gripper</figcaption>
    </figure>
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/real_setup1.jpg' | relative_url }}" alt="Robotic sketching experimental platform">
      <figcaption>Experimental platform and workspace</figcaption>
    </figure>
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/real_setup2.jpg' | relative_url }}" alt="Physical calibration of the drawing tools">
      <figcaption>Physical tool calibration</figcaption>
    </figure>
  </div>
</section>

<section class="project-detail-section technical-highlights">
  <p class="about-eyebrow">Technical Highlights</p>
  <h2>Core System Design</h2>
  <div class="highlight-grid">
    <div>
      <h3>Compliance Control</h3>
      <p>A custom 3D-printed gripper provides passive pressure regulation for continuous lines across uneven surfaces.</p>
    </div>
    <div>
      <h3>Analytical IK</h3>
      <p>An inverse-kinematics solver derived from D–H parameters generates feasible manipulator configurations in MATLAB.</p>
    </div>
    <div>
      <h3>Path Optimization</h3>
      <p>A greedy Euclidean search sequences waypoints to reduce non-drawing motion and improve execution efficiency.</p>
    </div>
  </div>
</section>
