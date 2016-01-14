# Use of "module": "es6" setting in TsConfig.Json
Minimal reproduction of TypeScript issue in VS2015 Update 1

##Issue##
Use of the `"compilerOptions": {"module": "es6"}` setting in TsConfig.json in a VS2015 "Web Site" appears to break the editor for ReactJs TSX files. 

##Environment##
1. Visual Studio 2015 (Community) - Update 1
1. Typescript 1.7 Extension
1. Windows 7 SP1 (64-bit)

##Steps to Reproduce##

###"Normal" behaviour with "target": "es6"###
1. Clone or copy this repo to disk
1. `npm install`
1. Launch VS2015 Community - Update 1
1. Select File/Open/Web Site...
1. Select the root folder containing this repo.
1. From Solution Explorer, open the file ~/src/views/Badge.tsx
2. Observe that syntax highlighting works for `React.Component` etc.
3. Make trivial (non-destructive) edit to source code (e.g. add a comment)
4. Observe that entered keystrokes are rendered
5. Close ~/src/views/Badge.tsx

###Unexpected behaviour with "module": "es6"###
6. Using Solution Explorer, open the file ~/tsconfig.json
7. Change the setting: `"compilerOptions": {"target": "es6"}` to `"compilerOptions": {"module": "es6"}`
8. Save the file ~/tsconfig.json
9. Close the file ~/tsconfig.json
10. From Solution Explorer, re-open the file ~/src/views/Badge.tsx
2. Observe that syntax highlighting does not work for `React.Component` etc.
3. Attempt to make trivial (non-destructive) edit to source code (e.g. add a comment)
4. Observe that entered keystrokes (other than "ENTER", "BACKSPACE", "Paste") are not rendered.

