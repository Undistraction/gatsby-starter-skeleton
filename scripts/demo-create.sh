echo 'Building Demo'
rm -rf ./demo/project
mkdir ./demo/project
# Create a new build of the demo project and deploy to github pages
cd ./demo
# Create a new project using gatsby-skeleton as a starter
gatsby new project https://github.com/undistraction/gatsby-skeleton-starter
# Copy demo content into the generated project
rm -rf ./project/src/content
cp -r ./content ./project/src/content
# Insert path prefix option into Gatsby config file
sed -i '' "s#// pathPrefix: '/example'#pathPrefix: '/gatsby-skeleton-starter'#g" ./project/gatsby-config.js
