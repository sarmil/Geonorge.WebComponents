export const getDownloadItems = () => {
    return localStorage.orderItems && Array.isArray(JSON.parse(localStorage.orderItems))
        ? JSON.parse(localStorage.orderItems)
        : [];
}

export const getDownloadItemMetadata = (itemUuid: string) => {
    return localStorage[itemUuid + '.metadata']
        ? JSON.parse(localStorage[itemUuid + '.metadata'])
        : null;
}

export const removeDownloadItem = (itemToRemove) => {
    let selectedItems = localStorage.orderItems && Array.isArray(JSON.parse(localStorage.orderItems))
      ? JSON.parse(localStorage.orderItems)
      : [];
    localStorage.orderItems = JSON.stringify(selectedItems.filter(itemToKeep => itemToKeep !== itemToRemove.uuid));
    localStorage.removeItem(itemToRemove.uuid + ".metadata")


    /*const tagData = {
      name: itemToRemove.name,
      uuid: itemToRemove.uuid,
      accessIsOpendata: itemToRemove.accessIsOpendata,
      accessIsRestricted: itemToRemove.accessIsRestricted,
      organizationName: itemToRemove.organizationName,
      theme: itemToRemove.theme
    };*/
  }