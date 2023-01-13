---
pagination: 
  data: collections
  size: 1
  alias: tag
  filter:
    - baldwinsville
permalink: /{{ tag | slug }}/
layout: layouts/base.njk
eleventyComputed:
  metaTitle: "{{ tag }}"
  title: "{{ tag }}"
eleventyExcludeFromCollections: true
---

<div id="collection-container">

<h1>{{ tag }}</h1>

<div class="container">
{% set taglist = collections[ tag ] %}
{% for post in taglist %}
{% include 'components/listing-card.njk' %}
{% endfor %}
</div>

</div>