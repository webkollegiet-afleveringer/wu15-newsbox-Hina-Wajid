import { useQuery } from "@tanstack/react-query";

export default function useCachedQuery(category) {

    async function getNews() {

        const api_key = "O9E1o3lrf0ppy93VN1nUk3FCe56bfjCgtJHQe3zoB5SlaA8A"
        const endpoint = `https://api.nytimes.com/svc/news/v3/content/nyt/${category}.json?api-key=${api_key}`;


        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error("something went wrong..");
        }
        const json = await response.json();
        return json;
    }

    const { data, isPending, error } = useQuery({
        queryKey: [category],
        queryFn: getNews,
        staleTime: 1000 * 60 * 100,
    });

    return { data, isPending, error };
}

/* staleTime: 1000 * 60 * 100
 // 100 minutes */