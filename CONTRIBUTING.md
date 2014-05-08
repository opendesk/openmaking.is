---
title: "Contributing to this Website"
layout: page
permalink: /contribute/
---

OpenMaking.is is an open, community edited website, hosted on [GitHub Pages][].
If you're familiar with GitHub then the workflow is as normal:

* [fork this repository](#forking-the-repository)
* [make your changes](#making-your-changes)
* [submit a pull request](#submitting-a-pull-request)

When you do contribute, please add your details to [_data/authors.yaml][] and be
aware that by doing so you dedicate your work to the [public domain][].

### New to GitHub Pages?

Compared to CAD or CAM software, this is really child's play. The next few
sections take you through all you need to know.

### Forking the repository

To fork this project, [sign up or log in to GitHub][] and then click the "Fork"
button in the [OpenMaking.is GitHub repository][]:

<figure>
  <a href="https://help.github.com/articles/fork-a-repo">
    <img src="/gfx/Bootcamp-Fork.png" class="img-thumbnail"
        style="width: 369px"
    /></a>
</figure>

This will create a copy (a fork) of the repository under your GitHub account.

### Making your changes

You can then add and edit files in your fork of the repository, either
[using git][], or simply by [editing files directly in the browser][].
The only difference between GitHub and "normal" editing is that when you
make a change you will be asked for a commit message:

<figure>
  <a href="https://help.github.com/articles/editing-files">
    <img src="/gfx/commit_message_summary.png" class="img-thumbnail"
        style="738px"
    /></a>
</figure>

Write the commit summary as a short sentence and hit "commit", e.g.:

> Fixed typo in footer link.

### Adding new content

The best way to add new content is to duplicate an existing page or post and
then edit the content. For example, to add a new article:

* navigate to the `_posts/articles` folder in your fork of the repository
* click into an existing post, click the edit button and copy the content
  (select all and copy)
* navigate back to the articles folder
* clicking the small "create file" icon to add a new file

<figure>
  <a href="https://help.github.com/articles/creating-new-files">
    <img src="/gfx/create_new_file.jpeg" class="img-thumbnail"
        style="width: 325px"
    /></a>
</figure>

Follow the same naming convention as the existing files, which means:

* `YEAR-MONTH-DAY-some-name.md`, e.g.:
* `2014-06-01-my-great-article.md`

Then paste the content you copied from the existing file into the new file,
edit the metadata at the top (keeping to the same [obvious syntax][]) and
edit the content of the post using [Markdown][]. The first paragraph of the
content is used by default as the listing description.

### Markdown

All pages and posts on the site are written in [Markdown][]. This should be
pretty easy to copy / understand by looking at the `.md` source files for
existing pages and posts. For a syntax reference and guide, see the
[markdown documentation][].

### Submitting a pull request

When you're happy with your changes, go to the main page for your fork of
the repository and click the small "Compare and Review" button:

<figure>
  <a href="https://help.github.com/articles/creating-a-pull-request">
    <img src="/gfx/pull-request-start-review-button.png"
        class="img-thumbnail"
        style="width: 412px"
    /></a>
</figure>

Click to create a pull request:

<figure>
  <a href="https://help.github.com/articles/creating-a-pull-request">
    <img src="/gfx/pull-request-click-to-create.png"
        class="img-thumbnail"
        style="width: 536px"
    /></a>
</figure>

And send the pull request. Your content will be reviewed by the
[OpenMaking.is team][] and merged into the main website.

### Help / Suggesting Changes

If you're having problems or have suggestions for the site, please
[raise an Issue][].

[_data/authors.yaml]: https://github.com/opendesk/openmaking.is/blob/gh-pages/_data/authors.yaml
[editing files directly in the browser]: https://help.github.com/articles/editing-files
[github pages]: https://pages.github.com/
[jekyll]: http://jekyllrb.com
[jekyll website]: http://jekyllrb.com/
[markdown]: http://daringfireball.net/projects/markdown/
[markdown documentation]: http://daringfireball.net/projects/markdown/basics
[obvious syntax]: http://jekyllrb.com/docs/frontmatter/
[on github]: https://github.com/opendesk/openmaking.is
[openmaking.is gitHub repository]: https://github.com/opendesk/openmaking.is
[openmaking.is team]: /about/
[public domain]: https://github.com/opendesk/openmaking.is/blob/gh-pages/UNLICENSE
[raise an issue]: https://github.com/opendesk/openmaking.is/issues
[sign up or log in to github]: https://github.com
[using git]: http://git-scm.com/
