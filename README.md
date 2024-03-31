# Mongo-Mongoose Social Network API back-end
uri bootcamp HW 18 - Social Networking API Back End Only - MJS 4.1.24   
Michael Sheliga - This repo is for the University of Richmond (URI) coding bootcamp.  
Starter Code: Started with URI Class Part 18. Class-Student-Assignment 18-28 Mini=Project. 

## Link to Repo, Screenshot(s) and/or Video(s)  
Link to GitHub Repo: https://github.com/msheliga1/uriHW17GistRegexTutor      
<!-- Link to Video on Google Drive: https://drive.google.com/file/d/15i1SyN7UNKhFnAYD3HnOhx8d3yip52xh/view  -->  
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
    NPM: Do "npm init --y" BEFORE "npm install" to avoide ENOENT err.
         Do "npm install" (or "nmp i")
         Do "npm run seed" 
            - Corrected insertOne to create. Fortunately, I did this in class per Andrew!
    Commit and push files back to gitHub/branch. (For multi-programming: Issue pull request, approve, merge).  
    Deploy code (Settings...CodeAndAnimation->Pages on left, GitHub Pages->Branch->main, save)  
        - Deployed code name always msheliga1/github.io/RepoName !!  
    Make Sure it Works   
    Insert Screencastify (Chrome) Video and/or Screenshot X2 of deployment into readme file. 
  
## Tools and Technologies Used   
    Github - Branches not needed, but could use.   
        - GitIgnore to keep NPM libraries out of gitHub repo.   
    GIST - A totally foreign way of sharing info such as:   
        - code snippets  
        - tutorials   
        - directions : WOULDN"T DIRECTIONS FOR THIS PROJECT BE GREAT.   
        - other public or private info of your choosing.  
    Location: My gists are at: https://gist.github.com/msheliga1 . 
        - If there is an easy way to go from your github home page to 
            your gists, NOT A ****ing person thought to include this info ANYWHERE (easy to find.)
        - Yet another thing neither GitHub nor URI tells you!!!   
    Regex - Regular Expressions are a commoon CS way of searching.   
 

## Acceptance Criteria   
-----------------------   
Tutorial with TOC, links and descriptions, using GIST.   

Regex Tutorial
open the tutorial => see 
    a descriptive title and introductory paragraph explaining the purpose of the tutorial, 
    a summary describing the regex featured in the tutorial, 
    a table of contents linking to different sections that break down each component of the regex and explain what it does, and a section about the author with a link to the author’s GitHub profile
click on the links in the table of contents => taken to the corresponding sections of the tutorial
Each section of the tutorial: Has a detailed explanation of what a specific component of the regex does
End of the tutorial: has a section about the author and a link to the author’s GitHub profile

