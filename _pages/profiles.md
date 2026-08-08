---
layout: page
permalink: /people/
title: people
description: people who have partnered with me in previous projects as well as those currently collaborating
nav: true
nav_order: 7
display_categories: ["Project Collaborators", "Academic Co-authors"]
horizontal: false
---

{% assign projects = site.data.people %}

<div class="projects">
  {% for category in page.display_categories %}
    {% assign category_id = category | downcase | replace: " ", "-" %}
    <a id="{{ category_id }}" href=".#{{ category_id }}">
      <h2 class="category text-capitalize">{{ category }}</h2>
    </a>

    {% assign filtered = projects | where: "category", category %}

    <div class="row row-cols-1 row-cols-md-5 g-4">
      {% for person in filtered %}
        <div class="col">
          <div class="card h-100">
            <img src="{{ person.image }}" class="card-img-top" alt="{{ person.title }}" style="object-fit: cover; height: 200px;">
            <div class="card-body text-center">
              <h5 class="card-title">{{ person.title }}</h5>
              <p class="card-text text-muted">{{ person.affiliation }}</p>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>

{% endfor %}

</div>
