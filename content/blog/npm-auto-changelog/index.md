---
title: Automatic release notes in any NPM project
date: '2020-04-26T22:40:32.169Z'
description: Ever felt the anxiety of pushing software to production while not 100% sure you know all the changes that release contains? I have. Let's fix that.
---

Ever felt the anxiety of pushing software to production while not 100% sure you know all the changes that release contains? I have. In doing so, I also felt the anxiety of some unknown change causing an error. Or worse, crashing a customer-facing production service.

Release notes (usually contained in a _CHANGELOG.md_) easily solve that problem, giving complete visibility into every software release. Manually compiling release notes requires time and effort I would rather spend improving my code, though, and I know I will forget something. Thankfully, this process is easily automated.

Enter: _Conventional Commits_.

By aligning all Git commit messages and descriptions to a standardized format, release notes can be generated automatically in a few seconds, new version numbers determined, and bump files updated automatically.

_The next section dives deeper into how each of the tools works. [Skip to **TL;DR** for installation instructions](#tldr)._

## How it works

### 1. Consistent Commit Messages

The first step for automated release notes is using consistent commit message and description formats. This allows the _CHANGELOG.md_ generator to differentiate between commit types, whether a commit is related to an issue, and especially if the commit contains breaking changes.

Three parts make up our commit flow: (1) use Conventional Commit format, (2) enable easy Git hook integration with `husky`, and (3) enforce commit message validation based on Conventional Commit rules.

#### Conventional Commits: Standardizing commit messages

Based on guidelines designed by the Angular team, [Conventional Commits](https://www.conventionalcommits.org/) is a precise set of rules ensuring commit messages include important context and details easily consumed by others.

[Read their documentation](https://www.conventionalcommits.org/) to learn about the format's syntax and requirements, they are required for successful commit message validation.

#### Husky: Programmatic git-hooks

Before adding custom linting rules for commit messages, let's install [`husky`](https://www.npmjs.com/package/husky). Described as "Git hooks made easy", this package allows easier setup of Git hooks through our _package.json_ file, keeping development tools more easily visible for outside eyes.

Husky works by automatically adding script files in the _.git_ folder. Upon execution of Git a command, Husky's script will be called, which will in-turn call the scripts specified in the project's _package.json_ file.

#### Commitlint: Enforce git commit message formats

The final step for commit message validation: linting. Using [`commitlint`](https://www.npmjs.com/package/commitlint) in tandem with `husky` allows easy integration of pre-made lint rules, specifically following Conventional Commit standards.

#### Commitizen: Easy interactive utility for committing

Bonus: Especially helpful for onboarding developers unfamiliar with Conventional Commit standards, Commitizen presents a command line wizard for pushing a Conventional-Commits-compatible commit message.

While not required, this helps discovery of more arguments and ways to configure commits. It shines when needing to specify breaking changes or other less frequently used commit details.

### 2. Generate Release Notes

Now the fun part. You're following all the commit rules and guidelines established above, and want a _CHANGELOG.md_ that you finally don't have to type manually anymore.

#### Standard version

The package [`standard-version`](https://www.npmjs.com/package/standard-version) does just that, and a whole lot more. It will:

- Generate a changelog from all commits following Conventional Commit standards
- Bump any tracked version numbers (in accordance with Semantic Versioning)
- Commit all changes to your Git repo
- Tag that commit with the new version number.

All of this is done by `standard-version` locally, leaving you to push the changes when you are ready. This allows control over specific processes and verification of its outputs.

**Alternative: semantic-version**<br/>_An alternative to `standard-version` is `semantic-release`. Which one you choose depends on your development pipeline. If you prefer or need manual control of versioning, release notes, or other pieces then `standard-version` is the right solution for you. If instead you have a complete CI/CD pipeline and don't need granular control over versioning, `sematic-release` may fit better._

## <a name="tldr"></a>TL;DR

1. (If not already created) Initialize new NPM config: `npm init`
2. Install and configure packages:<br/>`npm i -D husky @commitlint/{config-conventional,cli,prompt} commitizen cz-conventional-changelog standard-version`

3. Add a new file in the root of your project called _commitlint.config.js_, with this content:

```JS
// commitlint.config.js
module.exports = {extends: ['@commitlint/config-conventional']};
```

4. Add these two lines under the `scripts` key of your _package.json_:

```JSON
// package.json
"commit": "./node_modules/.bin/git-cz",
"release": "standard-version"
```

5. Append husky config at end of _package.json_:

```JSON
// package.json
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
},
```

6. Append commitizen config at end of _package.json_, to use Conventional Commits rules:

```JSON
// package.json
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
},
```

7. Finally, append `standard-version` config at end of _package.json_:

_This controls which headers are visible/hidden from generated CHANGELOG.md_<br/>

```JSON
// package.json
"standard-version": {
  "types": [
    { "type": "chore", "section": "Others", "hidden": false },
    { "type": "revert", "section": "Reverts", "hidden": false },
    { "type": "fix", "section": "Bug Fixes", "hidden": false },
    { "type": "feat", "section": "Features", "hidden": false },
    { "type": "docs", "section": "Docs", "hidden": false },
    { "type": "style", "section": "Styling", "hidden": false },
    { "type": "refactor", "section": "Code Refactoring", "hidden": false },
    { "type": "perf", "section": "Performance Improvements", "hidden": false },
    { "type": "test", "section": "Tests", "hidden": false },
    { "type": "build", "section": "Build System", "hidden": false },
    { "type": "ci", "section": "CI", "hidden": false }
  ]
}
```

8. **VERIFY**: With all those packages and configurations installed you're ready to go! Let's go through the commands and make sure everything works.

_Test failed commit message_:<br/>First let's ensure commit linting is functional. Make a change in your code, then commit with a (now invalid) message like: "saving changes". You should see an error.

_Commit proper message with tool_:<br/>Now, let's do a proper commit by using our new command line tool: `npm run commit`

9. **FINISH**: Generate initial release notes

Commit linting is working, there is a fresh new commit in the repo's history waiting to be effortlessly printed onto release notes using the new command, `npm run release`.

- Since this is the first release using this tool, append the command with `-- --first-release`, so it looks like `npm run release -- --first-release`.
- To try out the commands first before having any changes committed, attach `--dry-run` onto the command, it will look like: `npm run release -- --first-release --dry-run`.
- Upon completion, `standard-version` gives the Git command to copy + paste for pushing the shiny new CHANGELOG.md, bumped version numbers, and tagged release.

---

<br/><sup>Resources:</sup><br/>
<sup>[Conventional Commits](https://www.conventionalcommits.org/)</sup><br/>
<sup>[The way to fully automated releases in open source projects](https://medium.com/@kevinkreuzer/the-way-to-fully-automated-releases-in-open-source-projects-44c015f38fd6)</sup><br/>
<sup>[Automate JavaScript project versioning with commitizen and standard-version](https://medium.com/tunaiku-tech/automate-javascript-project-versioning-with-commitizen-and-standard-version-6a967afae7)</sup>
