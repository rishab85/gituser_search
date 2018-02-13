export function errorOccured(bool){
  return{
    type:"ERROR_OCCURED",
    errorOccured : bool
  };
}

export function isLoading(bool){
  return{
    type:"IS_LOADING",
    isLoading:bool
  };
}

export function isActive(active){
  return{
    type:"IS_ACTIVE",
    isActive:active
  }
}

export function fetchSuccess(items){
  return{
    type:"FETCH_SUCCESS",
    items
  }
}


export function lastElement(last){
      return{
        type:"LAST_ELEMENT",
        lastElement : last
      }
}

export function setActive(active){
  return((dispatch)=>{
    dispatch(isActive(active))
  })
}


export function fetchData(url){
  return((dispatch)=>{
    dispatch(isLoading(true));

    fetch(url)
    .then((response)=> {
      if(!response.ok){
        throw Error(response.status)
      }

      dispatch(isLoading(false));

      return response;
    })
    .then((response)=>response.json())
    .then((items)=>dispatch(fetchSuccess(items)))
    .then((items)=>dispatch(lastElement(items.length-1)))
    .catch(()=>dispatch(errorOccured(true)));
  }
  );
}
