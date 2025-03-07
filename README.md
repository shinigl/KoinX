# KoinX - Crypto Tax Calculator

KoinX is a Crypto Tax Calculator that allows users to calculate their capital gains, tax rates, and tax payments based on their crypto transactions. Users will enter details like purchase price, sale price, expenses, investment type, and annual income to get accurate tax information for both short-term and long-term investments.

## Features

- **Dynamic Tax Rate Calculation**: The tax rate changes based on the user’s annual income.
- **Capital Gains Calculation**: Based on sale price, purchase price, and expenses.
- **Long Term vs Short Term Investment**: Provides different calculations for short-term and long-term investments.
- **Tax Calculation**: Calculates taxes based on capital gains and user’s income tax bracket.
- **Responsive UI**: Clean and user-friendly interface, styled with Tailwind CSS.

---

## Demo

You can view the live demo of this project by clicking on the link below:

[**Live Demo**](https://koin-x-aniket.vercel.app/)

![KoinX Demo](./src/assets/ui.png)

---

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the app.
- **React Icons**: For using icons like checkmark and chevron down from the `react-icons` package.
- **JavaScript (ES6+)**: To handle component logic, state management, and form inputs.

---

## Features and Calculations

### 1. **Annual Income Dropdown**

- The user selects their annual income from predefined income ranges (e.g., `$0 - $18,200`, `$18,201 - $45,000`, etc.).
- The tax rate will change dynamically based on the selected income range.

### 2. **Capital Gains Calculation**

The **Capital Gains Amount** is calculated by the specific formula

### 3. **Investment Type Selection**

- **Short Term Investment**: 
  - Capital gains are calculated normally (as above).
  - Sections related to "Long Term Capital Gains" will be hidden.
- **Long Term Investment**:
  - **Long Term Capital Gains Discount**: If the capital gains amount is positive, 50% of the capital gains amount is deducted.
  - **Net Capital Gains** is calculated as:
    ```
    Net Capital Gains = Capital Gains Amount - Long Term Capital Gains Discount
    ```

### 4. **Tax Calculation**

The **Tax to be paid** is calculated based on the user's **Net Capital Gains** and the tax rate applicable to their income range. 


## Learning from this Project

This project provided insight into the following concepts:

- **Dynamic Form Inputs**: Handling user inputs dynamically in React, and updating values based on those inputs.
- **Conditional Rendering**: Show or hide components based on user selections (e.g., short-term vs. long-term investments).
- **State Management**: Managing different states for tax rate, capital gains, and net gain.
- **Tax Calculations**: Implementing the logic for calculating taxes based on the user’s input.
- **Using Tailwind CSS**: Efficiently styling the app without writing custom CSS by leveraging utility-first classes.
