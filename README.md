# Team Manager - A React + TypeScript Project for Team Management.
This project is a learning exercise focused on building a team management system using React and TypeScript. It allows users to create, manage, and join teams.

## Deployment
The application is deployed on Firebase. You can access it [here](https://team-manager-project-app-390.web.app/)

## Functionality 
* Registering users.
* Creating and editing teams.
* Possibility for logged in users to join teams and leave them.
* Owners of a team can approve or decline requests for joining the team. 

## Technologies 
* HTML, CSS, React, TypeScript.
* Backend - SoftUni Practice Server - https://github.com/softuni-practice-server/softuni-practice-server
* Libraries - react-hook-form, react-router-dom, yup 

## Pages
* Home page.
* Login page.
* Register page.
* Teams Catalog.
* Team Detail page.
* Create Team.
* Team Editor.
* My Teams page - view of the teams where the user is a member.

## Accessibility Control
* Guest users can register and browse the catalog and details pages.
* Registered users can create teams and edit them, send requests to join another teams, leave a team, and access page of the teams where the user is a member.
* Only the creator of a team can edit and manage (approve, decline, remove) users in the team.