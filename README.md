tabify
======

[![CI](https://github.com/zkm/tabify/actions/workflows/ci.yml/badge.svg)](https://github.com/zkm/tabify/actions/workflows/ci.yml)
[![Deploy to GitHub Pages](https://github.com/zkm/tabify/actions/workflows/pages.yml/badge.svg)](https://github.com/zkm/tabify/actions/workflows/pages.yml)
[![live demo](https://img.shields.io/website?url=http%3A%2F%2Fzkm.github.io%2Ftabify%2F&label=live%20demo)](http://zkm.github.io/tabify/)

![jQuery plugin](https://img.shields.io/badge/jQuery-plugin-0769AD?logo=jquery&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-663399?logo=css&logoColor=white)

Simple jQuery tabs plugin.

Getting Started
---------------
- Include jQuery on your page.
- Add `jquery.tabify.js` and `tabify.css`.
- Structure your HTML with a tab list and content panes.

Example
-------
```html
<link rel="stylesheet" href="tabify.css">
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="jquery.tabify.js"></script>

<ul class="tabs">
	<li class="active"><a href="#tab1">Tab 1</a></li>
	<li><a href="#tab2">Tab 2</a></li>
</ul>

<div id="tab1" class="tab-pane">First tab content</div>
<div id="tab2" class="tab-pane">Second tab content</div>

<script>
	$(function(){
		$('.tabs').tabify();
	});
	// If the plugin exposes options, pass them as:
	// $('.tabs').tabify({ activeClass: 'active' });
</script>
```

Development
-----------
- Files:
	- `index.html`: demo page
	- `jquery.tabify.js`: plugin source
	- `tabify.css`: styles

CI & Deployment
---------------
- CI: Basic checks run on push/PR (`.github/workflows/ci.yml`).
- Pages: Automatic deployment to GitHub Pages on push (`.github/workflows/pages.yml`).
	- Enable GitHub Pages with source "GitHub Actions" in repo settings.
	- Default branch expected: `main` or `master`.

Local Preview
-------------
Serve `index.html` locally with any static server, e.g.:

```bash
# Python 3
python3 -m http.server 8080

# Node
npx serve .
```

License
-------
MIT (or update if different)