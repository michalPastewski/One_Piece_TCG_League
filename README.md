# Introduction

`In Progress... `

## Getting Started



# Contributing
If you want to contribute to this project you need to do:
   1. Create a github issue or in internal board - contact with project owner. (naming pattern: `[key]-title`); The key for this project is OPL-[next-number].
   2. Find a proper develop branch and `checkout` to create the new feature branch according to the naming patterns ([see examples](#branches));
   3. Make your changes;
   4. If exist - update changelog. 
   5. Run tests - all should pass!!!.
   6. Create pull request with description ([description guide](#pr-description))and waiting for approval or comments.
   7. Merge your changes.

### NOTES: 
- Almost always you need to add test to your code in the same pull request where are you changes.
- It is okay to using long-running-working-branch pattern, but remember to make sure that you have a current stage of major branch (make regular `rebase`).

-  **Creating the commit description on working branch can you use the category name convention to specify the changes:**
      * 'code' -> for every new code (style, logic, new feature, test etc.) => this is default category;
      * 'fix' -> all changes related to fixing a bug;
      * 'ref' -> code refactor or cleaning useless code;
      * 'chore' -> all no code changes: documentation, changelog. adding static/ constant content.




## Branches
| branch name | description |naming pattern| note |
| ----------- | ----------- | ----------- | -----|
|main | branch with latest changes; tested and ready to release| --- | optionally during sanity checks |
||||merges are possible only from develop-[version] branch |
|release | production ready to use with particular version |release-[version]| e.g 'release-0.0.1'| |
|develop | major current working branch related to release version | develop-[version]|e.g 'develop-main' or 'develop-0.0.1'|
||||here are merged all features branches or fixes |
|feature | current work on features, improvements, fixes etc.| dev-[version]/[key]/title| e.g. 'dev-main/OPL-01/add-new-examples'

## PR-description
1. What? 
2. How?
3. Why?
 
 Optionally:

 4. Screenshot before | after.  
 5. Test description.
 6. Additional notes.


<!-- First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->
