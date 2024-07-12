# The Galactic Store

Welcome to The Galactic Store, your destination for all things Star Wars! This e-commerce project features essential functionalities:

- **Adding Items to Cart**: Easily add your favorite Star Wars items to your shopping cart.
- **Searching Items**: Quickly find products using the search bar.
- **Checkout and Payment**: Seamless checkout process with Stripe integration (test mode enabled).
- **Editing Item Quantities**: Adjust quantities of items in your cart before finalizing your order.
- **Order Management**: All orders are stored in a MongoDB database, ensuring secure and efficient order tracking.

Please note that this application is a project, developed with passion for Star Wars and an interest in next application with api integration.

# Application Architecture Overview

This project uses MongoDB Atlas for database management, fetching product data using `getServerSideProps` in `pages/index.js`. Products are retrieved via `initMongoose` and `findAllProducts` in `lib/mongoose.js` and rendered on the `Home` component. The `Product` component manages product display and updates cart state through `ProductsContextProvider`, using `useLocalStorageState` for persistence. Cart updates are handled by `addProduct` in `components/Product.js`, reflected in the `CheckoutPage`, managed by `moreOfThisProduct` and `lessOfThisProduct`, and rendered in the `Footer` component. The 'Order' schema defines the structure for saving orders, including products, customer details, and payment status using Mongoose. The api/checkout endpoint initializes MongoDB, fetches products based on IDs, creates a Stripe checkout session, and saves the order using the Order model.



