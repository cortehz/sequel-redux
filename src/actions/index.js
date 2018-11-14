export function selectTab(tab) {

    //selectTab is an ActionCreator, it needs to return an actioon,
    //an object with a type property
    return {
        type: 'TAB_SELECTED',
        payload: tab
    }
}