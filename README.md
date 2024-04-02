# Mongo-Mongoose Social Network API back-end
uri bootcamp HW 18 - Social Networking API Back End Only - MJS 4.1.24   
Michael Sheliga - This repo is for the University of Richmond (URI) coding bootcamp.  
Starter Code: Started with URI Class Part 18. Class-Student-Assignment 18-28 Mini=Project. 

## Link to Repo, Screenshot(s) and/or Video(s)  
Link to GitHub Repo: https://github.com/msheliga1/hw18MongoSocialAPI     
Link to Video on Google Drive: 
https://drive.google.com/file/d/1jcrSLjZJ3evW8Ss2wuIrIy4JPc4SDk_M/view 
<!---  Link to deployed github.io site. https://msheliga1.github.io/uriHW9NodeReadmeGen --->  

[Link to Acceptance Criteria ](#acceptance-criteria)   

## Project Goals     
Use node, SQL and sequalize to create a back-end for an e-commerce site.  

========================================================   
## Technical Project Details    
========================================================    
## Github:   
    Create Repo (github, repositories => New)   
        - Dont Make this a shared repo.  
    Clone the entire starter gitHub repo  
        -- Create a new, TOTALLY blank repo in GitHub  (no readme. It will screw things very badly!)
        -- Clone the starter repo (under the hwXX directory) to your local machine
        -- Rename the starter repo if you wish.
        -- Set the remote path: git remote add <ori> <HTTPS path to remove>   
            -- Be 100% sure NOT to use the SSH link. Use the HTTPS lank!  
        -- Push the local repo to gitHub: git push ori main   
    OR ... Copy directories and sample files from prior project (or create from scratch).  
        -- No starter code. No need for copying one file at a time via command line.  
        -- Alternate: Go to Demo (root) folder, download zip, moving to local repo, unzip - likely fastest method.     
        -- Took a long time to figure out how to clone an entire repo!
    OR ... create HTML, Node, Develop, CSS and javascript, etc. from scratch, and copy sample files ... worked well.
        Branches (Optional for single programmer projects)  
        - Could do work in branches. (new branch inside gitHub)    
        - All branch names will begin with the initials of the main person working on the branch.  
        - Must update local repo after adding a branch  
        - Switch to branch: From cmd line git switch <branchname>   
        - Once changes committed, git push origin <branchname>  
            - for pushing to remote test branch: git push origin local_branch:remote_branch  
        - Issue a pull request in gitHub.  
        - Click "Pull Requests" in top menu bar (3rd from left).  
        - Click "review Required" in small font below pull request name.  
        - You may approve your own request.  
    OR .... create blank repos, copy files using Windows Drag and Drop
        - mkdir hw18/hw18DetailedName 
        - cd into it
        - git init
        - Use windows 10 to copy entire contents of uri repo subdirectory 18-28 mini=project (14-28 mp). 
            - Note that this is NOT a full repo, so we don't clone it.
        - In GitHub: create a TOTALLY empty new github repo
        - Copy its HTTP name
        - In git, add the remote repo using: git remote add ori CopiedGitHubHttpName (else refspec error). 
        - Had to change its name from master to main in the 'git init' directory.  
            - git branch -m <oldname> <newname> (git branch -m master main)
        - Do git add --a (should add all files), git commit -m "msg", git push ori main
            - If refspec error, be sure you changed master to main.

    Create a nice long READ.md file!!  (Modify prior projects.)   
    Determine working mp1428 folder: 
        Read the readme.  Found new code in Main. Found my code in Develop (sounds simple, but took PITA while.)
    NPM: Do "npm init --y" BEFORE "npm install" to avoide ENOENT err.
         Do "npm install" (or "nmp i")
         Do "npm run seed" 
            - Corrected insertOne to create. Fortunately, I did this in class per Andrew!
         Do "npm run dev". Server came up first time. 
    Prior Project:
        Familiarized myself with api/students and api/students/:id routes. Lots and lots of data. 
        Familiarized myself with other routes and general course has [students], student has [assignments] layout. 
        Noted that routes exist for creating courses, etc. 
    Be Sure to BackUp: 
        Before beginning work, copied entire Main to MainOrig. Also saved a copy of README.md. 
    Try running new code; 
        npm i, npm run seed (had to correct insertOne to create), and npm run dev all worked. 

    Understand new models. 

    Commit and push files back to gitHub/branch. (For multi-programming: Issue pull request, approve, merge).  
    Deploy code (Settings...CodeAndAnimation->Pages on left, GitHub Pages->Branch->main, save)  
        - Deployed code name always msheliga1/github.io/RepoName !!  
    Make Sure it Works    
    Insert Screencastify (Chrome) Video and/or Screenshot X2 of deployment into readme file.  
  
## Tools and Technologies Used   
    Github - Branches not needed, but could use.    
        - GitIgnore to keep NPM libraries out of gitHub repo.    
    NPM - Node package manager  
    MongoDB - No-SQL database  
    Mongoose - ORM for MongoDB   
    moment - date/time routines including formatting.  

## Acceptance Criteria   
-----------------------       
Social network API (back-end routes returning JSON).   
Server started, Mongoose models are synced to the MongoDB database  
API GET routes in Insomnia for users and thoughts. Data displayed in a formatted JSON  
API POST, PUT, and DELETE routes, create, update, and delete users and thoughts in my database  
API POST and DELETE routes create and delete reactions to thoughts   
""                  add and remove friends to a user’s friend list   

## Models (Not Tables) and Data Relationships.  
------------------------------------------------  
User has many thoughts which have many reactions. Users also have many friends.  
User  
    username: String Unique Required Trimmed  
    email: String Required Unique validated email address (look into Mongoose's matching validation)  
    thoughts: Array of _id values referencing the Thought model  
    friends: Array of _id values referencing the User model (self-reference)  
    Schema Settings virtual: friendCount: length of the user's friends array field.  
Thought    
    thoughtText: String Required Must [1 - 280] characters  
    createdAt:  Date default value is current timestamp  
                Getter method to format the timestamp on query  
    username: String Required  
    reactions (These are like comments)  
        Array of nested documents created with the reactionSchema  
    Schema Setting virtual: reactionCount: length of the thought's reactions array field.  
Reaction (SCHEMA ONLY)   
    reactionId: Mongoose's ObjectId data type.  
                Default value is new ObjectId  
    reactionBody String Required 280 character max  
    username String Required  
    createdAt: Date default value is current timestamp  
               Getter method to format the timestamp on query  
    Schema Settings - This will not be a model, but rather will be used as  
        the reaction field's subdocument schema in the Thought model.  

API Routes  
------------  
/api/users  
    GET all users  
    GET a single user by its _id and populated thought and friend data  
    POST a new user:  
    {  // example data  
      "username": "lernantino",  
      "email": "lernantino@gmail.com" }  
    PUT to update a user by its _id  
    DELETE to remove user by its _id  
BONUS: Remove a user's associated thoughts when deleted.  

/api/users/:userId/friends/:friendId  
    POST to add a new friend to a user's friend list  
    DELETE to remove a friend from a user's friend list  

/api/thoughts  
    GET all thoughts  
    GET a single thought by its _id  
    POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)  
    {  // example data  
        "thoughtText": "Here's a cool thought...",  
        "username": "lernantino",  
        "userId": "5edff358a0fcb779aa7b118b" }  
    PUT to update a thought by its _id  
    DELETE to remove a thought by its _id  
  
/api/thoughts/:thoughtId/reactions  
    POST to create a reaction stored in a single thought's reactions array field  
/api/thoughts/:thoughtId/reactions/:reactionId  
    DELETE to pull and remove a reaction by the reaction's reactionId value  
BONUS Route/ /api/thoughts/:thoughtId/reactions/ 
    GET all reactions for a thought  
