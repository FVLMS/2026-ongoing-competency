---
title: "Ongoing Competency Build Guide"
description: "Templates, validation options, and how-to steps based on Cornerstone tip sheets."
---

# Ongoing Competency Build Guide

## 1. Overview

Use this guide to create and maintain Ongoing Competency learning objects in Cornerstone. The details below are pulled from the tip sheets in `content/tip sheets`.

Key standards and best practices (Content Development Standards Guide):

- Test in Pilot before loading into Production to catch issues early.
- Search before creating new items to avoid duplicates.
- Use clear, simple titles (avoid internal codes/modifiers unless necessary).
- Use Player 2.0 (select the Player option as required).
- Reversion by editing items to create new versions instead of copying/replacing.
- If you reversion an auto-assigned curriculum, notify the LMS team; reversioning breaks auto-assignment.

Material-specific guidelines:

- Do not create Mandatory items; coordinate with the LMS team.
- If content is longer than 5 minutes, contact the LMS team before creating.
- Use PDF or URL only; upload all documents as PDFs.
- Recurrence is off by default; enable if needed from Course Catalog.
- Signature is on by default for materials; turn it off if not needed (Course Catalog).

## 2. Templates

### a. Intro Template

Use a Curriculum Note for brief introductions, instructions, or links specific to a curriculum (no Material required).

Suggested structure:

- Title
- Purpose (1-2 sentences)
- Instructions or key bullets
- Links (if needed)

Note creation pointers (Curriculum - adding a Note):

- Curriculum Structure > Add Content Section > Ellipse menu > Add Note.
- Enter Title.
- If adding links, use the Word to HTML app:
  - Word menu link icon > URL and display text > Target: New Window.
  - Copy HTML output and paste into the Note HTML option, then Save.

Lippincott instructions:

- TBD: No Lippincott-specific tip sheet found in `content/tip sheets`.

### b. Test Template

Use this template when creating a new test and its question bank.

- Category name = Test name.
- Provider: Fairview eLearning.
- Section title = Test title.
- Question response types supported:
  - Yes/No
  - True/False
  - Multiple Choice (Single Answer)
  - Multiple Choice (Multiple Answer)
  - Text Only
  - Free Form (Essay)
  - Click On Image
- For Multiple Choice responses:
  - Add response choices and select Always Display.
- Optional fields:
  - Image upload
  - Answer explanation

Free Form Essay notes:

- Requires a grader (Test Grading queue).
- If using Auto-Pass, the Free Form Essay must be the only question.

### c. Material Template

Required fields (Create a Material tip sheet):

- Title
- Material Type: General
- Provider: Fairview eLearning
- Description
- Material Source:
  - URL (external site, PolicyTech anonymous link, YouTube, etc.)
  - Upload Material (PDF only)
- Location
- Player: select One Player / Player 2.0 as required
- Subject

Availability guidance:

- Curriculum-only materials: no availability needed.
- Standalone/self-enrollment materials: set Group = 00-Fairview.

Email:

- Select the appropriate response for the material.

### d. Curriculum Template

Core requirements (Ongoing Competency 2025 Review tip sheet):

- Availability Tab:
  - Group = 00-Fairview (00ALLFV).
- Structure:
  - All section sequence boxes should be 1 to avoid gating access.
  - Exception: Optional section can be first (1), Required section second (2).
  - All training items should have sequence 1.
- Learning object types:
  - Online Class, Material, Note, Test, or Observation Checklist.
  - No External Learning.
- Materials in curriculum:
  - Do not use Resources for uploads.
  - Use Material Source for URL or PDF.
  - PolicyTech links must be anonymous.

## 3. Validation Options

### a. Test

- Standard tests created in Test Engine with auto-graded response types.

### b. Graded test

- Free Form Essay questions require manual grading.
- Graders receive email notifications for pending grading.
- Grading path: Menu > Content Management > Test Grading.

### c. Checklist

- Observation Checklist (allowed learning object type in curriculum).
- No additional checklist-specific tip sheet found in `content/tip sheets`.

### d. Material

- PDF or URL only; upload PDFs via Material Source.
- Signature Required is enabled by default; uncheck if not needed.

### e. eLearning

- Use Online Class as needed (allowed learning object type).
- No additional eLearning-specific tip sheet found in `content/tip sheets`.

### f. ILT

- ILT supported via Online Class as needed.
- No ILT-specific tip sheet found in `content/tip sheets`.

### g. Considerations:

#### i. Multi-person sign off

- TBD: No specific tip sheet found.

#### ii. Case Study

- TBD: No specific tip sheet found.

#### iii. Manual completion bypass

- If Signature Required is turned off, learners use Mark Complete to finish a material.

## 4. How To: Create Material

1. Menu > Content Management > Catalog > Materials.
2. Search by keyword to ensure the material does not already exist.
3. Click Create Material.
4. Complete required fields:
   - Title
   - Material Type: General
   - Provider: Fairview eLearning
   - Description
   - Material Source (URL or Upload PDF)
   - Location
   - Player (One Player / Player 2.0)
   - Subject
5. Upload a PDF (if using Upload Material):
   - Choose File > Upload > Save.
6. Complete additional settings:
   - Availability:
     - None if curriculum-only.
     - Group = 00-Fairview for standalone/self-enrollment.
   - Email: select appropriate response.
7. Save.

Optional: remove Signature Required

1. Menu > Content Management > Catalog > Course Catalog.
2. Search for the material title.
3. Actions > Edit.
4. General tab > scroll to bottom.
5. Uncheck Required Electronic Signature.
6. Save.

## 5. How To: Create Test

Create a Category and Questions

1. Menu > Content Management > Test Engine.
2. Go to Question Bank.
3. Categories tab > Create New Category.
4. Enter Category Title (same as Test name) > Save.
5. Questions tab > Create New Question.
6. Enter the question and select response type.
7. Add response choices (Multiple Choice only) and set Always Display.
8. Choose correct answer.
9. Upload image (if needed) and add answer explanation (optional).
10. Select the Category created in Step 4.
11. Submit.
12. Repeat for all questions.

Create the Test

13. Test Engine > Create New Test.
14. Name the test the same as Category.
15. Provider: Fairview eLearning.
16. Select needed test settings > Next.
17. Structure page:
    - Add Section (Section Title = Test Title).
    - Add Question > search for Category.
    - Add All Questions > Done.
18. Next.
19. Availability: select All Users and Add. (For position-limited access, contact LMS team.)
20. Next through Pricing.
21. Confirm > Submit.

Auto-Pass for Free Form Essay (optional)

1. Menu > Content Management > Catalog > Course Catalog.
2. Search for the test title.
3. Actions > Edit.
4. General tab > scroll to bottom.
5. Check Auto-Pass.
6. Save.

## 6. How To: Create Curriculum

Use the curriculum template in section 2.d and these checks:

- Set Availability to Group 00-Fairview (00ALLFV).
- Build Structure with sections and items:
  - Keep section sequence as 1 (or Optional = 1, Required = 2).
  - Keep item sequence as 1.
- Add only permitted learning types: Online Class, Material, Note, Test, Observation Checklist.
- For Notes, use the Add a Note process from the Intro Template section.
- For Materials, use PDF/URL via Material Source; avoid Resources for uploads.

## 7. How To: Reversion Material

- Edit the existing material to create a new version (do not copy/replace).
- If the material is part of an auto-assigned curriculum, notify the LMS team after reversion.

## 8. How To: Reversion Test

- Edit the existing test to create a new version (do not copy/replace).
- If used in auto-assigned curricula, coordinate with the LMS team after reversion.

## 9. How To: Reversion Curriculum

- Edit the existing curriculum to create a new version (do not copy/replace).
- Notify the LMS team if the curriculum is auto-assigned; reversion breaks auto-assignment.

## 10. How To: Assign

Use the Learning Assignment Tool (LAT) for Ongoing Competency 2025 assignments.

1. Menu > Content Management > Learning Assignment Tool > Create Assignment.
2. Enter Title and Description:
   - Title format: Ongoing Competency 2025: Site/Area/Role.
   - Description is optional.
3. Select Training:
   - Choose all curricula applicable to the site/area/role (one assignment can include multiple curricula).
4. Next.
5. Select Assigned, Approved, and Registered (skip approval workflows).
6. Check Send Assign Training emails; uncheck Send Register Training emails.
7. Next.
8. Enter dates (typically due date only).
9. Next.
10. Select users by Group:
    - Select Users > filter to Group.
    - Enter Grade ID (e.g., 101205040 or 5040).
    - Select group(s).
11. Generate Initial User List.
12. Review list > Next.
13. Review final details > Submit.
14. Monitor assignment status and completion from the assignment detail page.
