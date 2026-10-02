---
layout: page
title: 6-DOF Robotic Sketching & 3D Projection
description: A closed-loop robotic drawing system combining computer vision, analytical inverse kinematics, and compliant hardware for planar and 3D surfaces.
img: assets/img/robotic-sketching.png
importance: 3
category: featured
hide_title: true
page_class: project-detail-page
image_caption: The six-axis arm drawing on a physical surface.
---

<section class="project-hero-card">
  <p class="about-eyebrow">Robotic Manipulation · Computer Vision</p>
  <h1>6-DOF Robotic Sketching & 3D Projection</h1>
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
      <figcaption>The arm follows a continuous contour on a planar drawing surface.</figcaption>
    </figure>
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/Drawing_video2.gif' | relative_url }}" alt="The robotic arm performing the second drawing demonstration">
      <figcaption>A second physical run shows repeatable stroke execution.</figcaption>
    </figure>
  </div>
</section>

<section class="project-detail-section">
  <p class="about-eyebrow">Advanced Capability</p>
  <h2>Sketching on 3D Surfaces</h2>
  <figure class="project-showcase">
    <img src="{{ '/assets/img/robotic-sketching/projection_3d.gif' | relative_url }}" alt="Robotic sketching projected onto a cylindrical surface">
    <figcaption>A coordinate transformation maps two-dimensional contours onto a cylindrical surface while the robot adjusts its pose.</figcaption>
  </figure>
</section>

<section class="project-detail-section">
  <p class="about-eyebrow">Perception Pipeline</p>
  <h2>From Image to Executable Path</h2>
  <div class="project-media-grid">
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/cv_skeleton1.jpg' | relative_url }}" alt="Computer vision skeletonization result">
      <figcaption>Skeletonization reduces the reference drawing to thin paths.</figcaption>
    </figure>
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/cv_skeleton2.jpg' | relative_url }}" alt="Extracted drawing path nodes">
      <figcaption>Extracted nodes provide waypoints for the manipulator.</figcaption>
    </figure>
  </div>
  <div class="project-media-grid">
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/final_sketch1.png' | relative_url }}" alt="First completed robotic sketch">
      <figcaption>The first completed sketch follows the processed reference path.</figcaption>
    </figure>
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/final_sketch2.png' | relative_url }}" alt="Second completed robotic sketch">
      <figcaption>The second completed sketch demonstrates the same drawing pipeline.</figcaption>
    </figure>
  </div>
</section>

<section class="project-detail-section">
  <p class="about-eyebrow">Simulation & Validation</p>
  <h2>Kinematic Verification</h2>
  <figure class="project-showcase">
    <img src="{{ '/assets/img/robotic-sketching/sim_video.gif' | relative_url }}" alt="Robot simulation in Simscape Multibody">
    <figcaption>Simscape Multibody checks the robot motion and joint limits before physical execution.</figcaption>
  </figure>
  <div class="project-media-grid">
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/sim_plot1.png' | relative_url }}" alt="Simulated robot trajectory plot">
      <figcaption>Simulated end-effector trajectory for the drawing path.</figcaption>
    </figure>
    <figure>
      <img src="{{ '/assets/img/robotic-sketching/sim_plot2.png' | relative_url }}" alt="Joint-space motion plot">
      <figcaption>Joint-space motion used to verify feasible actuation.</figcaption>
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
