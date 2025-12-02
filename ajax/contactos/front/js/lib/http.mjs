export {get, post, del};

/**
 * Implementación de métdo GET
 */
function get(url) {
    return fetch(url);
}


/**
 * Implementación de métdo POST
 */
function post(url, objeto){
    return fetch(
        url,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objeto)
        }
    );
}


/**
 * Implementación de métdo DELETE
 */
function del(url, id){
    return fetch(
        url+"/"+id,
        {
            method: "DELETE"
        }
    );
}


/**
 * Implementación de métdo GET
 */