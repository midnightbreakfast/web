---
layout: page
permalink: /contributors/
title: Our Contributors
contributors:
  -
    name: Callie Collins
    bio: |
      [Callie Collins](http://www.calliecollins.com/index.html) lives and writes in (and proselytizes for) Austin, Texas. She is the co-director of A Strange Object, a small press based in Austin. Her work has most recently appeared in <cite>The Rumpus</cite> and <cite>The Collagist</cite>, among other venues.
    piece:
      title: Callie Collins
      url: /callie-collins/
  -
    name: Jason Diamond
    bio: |
      [Jason Diamond](http://twitter.com/imjasondiamond) is the literary editor at Flavorwire, the founder of Vol. 1 Brooklyn, and has been published by <cite>The New York Times</cite>, <cite>The Paris Review</cite>, <cite>Tablet</cite>, <cite>The New York Observer</cite>, and many other fine places. He lives in Brooklyn with his wife, two cats, and a dog named Max. 
    piece:
      title: Northern Souls
      url: /northern-souls/
  -
    name: Eric Anthony Glover
    bio: |
      Eric Anthony Glover is a pop culture critic with lots of opinions. He urges you to agree with them. When he's not exploring the intersection of entertainment and social awareness, you can find him indulging in sci-fi TV, involuntarily daydreaming, or pounding out his next action blockbuster.
    piece:
      title: So Funny It Hurts
      url: /so-funny-it-hurts/
  -
    name: Kima Jones
    bio: |
      [Kima Jones](http://twitter.com/kima_jones) is a 2013 PEN USA Emerging Voices fellow in poetry, a Voices at VONA alum, and a 2012 Lambda Literary Fellow in poetry. Kima has been published at <cite>The Rumpus</cite> and <cite>PANK</cite>, among others. Kima lives in Los Angeles and is writing her first poetry collection, <cite>The Anatomy of Forgiveness</cite>. 
    piece:
      title: The Aqiqah
      url: /aqiqah/
  -
    name: Lauren O’Neal
    bio: |
      [Lauren O'Neal](http://twitter.com/laureneoneal) is a freelance writer and editor working toward an MFA in creative writing in San Francisco. She has written for publications like <cite>Slate</cite>, <cite>The New Inquiry</cite>, and <cite>The Rumpus</cite>, where she was formerly an assistant editor.
    piece:
      title: Callie Collins
      url: /callie-collins/
  -
    name: Matthew Salesses
    bio: |
      [Matthew Salesses](http://matthewsalesses.com/) is the author of [<cite>I'm Not Saying, I'm Just Saying</cite>](http://www.amazon.com/Im-Not-Saying-Just/dp/1937865061), [The Last Repatriate](http://nouvellabooks.com/books/the-last-repatriate/), a couple of ebooks forthcoming from Thought Catalog Books, and other things. Follow him [@salesses](http://www.twitter.com/salesses).
    piece:
      title: The Russian Coat
      url: /russian-coat/
  -
    name: Benjamin Samuel
    bio: |
      [Benjamin Samuel](http://twitter.com/benasam) is Co-Editor of Electric Literature and co-founder of its weekly fiction magazine, Recommended Reading. You can find him in Brooklyn.
    piece:
      title: A Prayer for Glampers
      url: /glampers/
illustrators:
  -
    name: Lyndsey Lesh
    piece:
      title: The Aqiqah
      url: /aqiqah/
  -
    name: Jason Novak
    piece:
      title: A Prayer for Glamers
      url: /glampers/
  -
    name: Lara Odell
    piece:
      title: The Russian Coat
      url: /russian-coat/
  -
    name: Nancy Smith
    piece:
      title: Northern Souls
      url: /northern-souls/
  -
    name: Kristen Tomanocy
    piece:
      title: So Funny It Hurts
      url: /so-funny-it-hurts/
---

<h2>Contributors</h2>

{% for person in page.contributors %}

<h3>{{ person.name }} <small>(<a href="{{ person.piece.url }}">{{ person.piece.title }}</a>)</small></h3>

{{ person.bio }}

{% endfor %}

<h2>Illustrators</h2>

{% for person in page.illustrators %}

<h3>{{ person.name }} <small>(<a href="{{ person.piece.url }}">{{ person.piece.title }}</a>)</small></h3>

{% endfor %}
