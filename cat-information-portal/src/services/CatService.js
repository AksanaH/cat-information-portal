class CatService {
    _apiKey = 'api_key=live_5BsEHGXF4Gy8bMfKQmxQRjoPqzxA7LwRHPfNo47pZkohzTCeWPLGBgtfjMLjlrZk';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getAllCats = async () => {
        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=100&${this._apiKey}`);
            if (!response.ok) throw new Error("Failed to fetch cats");

            const res = await response.json();
            console.log("API Response all cats:", res); // Debugging

            return res.map(cat => {
                const breedInfo = cat.breeds && Array.isArray(cat.breeds) && cat.breeds.length > 0 ? cat.breeds[0] : null;

                return {
                    breed: breedInfo ? breedInfo.name : "Unknown Breed",
                    temperament: breedInfo ? breedInfo.temperament : "N/A",
                    wiki: breedInfo ? breedInfo.wikipedia_url : "#",
                    image: cat.url || ""
                };
            });

        } catch (error) {
            console.error("Error fetching cats:", error);
            return [];
        }
    };

    // getBengalCats = () => {
    //     return this.getResource(`https://api.thecatapi.com/v1/images/search?breed_ids=beng&limit=100&${this._apiKey}`)
    // }

    getRandomCat = async (id) => {
        const res = await this.getResource(`https://api.thecatapi.com/v1/images/search?has_breeds=1&${this._apiKey}`)
        return this._transformCat(res);
    }

    _transformCat = (res) => {
        const breedInfo = res[0].breeds && res[0].breeds.length > 0 ? res[0].breeds[0] : null;
        return {
            breed: breedInfo ? breedInfo.name : "Unknown Breed",
            temperament: breedInfo ? breedInfo.temperament : "N/A",
            wiki: breedInfo ? breedInfo.wikipedia_url : "#",
            image: res[0].url || ""
        }
    }

}

export default CatService;