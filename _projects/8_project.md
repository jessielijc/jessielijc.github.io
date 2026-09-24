---
layout: page
title: BEAT Wrist Blood Pressure Monitor
description: Posture-independent wrist blood pressure monitoring with barometric-inertial elevation tracking and hydrostatic compensation.
img: assets/img/blood-pressure-monitor/posture-compensation.webp
importance: 4
category: featured
github: https://github.com/yuzhen-song/blood-pressure-monitor
hide_title: true
---

<section class="project-hero-card">
  <p class="about-eyebrow">Wearable Sensing · Embedded Systems · Signal Processing</p>
  <h2>BEAT: Posture-Independent Wrist Blood Pressure Monitoring</h2>
  <p>
    A wrist-worn blood pressure prototype that combines oscillometric sensing with barometric and inertial tracking to compensate for the hydrostatic error introduced when the wrist moves above or below heart level.
  </p>
  <div class="about-tags">
    <span>ESP32</span>
    <span>Oscillometric BP</span>
    <span>DPS310</span>
    <span>MPU6050</span>
    <span>ESP-NOW</span>
    <span>Python</span>
  </div>
  <div class="project-actions">
    <a class="project-link-btn flow-button" href="https://github.com/yuzhen-song/blood-pressure-monitor" target="_blank" rel="external nofollow noopener">View repository</a>
    <a class="project-link-btn flow-button" href="https://github.com/yuzhen-song/blood-pressure-monitor/blob/main/IEEE_Conference__Blood_Pressure_Monitor.pdf" target="_blank" rel="external nofollow noopener">Read project report</a>
  </div>
</section>

<section class="project-detail-section">
  <p class="about-eyebrow">System Overview</p>
  <h2>A detachable sensing module and a complete measurement pipeline</h2>
  <div class="project-showcase">
    <img src="{{ '/assets/img/blood-pressure-monitor/prototype.webp' | relative_url }}" alt="BEAT wrist module, pneumatic blood pressure hardware, ESP32 controllers, and desktop signal display">
  </div>
  <p class="project-caption">The wearable module integrates cuff pressure, barometric pressure, and inertial sensing. ESP-NOW sends the wrist reference data to the measurement controller while the desktop interface visualizes the oscillometric waveform.</p>
</section>

<section class="project-detail-section">
  <p class="about-eyebrow">The Core Problem</p>
  <h2>Correcting the pressure error caused by wrist height</h2>
  <div class="project-showcase">
    <img src="{{ '/assets/img/blood-pressure-monitor/posture-compensation.webp' | relative_url }}" alt="Two-phase heart-level calibration and posture-independent wrist blood pressure measurement">
  </div>
  <p class="project-caption">The system first records a heart-level barometric reference. During measurement, elevation changes are converted into a hydrostatic pressure correction so the user is not constrained to a fixed arm posture.</p>
</section>

<section class="project-detail-section technical-highlights">
  <p class="about-eyebrow">Technical Approach</p>
  <h2>From pneumatic sensing to compensated blood pressure</h2>
  <div class="highlight-grid">
    <div>
      <h3>Oscillometric Estimation</h3>
      <p>Cuff pressure is smoothed, the slow baseline is removed, and the pulsatile envelope is reconstructed to estimate systolic, mean arterial, and diastolic pressure.</p>
    </div>
    <div>
      <h3>Artifact Rejection</h3>
      <p>Envelope gating, local spike detection, and slope-based rejection suppress pump vibration and other mechanical disturbances before estimating pressure.</p>
    </div>
    <div>
      <h3>Hydrostatic Compensation</h3>
      <p>DPS310 pressure differences provide relative wrist height, which is converted into a blood-column pressure correction using the physical relation ΔP = ρgΔh.</p>
    </div>
  </div>
</section>

<section class="project-detail-section">
  <p class="about-eyebrow">Signal Processing</p>
  <h2>Recovering the arterial pulse envelope</h2>
  <div class="project-showcase">
    <img src="{{ '/assets/img/blood-pressure-monitor/signal-and-agreement.webp' | relative_url }}" alt="Raw cuff pressure, filtered pulsatile waveform, and oscillation envelope used for blood pressure estimation">
  </div>
  <p class="project-caption">The processing pipeline separates the cuff-pressure baseline from the pulsatile component, detects valid pulse peaks, and uses the oscillation envelope to locate DBP, MAP, and SBP.</p>
</section>

<section class="project-detail-section technical-highlights">
  <p class="about-eyebrow">Pilot Evaluation</p>
  <h2>Preliminary posture-compensation results</h2>
  <div class="highlight-grid">
    <div>
      <h3>1.4 mmHg</h3>
      <p>Mean baseline bias for both systolic and diastolic pressure across 15 heart-level measurements from three participants.</p>
    </div>
    <div>
      <h3>56.2% lower SBP MAE</h3>
      <p>Overall systolic mean absolute error decreased from 7.61 to 3.33 mmHg after barometric compensation in the posture subset.</p>
    </div>
    <div>
      <h3>34.9% lower DBP MAE</h3>
      <p>Overall diastolic mean absolute error decreased from 6.79 to 4.42 mmHg in the same preliminary evaluation.</p>
    </div>
  </div>
  <div class="project-showcase mt-3">
    <img src="{{ '/assets/img/blood-pressure-monitor/posture-results.webp' | relative_url }}" alt="Systolic and diastolic pressure results above, at, and below heart level before and after compensation">
  </div>
  <p class="project-caption">The figure compares posture-affected readings, uncompensated BEAT measurements, and compensated results against the heart-level Omron reference. These results come from a small course-project feasibility study and are not evidence of clinical validation.</p>
</section>

<section class="project-detail-section">
  <p class="about-eyebrow">Implementation</p>
  <h2>Embedded control, wireless sensing, and a Python analysis interface</h2>
  <div class="project-showcase">
    <img src="{{ '/assets/img/blood-pressure-monitor/system-workflow.webp' | relative_url }}" alt="BEAT hardware architecture and oscillometric blood pressure estimation workflow">
  </div>
  <p class="project-caption">ESP32 firmware controls cuff inflation, the solenoid valve, and sensor acquisition. The Python application handles serial collection, real-time visualization, offline analysis, and posture compensation.</p>
</section>

<section class="project-detail-section">
  <p class="about-eyebrow">Project Report</p>
  <h2>BEAT: Barometric Elevation and Attitude Tracking for Posture-Independent Wrist Blood Pressure Measurement</h2>
  <p class="project-caption">Course-project technical report by Yuzhen Song, Zhijiao Mai, Jiacan Li, and Chengzhi Hu. The repository includes the report, presentation materials, embedded firmware, desktop software, and analysis scripts.</p>
  <div class="project-actions">
    <a class="project-link-btn flow-button" href="https://github.com/yuzhen-song/blood-pressure-monitor/blob/main/IEEE_Conference__Blood_Pressure_Monitor.pdf" target="_blank" rel="external nofollow noopener">Open report</a>
    <a class="project-link-btn flow-button" href="https://github.com/yuzhen-song/blood-pressure-monitor" target="_blank" rel="external nofollow noopener">Explore the code</a>
  </div>
</section>
