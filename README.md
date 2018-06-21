# Personal site template
因為想做個個人網站但找不到喜歡的樣板，那就自己刻吧💪

## Demo
https://x3388638.github.io/

## Screenshot
![](https://i.imgur.com/MaCJWFy.png)
- Profile image
- Social media link
- About
- Education

<hr>

![](https://i.imgur.com/N4vClhf.png)
- Skill
- Work

<hr>

![](https://i.imgur.com/LOYXIve.png)
- Project
- Footer

## Installation
### 1. Clone
```
git clone https://github.com/x3388638/x3388638.github.io.git -b template myAwesomeSite
```

### 2. Install node modules
```
cd myAwesomeSite
npm install
```

### 3. Run
```
npm start
```

### 4. Settting
#### 4.1 If you want to deploy to GitHub page
1. Create your own repo
2. Reset git remote
3. Update `homepage` in `package.json`
4. Update the `deploy` script in `package.json`
```
"deploy": "gh-pages -b master -d build" // deploy the project to master branch

// or

"deploy": "gh-pages -d build" // deploy the project to gh-pages branch
```

#### 4.2 Personal info
Fill out the `/src/settings.js`

### 5. Update the content
1. Change profile image at `/src/profile.jpg`
2. Chagne favicon at `/public/favicon.ico`
3. Update `/public/content/about.md`
4. Update `/public/content/education.json`
5. Update `/public/content/skill.json`
6. Add works in `/public/content/works/list.json`, and add the `{{ key }}.md` for each work.
7. Add projects in `/public/content/projects/list.json`, and add the `{{ key }}.md` for each project.

### 6. Build project
```
npm run build
```

### 7. Deploy to GitHub page
```
npm run deploy
```
