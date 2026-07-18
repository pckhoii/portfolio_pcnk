# Design Bible: The Data Observatory

Status: approved design source of truth.  
Scope: every current and future route, artifact, component, token, and interaction in this repository.

## 1. Audit

### Home
**Works:** a direct introduction, a useful route map, and the Signal Beacon establish a clear first object.  
**Inconsistent/generic:** the route map can feel like seven equal cards if density or hover treatment becomes too strong.  
**Keep:** the home as a navigation hub, not a second long-form chapter.  
**Remove going forward:** promotional hero language, duplicate introductions, decorative star fields.

### Journey
**Works:** the signal-to-direction diagram and step controls express analytical thinking with a single evolving object.  
**Inconsistent/generic:** any residual cosmic treatment would dilute the observatory idea.  
**Keep:** the observation sequence and quiet technical captions.  
**Remove going forward:** planets, free-floating orbits, tool-logo clusters, six-card process diagrams.

### Missions
**Works:** mission logs center business question, signal, system, and outcome.  
**Inconsistent/generic:** project lists must not become generic portfolio cards.  
**Keep:** document rhythm, decision framing, and the Mission Chart.  
**Remove going forward:** generic dashboard thumbnails as the primary identity.

### Archive
**Works:** one linear record can hold experience, education, and credentials without becoming a CV wall.  
**Inconsistent/generic:** too many badges or isolated panels make it feel administrative.  
**Keep:** the Flight Recorder and chronological trace.  
**Remove going forward:** proficiency meters and logo mosaics.

### Beyond
**Works:** it gives the personal world its own slower register.  
**Inconsistent/generic:** a warm fantasy palette or lifestyle-card grid breaks continuity with the observatory.  
**Keep:** a quiet map-room feeling and editorial artifacts.  
**Remove going forward:** pink, orange, or illustrated whimsy that cannot connect to the archive system.

### Reading
**Works:** one active entry makes knowledge feel studied rather than collected.  
**Inconsistent/generic:** shelf/card metaphors reduce books to inventory.  
**Keep:** book as artifact, detail as a field document, and the Open Book as an idea map.  
**Remove going forward:** ratings, cover grids, invented personal reflections.

### Notes
**Works:** intentional restraint leaves room for an archive that can grow.  
**Inconsistent/generic:** it must not look unfinished simply because it is sparse.  
**Keep:** one notebook, strong editorial margin, and calm metadata.  
**Remove going forward:** filler illustrations and empty decorative panels.

### Contact
**Works:** North Star gives the final action a directional meaning.  
**Inconsistent/generic:** a conventional contact-card stack would end the world abruptly.  
**Keep:** sparse coordinates and a quiet final horizon.  
**Remove going forward:** social-icon clusters, oversized calls to action, celebratory effects.

## 2. Manifesto

This is a permanent personal website: a carefully crafted digital observatory where data, knowledge, and curiosity meet. It should create calm attention, intellectual confidence, and the sense that a visitor has entered a system that has been observed rather than decorated.

Visitors should remember a world of signals becoming direction before they remember a portfolio owner. The website is different from a portfolio because work, learning, and personal curiosity are represented by one continuous language of observation and record keeping. It never becomes a sci-fi game, a SaaS dashboard, a resume template, a cosmic wallpaper, or an icon collection.

## 3. Visual DNA

| Dimension | Definition |
| --- | --- |
| Primary idea | Data Observatory: scattered evidence is observed, measured, mapped, and translated into direction. |
| Secondary idea | A personal archive: learning and curiosity are field records from the same world. |
| Keywords | observant, measured, editorial, technical, quiet, durable, humane. |
| Mood | calm precision with a small amount of wonder. |
| Atmosphere | near-black instrument room; not outer space. |
| Narrative | signal -> observation -> pattern -> map -> direction. |
| Graphic language | monoline diagrams, coordinate marks, technical rules, annotations, restrained texture. |
| Editorial language | short labels, readable prose, confident whitespace, document rhythm. |
| Motion language | continuity and explanation, never ambient spectacle. |
| Interaction language | controls reveal states of the same object; hover confirms intent. |
| Information language | question first, evidence second, direction last. |

## 4. Color Rules

All production color values must reference `src/design/colors.ts`, then map into CSS custom properties. Professional pages use near-black navy, cool grey, steel blue, and soft cyan. Personal pages may introduce charcoal blue, grey lavender, ivory, and a paper texture. Muted gold is annotation-only: it never becomes a primary background, gradient, or large typography color.

Hardcoded hex values are prohibited in new components, inline SVG markup, and new CSS rules. Existing SVG files should be normalized through the artifact palette, not locally recolored.

## 5. Typography Rules

- Display serif is reserved for hero, page title, and significant resolution statements.
- Sans serif carries all functional interface, body, labels, and metadata.
- Heading-to-body spacing is one `space.16`; paragraph-to-paragraph spacing is one `space.12`.
- Body copy is left aligned and capped at 65 characters. Center alignment is only allowed for a singular gateway or final statement.
- Technical labels are compact, uppercase, and restrained. Do not uppercase conversational copy, long titles, or buttons with sentence-like wording.
- Do not create oversized headings inside cards, panels, sidebars, or archive entries.

## 6. Spacing Rules

Use only the scale in `src/design/spacing.ts`. Four and eight are for optical correction; 12 and 16 for local rhythm; 24 and 32 for components; 48 and 64 for content groups; 96 and 128 for page moments. Empty space is content: a hero needs at least one major open area around its dominant artifact, and a route needs a quiet exit before the footer.

## 7. Artifact System

There are exactly ten canonical artifacts. They are diagrams, not icons. Use `src/design/artifacts.ts` as the registry and do not introduce a new artifact without replacing or formally extending this list.

| Artifact | Meaning and purpose | Appearance and evolution | Never becomes |
| --- | --- | --- | --- |
| Signal Beacon | the first observed question | Home arrival; later feeds Journey measurement | a logo or initials mark |
| Observatory | the act of measuring | Journey and learning contexts; receives the Beacon | a telescope illustration |
| Constellation Map | relationships becoming visible | Journey patterns, visual thinking | decorative stars |
| Navigation Compass | decision criteria | map/routing context and final choices | a generic nav icon |
| Mission Chart | a bounded business investigation | Missions hero and first mission log | a dashboard thumbnail frame |
| Archive Folder | accumulated personal records | Beyond and archive cross-links | a file-management icon |
| Flight Recorder | time, trace, and evidence | Archive, boxing practice, journey trace | a resume badge |
| Notebook | provisional observations | Notes and field logs | a note-taking app icon |
| Open Book | knowledge becoming an idea map | Reading and archive connections | a book-cover card |
| North Star | a resolved direction | Contact and final directional moments | a decorative sparkle |

Each artifact may appear once as a dominant object per route and at most twice as a supporting object across a page. The home route index is the sole exception: it may show the registered artifacts as compact route markers because navigation is its explicit function, never as free decoration. It may animate only when it explains a transition: Beacon resolves into Observatory; Constellation becomes Mission Chart; Mission Chart records into Flight Recorder; Flight Recorder opens into Archive/Book; Book resolves into Direction/North Star.

`galaxy-core.svg`, `mission-log.svg`, and `wormhole.svg` are legacy assets, not canonical artifacts. They must not be selected for new work. A future implementation pass should map their remaining usages to the closest registered object rather than expanding the system beyond ten.

## 8. Motion Principles

See [motion-principles.md](motion-principles.md). Motion is subordinate to comprehension. A static screenshot must still feel unmistakably like this world.

## 9. Graphic Limits

- One dominant artifact per page or major scene.
- At most two supporting diagrams in the same viewport.
- Zero decorative planets, orbit rings, random particles, bokeh, initials objects, or neon blobs.
- At most one subtle glow, and only when it marks an active observation or resolution.
- One primary motion and one ambient motion maximum in a viewport. Ambient motion is optional, never required.
- Technical rules must serve grouping, measurement, alignment, or continuity. No rule exists only to fill empty space.
- Grids appear only in observatory, chart, archive, and document contexts. They are omitted when the page needs calm.

## 10. Component Family

Components behave like field documents: square or near-square corners, thin rules, readable labels, and no nested cards.

- **Cards/panels:** only for repeated artifacts or genuinely bounded interactive tools; no floating marketing cards.
- **Buttons:** clear commands only; concise labels; technical hover and visible focus.
- **Navigation:** sparse, route-based, never a numbered chapter rail.
- **Tables/lists:** editorial rules and aligned labels, no pill-heavy interface.
- **Timeline:** a trace with measurement nodes, not a decorative vertical line.
- **Mission entry:** question, signal, system, outcome in that order.
- **Reading entry:** active artifact plus field-document detail, not a shelf.
- **Images:** real work, real documents, or registered artifacts only; never generic stock imagery.

## 11. Design Review Gate

Before implementation, confirm all answers are yes:

1. Can the site be recognized from a screenshot without reading its title?
2. Does the route use its defined dominant artifact and page theme?
3. Does Beyond remain a quieter part of the same observatory world?
4. Does Reading feel like knowledge under study, not a book catalog?
5. Does Journey make observation and direction visible through one evolving system?
6. Could graphics disappear while typography, space, and rules still carry the identity?
7. Does every color, spacing value, border, motion, texture, and artifact come from `src/design/`?

Any no blocks implementation until the design decision is revised here first.
