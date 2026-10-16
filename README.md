# Simple Product Dashboard
This is a simple product dashboard project made with React and Vite for the Web Programming course.

## File Organization
- 'src/components/Card.jsx':Used to wrap other components and make the layout look more organized with the children prop.
- 'src/components/Product.jsx':Shows the information of a product.
- 'src/components/ProductList.jsx':Contains a list of products and displays them using .map().
- 'src/App.jsx':The main file of the project. It manages states like showProducts and name and uses conditional rendering to show different content.

## Challenges Faced
- While working on this project, I had some difficulties with passing props between components and keeping the components simple. I also had to make sure that the components only display data and do not manage their own state. Another challenge was following the project rules, such as not using useEffect, external libraries, or API calls.