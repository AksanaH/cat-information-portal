class CatService {
    _apiKey = 'api_key=live_5BsEHGXF4Gy8bMfKQmxQRjoPqzxA7LwRHPfNo47pZkohzTCeWPLGBgtfjMLjlrZk';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getAllCats = () => {
        return fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=12&${this._apiKey}`)
            .then(res => res.json())
            .then(res => res.map(cat => this._transformCat(cat)))
            .catch(error => new Error("Failed to fetch cats"))
    };

    getRandomCat = async () => {
        try {
            const res = await this.getResource(`https://api.thecatapi.com/v1/images/search?has_breeds=1&${this._apiKey}`);
            if (!res || res.length === 0) {
                throw new Error("Empty response from API");
            }
            return this._transformCat(res[0]);
        } catch (error) {
            console.error("getRandomCat error:", error);
            throw error; // Ensure the error propagates to the `.catch()`
        }
    };

    _transformCat = (cat) => {
        if (!cat || !cat.breeds || cat.breeds.length === 0) {
            return {
                breed: "Unknown Breed",
                temperament: "N/A",
                wiki: "#",
                image: cat?.url || ""
            };
        }

        const breedInfo = cat.breeds[0]; // Extract the first breed
        return {
            breed: breedInfo.name,
            temperament: breedInfo.temperament,
            wiki: breedInfo.wikipedia_url || "#",
            image: cat.url || ""
        };
    };


}

export default new CatService();