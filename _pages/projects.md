---
layout: page
title: projects
permalink: /projects/
description: Selected robotics, SLAM, and embodied AI projects.
hide_title: true
page_class: projects-page
nav: true
nav_order: 3
display_categories: [featured]
horizontal: true
---

<section class="project-hero-card">
  <h1>Projects</h1>
</section>

<div class="projects projects-vertical">
  {% if site.enable_project_categories and page.display_categories %}
    {% for category in page.display_categories %}
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-1">
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
      <div class="row row-cols-1">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
      </div>
    {% endif %}
  {% endif %}
</div>
