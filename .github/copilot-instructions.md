# Copilot Instructions for MSU-MTH132

## Project Overview
This is a **PreTeXt-based calculus textbook** (MTH132 - Calculus 1) for Michigan State University. The project generates HTML and PDF outputs from XML source files. Main source is `source/main.ptx` which includes chapters on precalculus, limits, derivatives, derivative applications, and integrals.

## Build & Development Workflow

**Local Development:**
- Install dependencies: `pip install -r requirements.txt` (requires pretext CLI 2.28.2+)
- Build website: `pretext build web`
- Preview HTML: `pretext view web`
- Build PDF: `pretext build print`
- Deploy to GitHub Pages: `pretext deploy`

**CI/CD:**
- GitHub Actions workflow: `.github/workflows/pretext-cli.yml`
- Automatically builds on PRs and manual dispatch
- Container: `oscarlevin/pretext-full` (includes LaTeX for image generation)

## Content Structure

**File Organization:**
- `source/main.ptx` - Master file (includes docinfo, chapters, frontmatter)
- `source/docinfo.ptx` - Document metadata, LaTeX macros, TikZ preamble
- `source/ch-*.ptx` - Chapter files (5 chapters: precalc, limits, derivative, derivApp, integral)
- `source/ch-*-s/sec-*.ptx` - Section files (subdivisions of chapters)
- `publication/publication.ptx` - Publisher configuration (visibility, styling)
- `output/stage/` - Generated HTML output
- `generated-assets/latex-image/` - TikZ-generated images

**File Format:** All source files are **PreTeXt XML** (`.ptx` extension)

## Key Architectural Patterns

1. **XML Inclusion via XInclude**
   - Main file uses `<xi:include href="./path.ptx" />` to compose modular chapters/sections
   - Example: `source/main.ptx` includes all chapters this way
   - Do NOT modify include paths without verifying file exists

2. **LaTeX/TikZ Integration**
   - Preamble defined in `source/docinfo.ptx` (tikz libraries, color definitions)
   - Images with `<latex-image>` tags auto-generate PNG in `generated-assets/latex-image/`
   - Colors: firstcolor (blue), secondcolor (darkgreen), thirdcolor (darkorange)
   - Reference with `<image source="images/filename.PNG" />`

3. **Exercise Visibility Control**
   - `publication.ptx` controls display: statement/hint/answer/solution per exercise type
   - Inline/divisional/worksheet/reading/project have separate configurations
   - Currently uses defaults (mostly commented out)

4. **Custom Styling**
   - Custom element rename: `<insight>` → displays as "Strategy"
   - Defined in `docinfo.ptx`
   - Add more renames as `<rename element="..." xml:lang="en-US">Display Name</rename>`

5. **Math Macros**
   - Defined in `docinfo.ptx`: `\newcommand{\N}{\mathbb N}`, etc.
   - Available in all content: `<m>\N</m>` renders blackboard N
   - Add semantic macros for repeated expressions

## Common Content Elements

**Section Structure (see `source/ch-derivative-s/sec-derivative-implicit.ptx`):**
```pretext
<section xml:id="sec-unique-id">
  <title>Section Title</title>
  <objectives><ul><li>Learning goal</li></ul></objectives>
  <p>Introduction paragraph</p>
  <subsection xml:id="ssec-subsection-id">
    <title>Subsection</title>
    <!-- content with <p>, <m>, <example>, <figure>, etc -->
  </subsection>
</section>
```

**Image References:**
- External images in `assets/images/` referenced as `<image source="images/filename.PNG" />`
- Include `<shortdescription>` tag for accessibility

**Cross-references:**
- Use `<xref ref="xml-id" />` for internal links
- `xml:id` attributes must be unique across entire project

## Editing Guidelines

- **Content edits:** Modify `.ptx` files in `source/` (preserve XML structure)
- **Build output:** Do NOT edit `output/` directly (regenerated on build)
- **Dependencies:** If adding packages or using new LaTeX commands in images, update `docinfo.ptx` preamble
- **Testing:** Run `pretext build web` locally to validate XML and catch include path errors
- **Accessibility:** Always add `<shortdescription>` to images and use semantic XML elements

## Project Conventions

- **IDs:** Use kebab-case (e.g., `sec-derivative-implicit`, `fig-implicit-circle`)
- **File naming:** Chapter files: `ch-topic.ptx`, Section files: `sec-topic.ptx`
- **Language:** Document is English (US) - `xml:lang="en-US"`
- **Domain:** Calculus content, focused on concrete examples and problem-solving

## External Resources

- [PreTeXt Documentation](https://pretextbook.org/documentation.html)
- [PreTeXt Guide](https://pretextbook.org/doc/guide/html/)
- [Sample Book](https://pretextbook.org/examples/sample-book/annotated/) - reference for patterns
