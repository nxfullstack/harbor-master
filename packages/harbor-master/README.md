<br/>
<p align="center">
  <a href="https://github.com/@nx-fullstack/harbor-master">
    <img src="assets/cover.png" alt="Logo" height="120">
  </a>
  <br>
  <small>
    <i>Chart a course for organized REST endpoints!</i>
  </small>

# @nx-fullstack/harbor-master

HarborMaster is a software library that helps you define REST API URLs in a shared library so that multiple applications can read from a single source. With HarborMaster, you can navigate complex API landscapes with ease, securely guiding your data to port.

  <p align="center">
    <a href="https://github.com/@nx-fullstack/harbor-master">
      Explore the docs 📘
    </a>
    <a href="https://github.com/@nx-fullstack/harbor-master">View Demo 🖥</a>
    <a href="https://github.com/@nx-fullstack/harbor-master/issues">Report Bug 🐛</a>
    <a href="https://github.com/@nx-fullstack/harbor-master/issues">Request Feature 🧰</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/nxfullstack/harbor-master/total) ![Contributors](https://img.shields.io/github/contributors/nxfullstack/harbor-master?color=dark-green) ![Issues](https://img.shields.io/github/issues/nxfullstack/harbor-master) ![License](https://img.shields.io/github/license/nxfullstack/harbor-master) ![Build Status](https://img.shields.io/github/actions/workflow/status/nxfullstack/harbor-master/ci.yml?branch=main) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e5079.svg)](https://github.com/semantic-release/semantic-release) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Table Of Contents

- [Built With](#built-with)
- [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)

## Built With

- [Nx](https://nx.dev)

### Installation

#### NPM

```shell
npm install @nx-fullstack/harbor-master
```

#### Yarn

```shell
yarn add @nx-fullstack/harbor-master
```

## Usage

#### Interactively generating a routing library

```shell
nx g @nx-fullstack/harbor-master:library util-routing
```

#### Generating a routing library without prompts

```shell
nx g @nx-fullstack/harbor-master:library util-routing \
> --directory shared \
> --resourceName users \
> --tags type:util,scope:shared \
> --baseUrl /api/v1
```

## Roadmap

See the [open issues](https://github.com/@nx-fullstack/harbor-master/issues) for a list of proposed features (and known issues).

<!-- ### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->

## License

Distributed under the MIT License. See [LICENSE](https://github.com/@nx-fullstack/harbor-master/blob/main/LICENSE.md) for more information.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://thefullstack.engineer/"><img src="https://avatars.githubusercontent.com/u/5431570?v=4?s=100" width="100px;" alt="Wallace Daniel"/><br /><sub><b>Wallace Daniel</b></sub></a><br /><a href="https://github.com/@nx-fullstack/harbor-master/commits?author=wgd3" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Acknowledgements

- [ImgShields](https://shields.io/)
