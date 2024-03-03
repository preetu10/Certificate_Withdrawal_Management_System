# Certificate Withdrawal Management System

### Rules:

- First, clone the project on your local PC. You just copy this command and paste it into your cmd (Choose folder. Open CMD):
  `git clone https://github.com/momo2396/Certificate_Withdrawal_Management_System.git`
- For installing all the packages I have installed with this project, run this command:
  `npm install -f`

- Create your own branch: (commands)

  1. `git checkout -b your_branchName`
     (e.g.; git checkout -b simu) 2.`git push -u origin your_branchName` (e.g.; git push -u origin simu)

- For security, check all the branches: (command)
  `git branch`
- (V.V.I) Before starting work, make sure that you have merged the main branch with your branch. Simply run these commands:
  1.  `git checkout main`
  2.  `git pull`
  3.  `git checkout your_branchName `
      (e.g.; git checkout simu)
  4.  ` git merge main`
- Before writing code, make sure that you are at your branch. To switch to your branch:
  `git checkout your_branchName `
  (e.g.; git checkout preety)
- When you wanna push your code, just follow these commands:
  1. `git add .`
  2. `git commit -m "meaningful commit message"`
  3. `git checkout main`
  4. `git pull`
  5. `git checkout your_branchName (e.g.; git checkout simu)`
  6. `git merge main`
  7. `git push`

#### Don't push your code at the main branch. Only make pull request, if github does not create it.
