---
layout: default
title: "Blog"
author: Fábio Reis
permalink: /blog/
---

# Leadership Blog

Welcome!

I'm Fábio and I've been leading teams for the past 5 years in the game development area - specifically - software developers.

This content is about showing tools that I've learned along my journey and that I would love to have known since my first days as a leader/manager.

I foresee that if you continue reading, at least one of the following will happen:

- You learn some new tools and add them to your toolbelt;
- You will notice that you've been using one of them successfully already, and afterwards you will do so more consciously;
- or, you won't agree with what I wrote, triggering you to keep looking for your own path down the leadership role.

Everything that's written in this blog is highly personal and portraits my own view/perspective and, above all, my own experience since I was promoted up until now.

## Posts

### 2021
#### July
- [2021/07/10 - You've been promoted into a leadership position!](/posts/2021_07_10_youve_been_promoted_to_leadership)
- [2021/07/10 - Tool #1 - Is perception reality?](/posts/2021_07_10_1_perception_is_reality)
- [2021/07/10 - Tool #2 - Double clicking](/posts/2021_07_10_2_double_clicking)

<section class="recent-posts">
<div class="section-title">
    <h2>Archive of posts with <span>{{ page.type }} '{{ page.title }}'</span></h2>
</div>
<div class="row listrecent">

{% for post in page.posts %}

    {% include postbox.html %}

{% endfor %}

</div>
</section>