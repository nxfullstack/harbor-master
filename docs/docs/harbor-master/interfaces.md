---
slug: /harbor-master/interfaces
---

# Interfaces

### ```IApiNamespaceEndpoints```

Used for grouping all CRUD operations on a specific resource.

```shell
$ npm i -D @nx-fullstack/harbor-master

undefined
```

---

### ```IHarborMasterEndpoint```

This interface represents all the properties for a single REST API endpoint. It
includes all the needed information to craft URLs (including parameters), as well
as defining headers on a per-route basis.

```shell
$ npm i -D @nx-fullstack/harbor-master

{}
```
| Property | Type | Description |
| --- | --- | --- |
| `path` | `string` | String representation of URL path **after** the endpoint name |
| `method` | `HttpMethod` | Http verb for easy reference |