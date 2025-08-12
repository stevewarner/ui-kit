module.exports = {
  branches: ["main"], // or "master" if that's your default branch
  repositoryUrl: "https://github.com/stevewarner/ui-kit",
  plugins: [
    "@semantic-release/commit-analyzer", // reads commit messages to determine bump type
    "@semantic-release/release-notes-generator", // creates changelog notes
    "@semantic-release/changelog", // updates CHANGELOG.md
    "@semantic-release/npm", // updates package.json & publishes to npm
    "@semantic-release/github", // creates a GitHub release
    [
      "@semantic-release/git", // commits package.json, package-lock.json, and changelog
      {
        assets: ["package.json", "package-lock.json", "CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ]
  ]
};
