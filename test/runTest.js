const path = require("path");

const { runTests } = require("vscode-test");
const VSCODE_VERSION = process.env.VSCODE_VERSION;

async function main() {
  try {
    // vscode version
    const version = VSCODE_VERSION;
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = path.resolve(__dirname, "../");

    // The path to the extension test script
    // Passed to --extensionTestsPath
    const extensionTestsPath = path.resolve(__dirname, "./suite/index");

    const launchArgs = [
      `${path.resolve(__dirname, "../")}/test/fixtures/test.code-workspace`,
      "--disable-extensions",
    ];

    // Download VS Code, unzip it and run the integration test
    await runTests({
      version,
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs,
    });
  } catch (err) {
    console.error("Failed to run tests");
    process.exit(1);
  }
}

main();
