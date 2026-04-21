# 🎓 Student Scoreboard Application

A React-based Student Scoreboard Application built using **functional components**, **state management (useState)**, and **component-based architecture**.

This project was developed as part of **Web Development II (Advanced JS & React) – Lab Assignment 3**.

---

## 📌 Features

* 📋 **Display Students**

  * View student names and scores in a table format

* ✏️ **Update Scores**

  * Update scores dynamically using input fields
  * UI updates instantly without page reload

* ➕ **Add New Students**

  * Add students using a form (name + score)
  * Form resets after submission

* ✅ **Pass/Fail Status**

  * Pass → Score ≥ 40
  * Fail → Score < 40
  * Styled using conditional rendering

* 📊 **Stats Dashboard (StatsCard)**

  * Total number of students
  * Number of students passed
  * Average score calculation

---

## Live Demo

(Live Demo)[https://student-scoreboard-ten.vercel.app/]

---

## 🧩 Component Structure

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── StudentTable.jsx
│   ├── StudentRow.jsx
│   ├── AddStudentForm.jsx
│   └── StatsCards.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Technologies Used

* ⚛️ React (with Vite)
* 🧠 JavaScript (ES6 + JSX)
* 🎨 CSS (or Tailwind CSS depending on version)

---

## 🔁 State Management

* Student data is stored in the **App component**
* Passed to child components using **props**
* Updated dynamically using **useState**

---

## 📊 StatsCard Logic

The StatsCard component calculates:

* **Total Students**
* **Passed Students**
* **Average Score**

```js
const total = students.length;

const passed = students.filter(
  (student) => student.score >= 40
).length;

const avg = total === 0
  ? 0
  : Math.round(
      students.reduce((sum, s) => sum + s.score, 0) / total
    );
```

---

## ▶️ How to Run the Project

1. Clone the repository:

```bash
git clone <your-repo-link>
```

2. Navigate into the project folder:

```bash
cd student-scoreboard
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

---

## 🧪 Example Data

| Name  | Score | Status |
| ----- | ----- | ------ |
| Aman  | 78    | Pass   |
| Riya  | 45    | Pass   |
| Karan | 22    | Fail   |

---

## 🎯 Learning Outcomes

* Understanding of **React component architecture**
* Hands-on experience with **useState**
* Implementation of **props and state flow**
* Conditional rendering in React
* Dynamic UI updates without reload

---

## 📌 Author

**Anupam Chaudhary**
B.Tech CSE (AI/ML)

---

## 🚀 Future Improvements

* Add delete student feature
* Add sorting/filtering
* Connect to backend (Flask / Node)
* Store data in database

---
