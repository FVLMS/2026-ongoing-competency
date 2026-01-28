---
title: "How To: Create Test"
description: "Step-by-step test creation in Cornerstone."
---

# How To: Create Test

This tipsheet will show you how to add a Test to the LMS. Tests can be a standalone learning object for self-enrollment/assignment or part of a Curriculum.

## Create a Category and Questions

1. Navigate to Menu > Content Management > Test Engine.
2. Click on the *Question Bank* button.  
![question1](https://mnfhs.sharepoint.com/sites/LearningManagementSystem/Shared%20Documents/OngoingCompetency/create-questions-1.png)
3. Click on the *Categories* tab and click the *Create New Category* button.  
![question2](https://mnfhs.sharepoint.com/sites/LearningManagementSystem/Shared%20Documents/OngoingCompetency/create-questions-2.png)
4. Enter the test title as the *Category* Title and click the *Save* button. **It is very important to title the category the same as what you will name the test**.  
![question3](https://mnfhs.sharepoint.com/sites/LearningManagementSystem/Shared%20Documents/OngoingCompetency/create-questions-3.png)
5. Click on the **Questions** tab and click the *Create New Question* button.  
![question4](https://mnfhs.sharepoint.com/sites/LearningManagementSystem/Shared%20Documents/OngoingCompetency/create-questions-4.png)
6. Enter your test question
7. Select the type of question (Response Type). Response Types include the following: Yes/No, True/False, Multiple Choice/Single Answer, Multiple Choice/Multiple Answer, Text Only, Free Form (Essay), Click On Image
8. Add your response choices (applicable only to Multiple Choice Response Types) and check the *Always Display* option for each *unless* you would like users to see different sets of possible answers. 
9. Check the Correct Answer box for the correct answer.
10. Upload an image for the test question (if applicable).
11.	Provide an Answer Explanation (if applicable).
12.	Select the Category created in Step 4.
13. Submit.
14. Repeat for all questions.  
![question5](https://mnfhs.sharepoint.com/sites/LearningManagementSystem/Shared%20Documents/OngoingCompetency/create-questions-5.png)

---

## Create the Test

Instead of creating a new test you can copy the **Ongoing Competency 2026: [Site] [Unit/Specialty] [Role] [Title]** test and save some time. All you need to do is:

1. From the Catalog > Tests page, copy the **Ongoing Competency 2026: [Site] [Unit/Specialty] [Role] [Title]** test
2. On the General page: Edit the Title, Description, and Instructions
    - Optional: Adjust Attempts Allowed, Review options, and Lockout
3. On the Structure page: edit the Test Details (if desired), remove the Placeholder question, add the questions you previously created
4. Save the Test without changing availability or pricing

### To create a test from scratch: 

1. From the Catalog > Tests page, click the *Create New Test* button
2. Fill out the General page:
    1. Enter a title (e.g. Ongoing Competency 2026: [Site] [Unit/Specialty] [Role] [Title])
    2. Set Provider to *Fairview eLearning*
    3. Enter a Description
    4. Optional: Adjust Attempts Allowed, Review options, and Lockout
    5. Enter Instructions
    6. Click the *Next* button
9. Fill out the Structure page:
    1. On the Structure page, edit the default test settings if desired
        - If you have a free-form essay question, you must add graders.
    3. Add a Section and enter a Title (e.g. "Questions")
    4. Click the *Add Question* button on the Section
    5. Search for your Category title to filter the question list. When creating the questions you should used a Category that matches your test title (see above).
    6. Click the *Add All # Questions* button
    7. Click the *Next* button
19. Leave Availability blank unless this test needs to be added to the catalog for self-enrollment outside of the Ongoing Competency program
20. Click the *Next* button until you reach the last section
21. Click the *Submit* button

---

## Configure Auto-Pass for Free Form Essay (optional)

This is not reccomended as it adds complexity, and no checks on what learners actually enter.

1. Make sure you added sysadmin as the grader when creating the test
2. Navigate to Menu > Content Management > Catalog > Course Catalog
3. Search for the test title
4. Click on Actions > Edit
5. Scroll down on the General tab and check the *Auto-Pass* checkbox
7. Click the *Save* button
