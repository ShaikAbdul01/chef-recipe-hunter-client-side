# b7a10-chef-recipe-hunter-client-side-ShaikAbdul01


## Website Link 

### https://chef-recipe-hunter-clien-7005f.web.app/chef



## BD Chef Hub

<p>This website name BD Chef Hub, which is used to build ReactJS, TailWide CSS and DaisyUI.</p>

## Package List and how use it

1. React Router

   `npm create vite@latest name-of-your-project -- --template react`

2. Tailwind css

   `npm install -D tailwindcss`
   `npx tailwindcss init`

3. Daisyui

   `npm install -D tailwindcss`
   `npx tailwindcss init`

4. firebase
5. lottie-react
6. react-fast-marquee
7. react-icons
8. react-lazy-load
9. react-loader-spinner
10. react-rating
11. react-to-pdf
12. react-toastify

## Navbar

<p>A navbar was created for the BD Chef Hub website using TailwindCSS, DaisyUI, ReactJS, and Google Firebase. It includes Home, Blog, About Us, and User Profile Picture. The Profile Picture is conditional, displaying either the user's image or a Login button based on whether the user is signed in. Usernames are also displayed when the mouse hovers over the picture.</p>

## Our Chef Section

<p>The "Our Chef" section of the BD Chef Hub website's home page will display six cards, each containing information about a different chef. This information will be obtained by making a request to a server-side JSON file using the fetch() method. The server-side JSON file will be hosted on the Vercel platform, which allows for easy deployment and management of serverless functions.The information displayed on each card will include the chef's picture, name, years of experience, number of recipes, and number of likes. Each card will also have a button that reads "View Recipes", which, when clicked, will direct the user to a page containing the chef's recipes.Using the fetch() method to retrieve the information from the server-side JSON file will allow for dynamic content to be displayed on the page without the need for a full page reload. This will result in a faster and more seamless user experience. Additionally, hosting the JSON file on Vercel will ensure that the information is easily accessible and can be updated as needed.</p>

## Chef Details and Recipe

<p>The BD Chef Hub website has a Recipes page that displays the details of the selected chef, including their picture, name, description, likes, number of recipes, and years of experience. The page also displays the selected chef's recipes in a tabular form or card group. Each recipe contains the name, ingredients, cooking method, rating, and a Favorite button. The data for the chef details card and recipe card is fetched server-side using Vercel and JSON files.</p>

## Login and Registation

<p>The BD Chef Hub website allows users to log in using email and password, as well as with their Google or GitHub accounts. When a user clicks on the login button, they will be directed to the login page, which will display the available options. The registration page will require the user to provide their name, email, password, and photo URL. The site will display errors on the login page if a user's email or password does not match. The site will also prevent users from submitting empty email and password fields. The website uses Google Firebase to authenticate users and manage their login information.</p>
