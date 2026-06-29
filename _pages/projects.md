---
layout: page
title: projects
permalink: /projects/
description: Selected robotics, SLAM, and embodied AI projects.
hide_title: true
nav: true
nav_order: 3
display_categories: [featured]
horizontal: false
---

<section class="project-hero-card">
  <p class="about-eyebrow">Selected Work</p>
  <h2>Projects</h2>
  <p>
    A curated collection of robotics and 3D reconstruction projects, including autonomous mobile manipulation, gesture and voice interaction, SLAM, and Gaussian Splatting.
  </p>
</section>

<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    {% for category in page.display_categories %}
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2">
            {% for project in sorted_projects %}
              {% include projects_horizontal.liquid %}
            {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="row row-cols-1 row-cols-md-2">
          {% for project in sorted_projects %}
            {% include projects.liquid %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}
  {% else %}
    {% assign sorted_projects = site.projects | sort: "importance" %}
    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
          {% for project in sorted_projects %}
            {% include projects_horizontal.liquid %}
          {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="row row-cols-1 row-cols-md-2">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endif %}
  {% endif %}
</div>
