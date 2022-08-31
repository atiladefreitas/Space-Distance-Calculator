<div id="top"></div>

<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="./src/assets/Logo.png" alt="Logo" >
  </a>
  <h3 align="center">Space Distance Calculator</h3>

  <p align="center">
    An awesome React project by Átila de Freitas
    <br />
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage-&-Function-walkthrough">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

<div align="center">
</div>
</br>
Application developed in React.JS focusing on the consume external API.

In this application you can:

- Measure how many stops you will need to reach your destination.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React Native](https://pt-br.reactjs.org/)
- [Styled Components](https://styled-components.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites

For run the application you need the following tool:

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo

```sh
git clone https://github.com/atiladefreitas/Space-Distance-Calculator.git
```

2. Install NPM packages
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage & Function walkthrough

This application was developed for study and contains some simple features of interaction with the API.

- Fetching data from API

_For this, useEffect Hook was used and an new state was created in `newPosts`, working like an local storage_

```javascript
useEffect(() => {
  const fetchPosts = () => {
    fetch(`${apiURL}/posts`)
      .then((response) => response.json())
      .then((json) => {
        const newPosts = [
          ...json.map((post: any) => {
            return {
              id: post.id,
              body: post.body,
              title: post.title,
              userId: post.userId,
              favorite: false
            };
          })
        ];
        setOriginalData(newPosts);
        setPosts(newPosts);
      });
  };
  fetchPosts();
}, []);
```

- Deleting Post

_The API being consumed is an Fake API, so, all `DELETE` requisition will return `error 200`, for handle with this, I created an simple `if else` statement for deleted the specific post localy_

```javascript
const handleDeletePost = async (id: any) => {
  await fetch(`${apiURL}/posts/${id}`, {
    method: 'DELETE'
  })
    .then((response) => {
      if (response.status !== 200) {
        return;
      } else {
        setPosts(
          posts.filter((post) => {
            return post.id !== id;
          })
        );
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
};
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

<div align="center">

<img src="./src/assets/banner_contact.png" width="900">
</br>
</br>
<p align="center">
<a href="https://www.linkedin.com/in/atilafreitas/"><img src="./src/assets/Linkedin.png"height="45em"/></a>
    &nbsp;
    <a href="https://instagram.com/atiladefreitas.co/"><img src="./src/assets/isntagram.png"height="45em"/></a>
    &nbsp;
    <a href="https://t.me/atilajcfreitas"><img src="./src/assets/Telegram.png"height="45em"/></a>
    &nbsp;
    <a href="mailto:contact@atiladefreitas.co"><img src="./src/assets/E-mail.png" height="45em"/></a>
    &nbsp;
    <a href="https://github.com/atiladefreitas"><img src="./src/assets/Github.png"height="45em"/></a>
</p>
</div>
