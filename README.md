# Forge Atlaskit Issue View Modal Focus Flicker Bug

Adaption of the `forge-jql-editor-custom-ui` example app to recreate the bug with the issue view modal focus flicker. Follow the same instructions in the example below to run this app and install on your local instance. 

## The Focus Flicker Bug
* The bug occurs when the Jira Issue View Modal is opened from an existing Atlaskit modal, causing the two open modals to switch the focus between them in a loop.
* This is visible as the focus state of the buttons on the Issue View Modal visibly flickering when tab is used to try navigate the modal.
* Adding a console log to `onFocus` of the buttons on the Atlaskit modal shows that the focus is being swapped between the two modals by repeatedly printing to the console.

## Forge App to recreate bug
* [Loom demo video](https://www.loom.com/share/a8e1e92d567e4794989f36407ca85c14)
* Works by grabbing the issues in the current project and using the first issue returned as the input for the Jira Issue View Modal
* Follow on-page instructions to view the bug

# Set up instructions from `forge-jql-editor-custom-ui` example app

[![Atlassian license](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square)](LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

This project contains a Forge app written in Javascript that displays a JQL editor in a Jira project page. 

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

![JQL Editor app for Jira](./docs/images/example.gif "JQL Editor for Jira")

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start
- Install dependecies (inside root directory)
```
npm install
```
- Install dependencies (inside of the `static/app` directory)::
```
npm install
```

- Modify your app by editing the files in `static/app/src/`.

- Build your app (inside of the `static/app` directory):
```
npm run build
```

- Register the app you didn't create so you can run commands for it, by running:
```
forge register
```

- Deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback for 
the Forge platform.

For developers outside of Atlassian looking for help with the JQL editor, or to report issues, [please make a post on the community forum](https://community.developer.atlassian.com/c/atlassian-ecosystem-design).
We will monitor the forums and redirect topics to the appropriate maintainers.

## Contributions

Contributions to Forge JQL Editor App are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

Copyright (c) 2021 - 2022 Atlassian and others.
Apache 2.0 licensed, see [LICENSE](LICENSE) file.

<br/>

[![With thanks from Atlassian](https://raw.githubusercontent.com/atlassian-internal/oss-assets/master/banner-with-thanks-light.png)](https://www.atlassian.com)
