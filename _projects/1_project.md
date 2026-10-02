---
layout: page
title: ROS 2 Omni-Bot
description: Fully autonomous mobile manipulation with gesture control, voice interaction, SLAM, navigation, and visual grasping.
img: https://github.com/user-attachments/assets/5477dbe0-95bc-4b8a-bb79-ef781a2c6e75
importance: 1
category: featured
hide_title: true
page_class: project-detail-page
image_caption: Gesture-controlled teleoperation in the ROS 2 simulation.
github: https://github.com/jessielijc/ROS2-Autonomous-Robot-Project
---

<div class="project-hero-card">
  <p class="about-eyebrow">Autonomous Mobile Manipulation</p>
  <h1>ROS 2 Omni-Bot: Gesture-Controlled, Voice-Interactive, and SLAM-enabled Mobile Arm</h1>
  <p>
    An end-to-end autonomous mobile manipulation system built on <strong>ROS 2 Humble</strong>, integrating a differential-drive base, a custom 3-DOF robotic arm, gesture control, offline voice interaction, visual target searching, grasping, and Nav2-based autonomous navigation.
  </p>
  <div class="about-tags">
    <span>ROS 2 Humble</span>
    <span>Nav2</span>
    <span>MoveIt 2</span>
    <span>MediaPipe</span>
    <span>OpenCV</span>
    <span>SLAM</span>
  </div>
</div>

<section class="project-detail-section">
  <p class="about-eyebrow">Featured Demonstration</p>
  <h2>Gesture-controlled teleoperation</h2>
  <figure class="project-showcase">
    <img src="https://github.com/user-attachments/assets/5477dbe0-95bc-4b8a-bb79-ef781a2c6e75" alt="Gesture-controlled teleoperation demo">
    <figcaption>MediaPipe hand tracking maps the operator's gestures to mobile-base commands in the ROS 2 simulation.</figcaption>
  </figure>
  <div class="project-actions">
    <a class="project-link-btn flow-button" href="https://github.com/jessielijc/ROS2-Autonomous-Robot-Project" target="_blank" rel="external nofollow noopener">GitHub Repository</a>
  </div>
</section>

<section class="about-section">
  <p class="about-eyebrow">System Overview</p>
  <h2>What the robot can do</h2>
  <div class="focus-list">
    <div class="focus-item">
      <h3>Gesture-Controlled Autonomous Mission</h3>
      <span>A webcam and Google MediaPipe translate hand gestures into robot commands, including manual teleoperation, autonomous navigation triggers, and preemption of ongoing tasks.</span>
    </div>
    <div class="focus-item">
      <h3>Voice-Controlled Interaction</h3>
      <span>Offline voice recognition with Vosk enables Chinese voice commands for motion control, visual grasping, and autonomous navigation.</span>
    </div>
    <div class="focus-item">
      <h3>Visual Search, Grasping, and Delivery</h3>
      <span>OpenCV color segmentation and PID alignment guide the robot toward a target block, while MoveIt 2 executes the picking sequence and Nav2 handles delivery navigation.</span>
    </div>
  </div>
</section>

<section class="about-section">
  <p class="about-eyebrow">Demo Gallery</p>
  <h2>Mission snapshots</h2>
  <div class="project-media-grid">
    <figure><img src="https://github.com/user-attachments/assets/73bf9947-ec95-4642-93f3-033f837b31bf" alt="Gazebo simulation environment"><figcaption>Gazebo scene with the mobile manipulator and its indoor mission environment.</figcaption></figure>
    <figure><img src="https://github.com/user-attachments/assets/e1b800d1-e73f-4541-8011-f8e699462899" alt="RViz localization and navigation"><figcaption>RViz visualization used to initialize localization and monitor navigation.</figcaption></figure>
    <figure><img src="https://github.com/user-attachments/assets/7277bca9-2262-4c65-9b98-2fe7a9ba6442" alt="Navigation gesture command"><figcaption>A hand gesture triggers the autonomous navigation mission.</figcaption></figure>
    <figure><img src="https://github.com/user-attachments/assets/a424cf2f-396a-4c98-9369-5544a95949d2" alt="Visual grasping demo"><figcaption>Visual target search and alignment precede the arm's grasping sequence.</figcaption></figure>
    <figure><img src="https://github.com/user-attachments/assets/f320b372-5d2a-461a-8303-b5c3260d47f1" alt="Autonomous delivery mission"><figcaption>Nav2 guides the robot through the delivery route after the target is grasped.</figcaption></figure>
  </div>
</section>

<section class="about-section">
  <p class="about-eyebrow">Technical Highlights</p>
  <h2>Key engineering contributions</h2>
  <div class="timeline-card">
    <h3>Robust grasping simulation</h3>
    <div class="meta">Gazebo · Vacuum gripper plugin</div>
    <p>Implemented a vacuum gripper simulation workflow to overcome default Gazebo friction limitations and keep grasped objects stable during navigation.</p>
  </div>
  <div class="timeline-card">
    <h3>Responsive multi-threaded interaction</h3>
    <div class="meta">Python · MultiThreadedExecutor · OpenCV</div>
    <p>Used multi-threaded ROS 2 execution to keep the camera UI responsive while handling long-running Nav2 action requests.</p>
  </div>
  <div class="timeline-card">
    <h3>Decoupled mission architecture</h3>
    <div class="meta">State machine · Modular services</div>
    <p>Designed a loosely coupled system where the vision detector can be triggered by either gesture or voice controllers without duplicating logic.</p>
  </div>
</section>
