---
slug: /harbor-master/generators
---

# Generators

### `library`

Create a new, basic library containing route definitions for a REST API

```shell
$ npm i -D @nx-fullstack/harbor-master

$ nx g @nx-fullstack/harbor-master:library util-routing \
> --directory shared \
> --resourceName users \
> --tags type:util,scope:shared \
> --baseUrl /api/v1
```
