---
title: "How To: Create Curriculum"
description: "Build a curriculum using Fairview standards."
---

# How To: Create Curriculum

Use the curriculum template and these checks:

Curriculum Template
When you have created your Introduction material and the validation options, you can copy and modify the Curriculum template.

1. Navigate to the *Menu > Content Management > Catalog* page and click the *Curriculum* link
2. Search for **Ongoing Competency 2026: [Site] [Unit/Specialty] [Role] [Title]**
3. Click the three dots on the right and then click the *Copy Curriculum* button  
![curriculum1](https://mnfhs.sharepoint.com/sites/LearningManagementSystem/Shared%20Documents/OngoingCompetency/create-curriculum-1.png)
4. General Page:
    1. Enter the *Title* according to this syntax: **Ongoing Competency 2026: [Site] [Unit/Specialty] [Role] [Title]**
    2. Add a *Subject* by clicking the *Add Subject* button, searching for the audience's specialty, and clicking the specialty title
5. Click the *Next* button until you reach the *Structure* page
6. Structure page:
    1. Replace the template introduction material with the introduction material for this competency
        1. Click the trash can icon on the right side of the object, and then click the *Yes* button to confirm
        2. Click the *Add Training* button on the *Introduction* section
        3. Search for your introduction material, click the *Add* link, scroll down and click the *Add* button
        4. Check the four boxes on the training object  
![curriculum4](https://mnfhs.sharepoint.com/sites/LearningManagementSystem/Shared%20Documents/OngoingCompetency/create-curriculum-4.png)
        5. Ensure the training is indented inside the *Introduction* section and is set to "1" for sequence  
![curriculum3](https://mnfhs.sharepoint.com/sites/LearningManagementSystem/Shared%20Documents/OngoingCompetency/create-curriculum-3.png)
    2. Replace the template test in the *Validation Options* section with your validation options
        1. Click the trash can icon on the right side of the object, and then click the *Yes* button to confirm
        2. Click the *Add Training* button on the *Introduction* section
            - If you are adding a checklist, click the three dots and click the *Add Checklist* button  
![curriculum2](https://mnfhs.sharepoint.com/sites/LearningManagementSystem/Shared%20Documents/OngoingCompetency/create-curriculum-2.png)
        3. Search for training object(s), click the *Add* link, scroll down and click the *Add* button
        4. Check the four boxes on the training object(s)  
![curriculum4](https://mnfhs.sharepoint.com/sites/LearningManagementSystem/Shared%20Documents/OngoingCompetency/create-curriculum-4.png)
        5. Ensure all of the validation options are indented inside the *Validation Options* section and are set to "1" for order  
![curriculum5](https://mnfhs.sharepoint.com/sites/LearningManagementSystem/Shared%20Documents/OngoingCompetency/create-curriculum-5.png)
            - The *Validation Options* section itself should be set to "2" for order so that users must complete the introduction material before proceeding to validation
            - If you have a complex build, see the note below
        6. Click the *three dots* button on the right side of the *Validation Options* section and click the *Edit* button  
![curriculum6](https://mnfhs.sharepoint.com/sites/LearningManagementSystem/Shared%20Documents/OngoingCompetency/create-curriculum-6.png)
        7. Set the *Required* field to "1" and click the *Save* button  
![curriculum7](https://mnfhs.sharepoint.com/sites/LearningManagementSystem/Shared%20Documents/OngoingCompetency/create-curriculum-7.png)
7. Click the *Save* button to finish creating your Curriculum

---

## Complex Build

If you have a combination of items that need to be completed to validate a competency, you will likely need to add sections with multiple items inside the *Validation Options* section. 

E.g. users are required to complete [a lesson and a test] OR [a checklist]. To configure this you need to set your structure like the below example. If you put all three items in the overall structure and then set it to *1 of 3* required, just taking the eLearning would complete the curriculum. Or if you set it to *2 of 3* required, they would have to complete the checklist AND one additional item. The configuration below allows the checklist OR a combination of the other two items to complete the curriculum.

    Validation Options [structure] (1 of 2 required)  
        [checklist]
        Test [structure] (2 of 2 required) 
            [eLearning]  
            [test]
