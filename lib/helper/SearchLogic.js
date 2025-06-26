

const SearchLogic = (data, searchText) => {


    // search functionality
    var filter = [];
    for (let i = 0; i < data.length; i++) {

        // check if the search text match the system or not
        if (data[i].fullname.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
            filter.push(data[i]);
        } else if (data[i].title.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
            filter.push(data[i]);
        } else if (data[i].eventtype.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
            filter.push(data[i]);
        }
    }


    if (searchText == '') {
        return data;
    } else {
        return filter;
    }



}

export default SearchLogic;


// || data[i].fullname.indexOf(searchText) > -1 || data[i].title.indexOf(searchText) > -1