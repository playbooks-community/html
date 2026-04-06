# Overview

This folder contains small starter projects across roughly 60 different frameworks.
The starter projects are intended for Playbooks which is company / platform we run.
Each starter is meant to reflect a basic project configuration based on the installation instructions for the primary framework.
We then add a layer of deployment context (ie basic, docker, compose) to demonstrate the various ways a user can deploy projects on Playbooks.

## Playbooks

Playbooks is a digital marketplace / creator economy for developers.
It exists to help developers find inspiration, accelerate their workflow, share knowledge, and monetize their expertise.
It is meant to complement GitHub and the rest of the developer toolchain, not replace them.

## Objective
Our goal is to keep every project in this repository up to date with the latest code from the primary framework.
If additional configurations are available from the primary framework, we should create a project that reflects that configuration.

## Configurations
For each project, we want to emulate a lightweight, performant production deployment.
That means placing all the heavy lifting in the build phase of the docker configurations.
That way, spinning up each docker project is quick / simple after the initial build.

## Organization
The projects in this repository are organized by framework.
We then name the projects based on their deployment configuration and any additional configuration specs.

## Preferences
Please request permission before creating new projects.
Please keep all docker configurations limited to one stage.
Please make sure each project runs before confirming completion.

## playbooks.json

Each project in this repository includes a `playbooks.json` configuration file at its root.
This file is read automatically by Playbooks when connecting or syncing a play.

### Required Fields

- **`name`** — The project name (matches the directory name)
- **`uuid`** — A unique identifier for the play
- **`variant`** — The project variant; all projects here use `"starter"`

### Reference Schema

```json
{
  "name": "",
  "uuid": "",
  "variant": "starter"
}
```

Full schema reference: https://www.playbooks.xyz/docs/intro/playbooks-json.md
