# SCRIPTS TO START WORK:

# 1. npm install -- install npm node_modules

# 2. npm run dev -- opens webpack's devServer on port 3333, runs BE requests via proxy

# 3. npm run build -- builds a production code in '/dist' folder that is ready to be deployed

# IMPORTANT

# SET APPOPRIATE VALUE OF BASE BEFORE USING PARTICULAR MODE:

# './fetch-api/restful-api.links.js': 'const URLS : { BASE: ''}' -- FOR DEVELOPMENT (WEBPACK DEVSERVER)

# 'const URLS : { BASE: 'https://api.excurse.me'} -- FOR PRODUCTION ('./dist')

Importing 'styles' in every component is a preparation step for style encapsulation via css-loader in webpack.

Those components that would contain some complex logic (e.g. BE requests, holding state) should be rewritten to a class components.

Those components that are fairly simple should remain being functional components.

Each component that supposed to be connected to the redux's store has to do that via container pattern (using 'connect' function from 'react-redux' package).
In the end, such component is a HOC (Higher Order Component) and in such form it should be exported and inserted in the application tree instead of usual component (e.g. rating.component.jsx => rating.HOC.js -- use 'HOC' instead of 'component').

Expression in JSX like this "tourList && tourList.length && <...>" checks if 'tourList' exists and, because an array is expected, checks if that array has any item inside.
Using '&&' to set a condition for rendering JSX is a recommended pattern by React official docs.

Each cluster of components that wants to fetch any data from the BE server should register own fetching service (like 'guideService' for 'profile' page);

# So, if you want to implement user authentication, you should create:

1. 'user.service.js' in '/fetch-service/services' => '/fetch-service/services/user.service.js'
2. 'user.reducer.js' in '/redux' => '/redux/user/user.reducer.js'
3. 'user.sagas.js' in /redux/ => '/redux/user/user.sagas.js'
4. Then you should insert created user reducer in a 'root.reducer.js'
5. And insert created user sagas in a 'root.sagas.js'

'rimraf' package is used to delete old version of '/dist' folder and create new app build.

# './webpack.config.js' => 'devServer: { proxy }':

Stars (\*) in "/\*/\*/\*/" represent network request queries, like '/guide-profile/guide/4'. Proxy forms request like 'https://api.excurse.me/guide/4'. Required only for development mode
