# What is GIT : <br>
is a DVCS (Distributed Version Control System) that stores data in your local pc and each time you save a changed version of your project Git creates a snapshot that allows you to **Tracking Changes**,, Git was created since 2005 and become become one of the most utilized VCS in the world in the same year

> Files in Git can reside in three main states: committed, modified and staged.
 <br>
 <br>
 <hr>
 
# Download : <br>
you can get GIT [Here](http://git-scm.com/download/)
 <br>
 <br>
 <hr>
 
## How to clone your repository with your terminal and VS code: <br>
 - by using command 'git clone (your repo link)' this will add a copy of your repo to your computer
 - by jumping betwin files in terminal with `cd (your repo name.git)`
 <br>
 <br>
 <hr>

## How to push (publish) projects to GH :

1. ***A***lways use `git status` it helps you know what projects must to modify before push

2. ***Y***ou have to choice were you want to save your work by using `git add (the file name)`

3. ***T***hen you have to confirm the save and add comment to tell what changes you made (it will help you and your teamamtes to understand whats hapined) by the command `git commit -m"(the reason will be here)"`

4. ***N***ow you are ready to push your work and puplish on **Git Hub** *notice: that if you type `git statue` it will tells you that **"nothing to commit, working tree clean"** and thats mean every thing is ready to push..
you can start push by typing command `git push origin master` it will ask you to input your GH user name then the password like this:<br>
***Username for 'https://github.com':*** <br> 
***Password for 'https://theUserName@github.com':*** <br>
***A***fter that it will continue the push proces till complete it 
And thats What called **A-C-P** (add - commit - push)

> By using 'git remote -v' you can view all the remote URLs next to their short names
<br>
<br>
<hr>

### Erors And Slove : <br>
***S***ometimes it faild with push proces!! and there is many resons ill mention some: <br>

-  `fatal: Authentication failed for 'https://github.com/username/repoName.git/' :` 
<br>
<br> ![logo]("https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png")<br>
*you had to double cheak on your input username and password*
<br>
<br>
<br>
-  `error: failed to push some refs to 'https://github.com/username/repoName.git/'` 
<br>
<br> ![logo]("https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png")<br>
*it hapend when you edit on files from git hub website and want to push somethings, you have first to pull changes to your local pc by **`git pull origin master`**
and then re type the command `git push ...`*
 <br>
 <br>
 <hr>

you can contact me any time :
<a href="https://github.com/3madov-77"> <img href="https://camo.githubusercontent.com/338c94ae4c561c07911004dffb4455bf39f10155/68747470733a2f2f6769746875622e6769746875626173736574732e636f6d2f696d616765732f6d6f64756c65732f6c6f676f735f706167652f4769744875622d4d61726b2e706e67"></a> Or [Here](https://github.com/3madov-77)
