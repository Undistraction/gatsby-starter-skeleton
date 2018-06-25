echo '💀 Building Demo'
rm -rf ./demo/project
mkdir ./demo/project
# Create a new build of the demo project and deploy to github pages
cd ./demo
# Create a new project using gatsby-skeleton as a starter
gatsby new project https://github.com/undistraction/gatsby-starter-skeleton
echo '💀 Created New Project Based on Starter'
echo '💀 Replaced Default Content'
# Insert path prefix option into Gatsby config file
sed -i '' "s#// pathPrefix: '/example'#pathPrefix: '/gatsby-starter-skeleton'#g" ./project/gatsby-config.js
echo '💀 Set path prefixes in gatsby-config'