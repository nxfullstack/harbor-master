export type HttpMethod =
  | 'get'
  | 'post'
  | 'put'
  | 'patch'
  | 'delete'
  | 'options'
  | 'head';

export type EndpointAction =
  | 'getAll'
  | 'getOne'
  | 'create'
  | 'update'
  | 'upsert'
  | 'delete';

export interface IParameter {
  required: boolean;
}

/** REQUIRED FOR JSDOC TO BE FOUND  */
const STUB = 1;

/**
 * @description
 *
 * This interface represents all the properties for a single REST API endpoint. It
 * includes all the needed information to craft URLs (including parameters), as well
 * as defining headers on a per-route basis.
 *
 * @category Interfaces
 *
 * @name IHarborMasterEndpoint
 *
 * @example {}
 *
 * @export
 * @interface IHarborMasterEndpoint
 */
export interface IHarborMasterEndpoint {
  /**
   * String representation of URL path **after** the endpoint name
   *
   * This path is meant to be used for APIs where endpoint paths
   * are defined relative to an already-established base URL that
   * includes the resource name
   *
   * @example <caption>When requesting all entities</caption>
   * ''
   *
   * @example <caption>When requesting a specific entity</caption>
   * ':id'
   *
   * @example <caption>Usage in NestJS controller</caption>
   * ```ts
   * &#64;Get(routes.getOne.path)
   *```
   * @type {string}
   */
  path: string;

  /**
   * Included for reference as necessary
   *
   * @type {HttpMethod}
   */
  method: HttpMethod;

  /**
   * An object whose keys correspond to any parameters that are available
   * in a URL. Not heavily used at the moment, included for reference and
   * future features.
   *
   * 
   * @example
   *     parameters: {
   *       id: {
   *         required: true;  
   *       }
   *     }

   * 
   * @type {?Record<string, IParameter>}
   */
  parameters?: Record<string, IParameter>;

  /**
   * Method for crafting URLs for a given HTTP action. This simplifies
   * URL lookup by automatically returning a _full_ URL.
   *
   * Implementations should replace any parameters in a URL.
   *
   * @example <caption>Getting URL for a single entity</caption>
   * generateUrl: (entityId: string) => `/api/v1/entity/${entityId}`
   *
   * @type {(...args: any[]) => string}
   */
  generateUrl: (...args: any[]) => string;

  /**
   * Allows for customization of headers in requests. Can return an empty
   * object if headers are not needed.
   *
   * @example <caption>Adding default headers with an optional JWT</caption>
   * ```js
   *     headers: (token: string): Record<string, string> => {
   *       return {
   *         ...(token ? { authorization: `Bearer ${token}` } : {}),
   *         'content-type': `application/json`,
   *         accept: `application/json`,
   *       };
   *     },
   *```
   * @type {(...args: any[]) => Record<string, string>}
   */
  headers: (...args: any[]) => Record<string, string>;
}

/**
 * Used for grouping all CRUD operations on a specific resource.
 *
 * @export
 * @interface IApiNamespaceEndpoints
 * @typedef {IApiNamespaceEndpoints}
 * @extends {Record<EndpointAction, IHarborMasterEndpoint>}
 */
export interface IApiNamespaceEndpoints
  extends Record<EndpointAction, IHarborMasterEndpoint> {
  /**
   * Base URL should point to the prefix used for any resource (without the resource name).
   *
   * @example <caption>Unversioned base</caption>
   * baseUrl: `/api`
   *
   * @example <caption>Verisoned base</caption>
   * baseUrl: `/api/v1`
   * @type {string}
   */
  baseUrl: string;

  /**
   * Resource name, usually pluralized with REST APIs. This property is used in conjunction
   * with the baseUrl to generate full URLs.
   *
   * @example
   * path: `/users`
   *
   * @type {string}
   */
  path: string;
}
