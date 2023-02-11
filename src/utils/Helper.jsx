/**
 * @description: functional module to store helper functions
 * @example
 * import { Helper } from './utils/Helper';
 * 
 * 
 */

/**
 * @description: Constant to store the base URL of the API
 * @example
 * const BASE_URL = 'LINK_TO_API';
 */
const BASE_URL = 'LINK_TO_API';

/**
 * @description: Function to make a GET request to the API
 * @returns {Object} - Response from the API
 * @example
 * const response = await getRequest();
 * console.log(response);
 * // => {data: "data from the API"}
 * 
 */
export const getRequest = async () => {
      
      try{
            const response = await fetch(BASE_URL, {
                  method: 'GET',
                  headers: {
                        'Content-Type': 'application/json'
                  }
            });
            const json = await response.json();

            return json;

      }catch(error){
            console.error("Error",error);
      }
}

/**
 * @description: Function to make a single GET request to the API
 * @param {String} id - ID of the data to be fetched
 * @returns {Object} - Response from the API
 * @example
 * const response = await getSingleRequest("id");
 * console.log(response);
 * // => {data: "data from the API"}
 */

export const getSingleRequest = async (id) => {
      
      try{
            const response = await fetch(`${BASE_URL}/${id}`, {
                  method: 'GET',
                  headers: {
                        'Content-Type': 'application/json'
                  }
            });
            const json = await response.json();

            return json;

      }catch(error){
            console.error("Error",error);
      }
}

/**
 * @description: Function to make a POST request to the API
 * @param {Object} data - Data to be sent to the API
 * @returns {Object} - Response from the API
 * @example
 * const data = {data: "data to send to the API"};
 * const response = await postRequest(data);
 * console.log(response);
 * // => {data: "data from the API"}
 * 
 * 
 */
export const postRequest = async ( data) => {

      try{
            const response = await fetch(BASE_URL, {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
            });
            const json = await response.json();

            return json;

      }catch(error){
            console.error("Error",error);
      }
}

/**
 * @description: Function to make a PATCH request to the API
 * @param {String} id - ID of the data to be updated
 * @param {Object} data - Data to be sent to the API
 * @returns {Object} - Response from the API
 * @example
 * const data = {data: "data to send to the API"};
 * const response = await patchRequest("id", data);
 * console.log(response);
 * // => {data: "data from the API"}
 * 
 */

export const patchRequest = async (id, data) => {
      
      try{
            const response = await fetch(`${BASE_URL}/${id}`, {
                  method: 'PATCH',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
            });
            const json = await response.json();

            return json;

      }catch(error){
            console.error("Error",error);
      }
}

/**
 * @description: Function to make a DELETE request to the API
 * @param {String} id - ID of the data to be deleted
 * @returns {Object} - Response from the API
 * @example
 * const response = await deleteRequest("id");
 * console.log(response);
 * // => {data: "data from the API"}
 * 
 */

export const deleteRequest = async (id) => {
            
      try{
            const response = await fetch(`${BASE_URL}/${id}`, {
                  method: 'DELETE',
                  headers: {
                        'Content-Type': 'application/json'
                  }
            });
            const json = await response.json();

            return json;

      }catch(error){
            console.error("Error",error);
      }
}