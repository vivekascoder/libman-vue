# 🚀 Libman

- A PWA solution for managing library.
- Using VueJS and 🔥 Firebase.

## Demo
<div style="display: flex; align-items: center; justify-items: center;">
  <div style="margin: 1rem;">
    <img src="./src/assets/libman_1.gif">
  </div>
  <div style="margin: 1rem;">
    <img src="./src/assets/libman_2.gif">
  </div>
  <div style="margin: 1rem;">
    <img src="./src/assets/libman-upload.gif">
  </div>
</div>

<div style="display: flex; align-items: center; justify-items: center;">
  <div style="margin: 1rem;">
    <img src="./src/assets/libman-chart.gif">
  </div>
  <div style="margin: 1rem;">
    <img src="./src/assets/libman-category.gif">
  </div>
  <div style="margin: 1rem;">
    <img src="./src/assets/libman-book.gif">
  </div>
</div>



## Relationship.
- Book
  - BookId
  - Name
  - Author
  - Price

## TODO
- [x] Making /books endpoint funtional and look lood.
- [x] Creating a form to add new book, and creating the /books/add route maybe.
- [x] Implement page transitions.
- [x] Transitiong in Navbar.
- [ ] Fix the transition in Tab.
- [ ] Change the design of Navbar. (#navbar-layout)
- [ ] Make a page to search the Books, 
- [x] Implement an image upload on Book add.
- [x] Implement the firebase database to store the image.
- [ ] Fix the navigation issue in Navbar component.
- [ ] Implement a feature to make some books favorite.
- [x] Chart integration where we can see the traffic on the website.
- [ ] Create a add category page.


## navbar layout
```
|----------------------------|
|                            |
|           Home             |
|         Dashboard          |
|           Login            |
|         Register           |
|                            |
|                            |
|    /---------------\       |
|   |     Logout      |      |
|    \---------------/       |
|                            |
|                            |
|                            |
|                            |
|----------------------------|
```