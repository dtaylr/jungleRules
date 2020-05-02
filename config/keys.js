// module.exports = {
//     mongoURI: 'mongodb+srv://ridah101:vsdzdcfdefsdxcersfer@animalsdb-6sptd.mongodb.net/test?retryWrites=true'
// }
module.exports = {
    mongoURI: `mongodb+srv://ridah101:${[process.env.REACT_APP_SERVY]}@animalsdb-6sptd.mongodb.net/test?retryWrites=true`
}

