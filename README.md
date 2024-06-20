# day-scheduler
[Deployed Version](https://www.day-scheduler.ca)

[Mirror Version](https://www.dayscheduler.ca)

FEATURE ROADMAP: V1 Complete
    - Remove tasks from list (complete)
    - local storage of task list (complete)
    - "begin" button functionality: 
        - loads new page (complete)
        - loads list with timers & real time (complete)
        - display current task (complete)
        - interactable (button or onclick) to 'complete' task (complete)

ADDITIONAL FUNCTIONALITY:
    - Button to view history of completed tasks
        - Reformat cart tasks to have date object (complete)
        - Reformat time input to use date object (complete)
    - MUI time selector when adding or editing tasks (complete)

LOW PRIORITY:
    - useCallback and react memo to optimize task list

INSTRUCTIONS TO RUN LOCALLY:
    - Download project
    - [ npm install ] from root directory
    - [ npm run start ]

# Summary
day-scheduler is a productivity app, created from scratch using a React.js front-end.  

Tasks are added to a daily cart, from an editable quick-list of items. Upon clicking “**begin**” from the cart menu, the app will display the task nearest to it’s completion time, granting the opportunity for the user to think about just one task at a time, thus increasing productivity. 

During the day, returning to the items page and viewing the cart will allow you to see completed items.

The items list allows for edits and provides an MUI time selector for easy use.

# Preview
### Homepage
![image](https://github.com/Jobo0/day-scheduler/assets/36495363/d5e5ed19-a957-4587-9351-caab5b16e253)

### New Task
![image](https://github.com/Jobo0/day-scheduler/assets/36495363/7442ba48-40ba-4c89-b510-95a8cfd44a47)

### Task Cart
![image](https://github.com/Jobo0/day-scheduler/assets/36495363/1561b232-0133-490f-a15e-5736166a2e80)

### Begin Day
![image](https://github.com/Jobo0/day-scheduler/assets/36495363/889bc557-9781-4a1b-a36d-76b456a28b67)

### Completing Tasks
![image](https://github.com/Jobo0/day-scheduler/assets/36495363/971b7e07-434c-46ca-989a-6d95a50ae01a)
![image](https://github.com/Jobo0/day-scheduler/assets/36495363/f1876fca-04ee-47c2-b23c-e2ac719efec5)
![image](https://github.com/Jobo0/day-scheduler/assets/36495363/cfe4dc15-a79f-4cc7-9ca6-60f9efbbbb50)

### Checking Completed Tasks
![image](https://github.com/Jobo0/day-scheduler/assets/36495363/940da74e-864b-418b-8c35-38849902040b)

