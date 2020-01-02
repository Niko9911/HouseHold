/**
 * HouseHold
 * HouseHold API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineResponse2002 from '../model/InlineResponse2002';
import ProductLocation from '../model/ProductLocation';
import ProductLocationjsonld from '../model/ProductLocationjsonld';

/**
* ProductLocation service.
* @module api/ProductLocationApi
* @version 1.0.0
*/
export default class ProductLocationApi {

    /**
    * Constructs a new ProductLocationApi. 
    * @alias module:api/ProductLocationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Removes the ProductLocation resource.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteProductLocationItemWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteProductLocationItem");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/product/locations/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Removes the ProductLocation resource.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteProductLocationItem(id) {
      return this.deleteProductLocationItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves the collection of ProductLocation resources.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    getProductLocationCollectionWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/ld+json'];
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/api/product/locations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves the collection of ProductLocation resources.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The collection page number (default to 1)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    getProductLocationCollection(opts) {
      return this.getProductLocationCollectionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves a ProductLocation resource.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductLocationjsonld} and HTTP response
     */
    getProductLocationItemWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProductLocationItem");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/ld+json'];
      let returnType = ProductLocationjsonld;
      return this.apiClient.callApi(
        '/api/product/locations/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves a ProductLocation resource.
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductLocationjsonld}
     */
    getProductLocationItem(id) {
      return this.getProductLocationItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates the ProductLocation resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductLocation} opts.productLocation The updated ProductLocation resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductLocationjsonld} and HTTP response
     */
    patchProductLocationItemWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['productLocation'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling patchProductLocationItem");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/merge-patch+json'];
      let accepts = ['application/ld+json'];
      let returnType = ProductLocationjsonld;
      return this.apiClient.callApi(
        '/api/product/locations/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates the ProductLocation resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductLocation} opts.productLocation The updated ProductLocation resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductLocationjsonld}
     */
    patchProductLocationItem(id, opts) {
      return this.patchProductLocationItemWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a ProductLocation resource.
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductLocationjsonld} opts.productLocationjsonld The new ProductLocation resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductLocationjsonld} and HTTP response
     */
    postProductLocationCollectionWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['productLocationjsonld'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/ld+json'];
      let accepts = ['application/ld+json'];
      let returnType = ProductLocationjsonld;
      return this.apiClient.callApi(
        '/api/product/locations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a ProductLocation resource.
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductLocationjsonld} opts.productLocationjsonld The new ProductLocation resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductLocationjsonld}
     */
    postProductLocationCollection(opts) {
      return this.postProductLocationCollectionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replaces the ProductLocation resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductLocationjsonld} opts.productLocationjsonld The updated ProductLocation resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProductLocationjsonld} and HTTP response
     */
    putProductLocationItemWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['productLocationjsonld'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putProductLocationItem");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/ld+json'];
      let accepts = ['application/ld+json'];
      let returnType = ProductLocationjsonld;
      return this.apiClient.callApi(
        '/api/product/locations/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Replaces the ProductLocation resource.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ProductLocationjsonld} opts.productLocationjsonld The updated ProductLocation resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductLocationjsonld}
     */
    putProductLocationItem(id, opts) {
      return this.putProductLocationItemWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
