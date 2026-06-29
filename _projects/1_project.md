---
layout: page
title: ROS 2 Omni-Bot
description: Fully autonomous mobile manipulation with gesture control, voice interaction, SLAM, navigation, and visual grasping.
img: https://github.com/user-attachments/assets/5477dbe0-95bc-4b8a-bb79-ef781a2c6e75
importance: 1
category: featured
github: https://github.com/jessielijc/ROS2-Autonomous-Robot-Project
---

<div class="project-hero-card">
  <p class="about-eyebrow">Autonomous Mobile Manipulation</p>
  <h2>ROS 2 Omni-Bot: Gesture-Controlled, Voice-Interactive, and SLAM-enabled Mobile Arm</h2>
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

<div class="project-actions">
  <a class="project-link-btn" href="https://github.com/jessielijc/ROS2-Autonomous-Robot-Project" target="_blank" rel="external nofollow noopener">GitHub Repository</a>
</div>

<div class="project-showcase">
  <img src="https://github.com/user-attachments/assets/5477dbe0-95bc-4b8a-bb79-ef781a2c6e75" alt="Gesture-controlled teleoperation demo">
</div>

<div class="caption">Gesture-controlled manual teleoperation using MediaPipe hand tracking.</div>

<section class="about-section">
  <p class="about-eyebrow">System Overview</p>
  <h2>What the robot can do</h2>
  <div class="focus-list">
    <div class="focus-item">
      <strong>Gesture-Controlled Autonomous Mission</strong>
      <span>A webcam and Google MediaPipe translate hand gestures into robot commands, including manual teleoperation, autonomous navigation triggers, and preemption of ongoing tasks.</span>
    </div>
    <div class="focus-item">
      <strong>Voice-Controlled Interaction</strong>
      <span>Offline voice recognition with Vosk enables Chinese voice commands for motion control, visual grasping, and autonomous navigation.</span>
    </div>
    <div class="focus-item">
      <strong>Visual Search, Grasping, and Delivery</strong>
      <span>OpenCV color segmentation and PID alignment guide the robot toward a target block, while MoveIt 2 executes the picking sequence and Nav2 handles delivery navigation.</span>
    </div>
  </div>
</section>

<section class="about-section">
  <p class="about-eyebrow">Demo Gallery</p>
  <h2>Mission snapshots</h2>
  <div class="project-media-grid">
    <img src="https://github.com/user-attachments/assets/73bf9947-ec95-4642-93f3-033f837b31bf" alt="Gazebo simulation environment">
    <img src="https://github.com/user-attachments/assets/e1b800d1-e73f-4541-8011-f8e699462899" alt="RViz localization and navigation">
    <img src="https://github.com/user-attachments/assets/7277bca9-2262-4c65-9b98-2fe7a9ba6442" alt="Navigation gesture command">
    <img src="https://github.com/user-attachments/assets/a424cf2f-396a-4c98-9369-5544a95949d2" alt="Visual grasping demo">
    <img src="https://github.com/user-attachments/assets/f320b372-5d2a-461a-8303-b5c3260d47f1" alt="Autonomous delivery mission">
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
