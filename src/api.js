
const getAllData = async function() {
    try {
        let allData = [];
        let page = 1;
        let totalPages = 42;

        while (page <= totalPages) {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération des données : " + response.statusText);
            }
            const data = await response.json();
            allData = allData.concat(data.results); // Concatenate current page data to allData
            page++;
        }
        
        return allData;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default getAllData;