import { join } from 'node:path'
import fs from 'fs-extra'

// Writes the current package.json version to `./src/errors/version.ts`.
const versionFilePath = join(__dirname, '../src/version.ts')
const packageJsonPath = join(__dirname, '../package.json')
const packageJson = fs.readJsonSync(packageJsonPath)

fs.writeFileSync(
  versionFilePath,
  `/** @internal */\nexport const version = '${packageJson.version}'\n`,
)
